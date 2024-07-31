import * as ts from "typescript";
import {RAW_D_TS_FILES} from "./raw_kettle_compiler_dts";

/**
 * TypeScript type definitions for the instructor runtime library and the pseudo Jest library that
 * we support.
 */
const KETTLE_JEST_D_TS = `
    interface Assertion {
        toBe: (expected: any) => void;
        toEqual: (expected: any) => void;
        toContain: (expected: any) => void;
        toBeInstanceOf: (expected: any) => void;
        toThrowError: (expected: any) =>void;
        not: Assertion;
    }
    declare function instructor_log(...args: any[]): void;
    declare function describe(name: string, tests: any): void;
    declare function test(name: string, assertions: any): void;
    declare function expect(actual: any): Assertion;
    declare var student: Record<string, any>;
    interface DocEntry {
        name?: string,
        fileName?: string,
        documentation?: string,
        type?: string,
        constructors?: DocEntry[],
        parameters?: DocEntry[],
        returnType?: string,
        modifiers?: string[]
    }
    declare var typeInformation: Record<string, DocEntry[]>;
`;

const ASSET_PATH="/textbook/assets/imports/";

/**
 * The result of a compilation operation. This includes the compiled code,
 * any diagnostics that were generated, a list of the locals,
 * and the type information for the code.
 * 
 * The type information is a map from class names to their members.
 */
export interface CompilationResult {
    code?: string;
    diagnostics: ts.Diagnostic[];
    locals: Map<string, ts.Symbol>;
    typeInformation: Record<string, DocEntry[]>;
}

/**
 * A TypeScript transformer that removes export statements from the code.
 * This is used to prevent the TypeScript compiler from exporting the code,
 * which is not compatible with the way the Kettle compiler works.
 * It literally just visits all the Export and Async keywords and returns undefined,
 * which removes them from the AST tree.
 */
const removeExports: ts.TransformerFactory<ts.SourceFile> = ((context) => {
    return (sourceFile) => {
        const visitChildren = (child: ts.Node): ts.Node | undefined => {
            if (child.kind == ts.SyntaxKind.ExportKeyword) return undefined;
            if (child.kind == ts.SyntaxKind.AsyncKeyword) return undefined;
            if (child.kind === ts.SyntaxKind.ExportDeclaration) {
                return undefined;
            }

            return ts.visitEachChild(child, visitChildren, context);
        };
        const convertNode = (node: ts.Node) => {
            return ts.visitEachChild(node, visitChildren, context);
        };
        const visit = (node: ts.Node): ts.Node => {
            return ts.visitEachChild(
                node,
                (node) => convertNode(node),
                context,
            );
        };

        return ts.visitNode(sourceFile, visit);
    };
}) as ts.TransformerFactory<ts.SourceFile>;

/**
 * A documentation entry for a TypeScript symbol.
 * These are modeled after similar data types in the TypeScript compiler.
 */
interface DocEntry {
    name?: string;
    fileName?: string;
    documentation?: string;
    type?: string;
    constructors?: DocEntry[];
    parameters?: DocEntry[];
    returnType?: string;
    modifiers?: string[];
}

/**
 * Traverses the AST looking for class definitions and their members, in order to get
 * the type information for the classes. This includes information about the privacy
 * modifiers of the class members.
 * @param program 
 * @param locals 
 * @returns 
 */
export function getClassDefinitions(
    program: ts.Program,
    locals: Map<string, ts.Symbol>,
): Record<string, DocEntry[]> {
    const classMap: Record<string, DocEntry[]> = {};
    const checker = program.getTypeChecker();

    /** Serialize a symbol into a json object */
    function serializeSymbol(symbol: ts.Symbol): DocEntry {
        //const modifiers = getEffectiveModifierFlags(symbol.valueDeclaration);
        let allModifiersAsStrings: string[] = [];
        if ("valueDeclaration" in symbol) {
            allModifiersAsStrings = Object.entries(ts.ModifierFlags)
                .filter(([, v]) => {
                    return (
                        // @ts-expect-error: The getSyntacticModifierFlags does actually exist, I promise
                        (ts.getSyntacticModifierFlags(symbol.valueDeclaration) &
                            (v as number)) !==
                        0
                    );
                })
                .map(([k]) => k);
        }
        return {
            name: symbol.getName(),
            type: checker.typeToString(
                checker.getTypeOfSymbolAtLocation(
                    symbol,
                    symbol.valueDeclaration!,
                ),
            ),
            modifiers: allModifiersAsStrings,
        };
    }

    /** Serialize a signature (call or construct) */
    function serializeSignature(signature: ts.Signature) {
        return {
            parameters: signature.parameters.map(serializeSymbol),
            returnType: checker.typeToString(signature.getReturnType()),
        };
    }

    /** Serialize a class symbol information */
    function serializeClass(symbol: ts.Symbol) {
        let details = serializeSymbol(symbol);

        // Get the construct signatures
        let constructorType = checker.getTypeOfSymbolAtLocation(
            symbol,
            symbol.valueDeclaration!,
        );
        details.constructors = constructorType
            .getConstructSignatures()
            .map(serializeSignature);
        return details;
    }

    locals.forEach((value, key) => {
        if ("exportSymbol" in value && value["exportSymbol"] !== undefined) {
            value = value["exportSymbol"] as ts.Symbol;
        }
        if ("members" in value && value.members !== undefined) {
            const classProperties: DocEntry[] = [];
            value.members.forEach((type: ts.Symbol) => {
                classProperties.push(serializeClass(type));
            });
            const serialized = serializeClass(value);
            serialized.name = "";
            classProperties.push(serialized);
            classMap[key] = classProperties;
        }
    });
    return classMap;
}

/**
 * Removes empty export statements from the code.
 * @param code The code to remove empty exports from.
 * @returns The code with empty exports removed.
 */
export function removeEmptyExports(code: string): string {
    // https://github.com/microsoft/TypeScript/issues/41513
    return code.replace(/export\s*{\s*}/g, "");
}

/**
 * A specification of the read/write operations that the TypeScript compiler
 * will perform. This is used to mock the file system for the TypeScript
 * compiler.
 */
interface MockIO {
    fileExists(fileName: string): boolean;
    readFile(fileName: string): string | undefined;
    writeFile(fileName: string, data: string): void;
}

// The actual TypeScript type definitions
const otherFakeFiles: Record<string, string> = RAW_D_TS_FILES;
// A TypeScript type definition for the kettle compiler.
const KETTLE_D_TS_FILENAME = "kettle.d.ts";
otherFakeFiles[KETTLE_D_TS_FILENAME] = KETTLE_JEST_D_TS;


/**
 * Create a compiler host for the TypeScript compiler, which binds to the given
 * IO object.
 * @param options Compiler host options
 * @param io A mock IO object, with fileExists, readFile, and writeFile methods
 * @returns 
 */
function createCompilerHost(
    options: ts.CompilerOptions,
    io: MockIO
): ts.CompilerHost {
    
    return {
        getSourceFile: (fileName, languageVersion) => {
            const text = io.readFile(fileName);
            if (text === undefined) {
                return undefined;
            }
            return ts.createSourceFile(fileName, text, languageVersion);
        },
        getDefaultLibFileName: () => "lib.es2016.full.d.ts",
        writeFile: (fileName, data) => {
            io.writeFile(fileName, data);
        },
        getCurrentDirectory: () => "",
        getDirectories: () => [],
        getCanonicalFileName: (fileName) =>
            fileName.toLowerCase(),
        getNewLine: () => "\n",
        useCaseSensitiveFileNames: () => false,
        fileExists: io.fileExists.bind(io),
        readFile: io.readFile.bind(io)
    };
}

/** 
 * @description Reads a file from the assets folder (specified in ASSET_PATH)
 * @param filename: The filename to read
 * @returns the contents of the file
 */
export function getFileFromWeb(filename:string):Promise<string>{
    return new Promise((resolve,reject)=>{
        let path=ASSET_PATH+filename;
        const req = new XMLHttpRequest();
        req.addEventListener("error",()=>{
            reject(new Error("Error getting import"));
        })
        req.addEventListener("load", ()=>{
            resolve(req.responseText);
        });
        req.open("GET", path);
        req.send();
    })
}
/**
 * @description Replaces import statements with code from assets/imports folder
 * @param code: The original source code as displayed
 * @returns The original code with the imports injected into the string
 * @async
 */
async function processImports(code:string):Promise<string>{
    const lines=code.split("\n");
    let result="";
    for (let line of lines){
        if (line.startsWith("import ")){
            let regex=/^import\s.*\sfrom\s.*['|"](.*)['|"]'?;\s*$/;
            let found=regex.exec(line);
            if (found && found.length>1){
                let filename=found[1];
                if (!filename.endsWith(".ts"))
                    filename+=".ts";
                let impCode=await getFileFromWeb(filename);
                result+=(impCode+"\n");
            }
        }else{
            result+=(line+"\n");
        }
    }
    return result;
}
//
// Check and compile in-memory TypeScript code for errors.
//
export async function compile(code: string): Promise<CompilationResult> {
    //parse and remove imports
    code = await processImports(code);
    // Setup the fake compiler's options
    const options = ts.getDefaultCompilerOptions();
    options.noImplicitAny = true;
    options.inlineSources = true;
    options.inlineSourceMap = true;
    options.target = ts.ScriptTarget.ES2016;
    options.removeComments = false;
    options.module = ts.ModuleKind.ES2015; // ESNEXT?
    options.useCaseSensitiveFileNames = false;
    options.allowJs = true;
    options.noLib = false;
    options.experimentalDecorators = false;

    // Create the output "file" in memory
    const [dummyFilePath, dummyFileOut] = ["in-memory-file.ts", "in-memory-file.js"];
    let outputCode: string | undefined = undefined;

    // Create the fake compiler host
    const host: ts.CompilerHost = createCompilerHost(
        options,
        {
            fileExists: (fileName) => {
                return fileName === dummyFilePath || fileName in otherFakeFiles;
            },
            readFile: (fileName) => {
                if (fileName === dummyFilePath) {
                    return code;
                }
                if (fileName in otherFakeFiles) {
                    return otherFakeFiles[fileName];
                }
                return undefined;
            },
            writeFile: (fileName, data) => {
                if (fileName === dummyFileOut) {
                    outputCode = data;
                }
            }
        }
    );

    // Create the TypeScript program
    const rootNames = [KETTLE_D_TS_FILENAME];
    const program = ts.createProgram(
        rootNames.concat([dummyFilePath]),
        options,
        host,
    );

    // Run the type checker, removing exports first
    //console.log(checker.getSymbolsInScope(dummySourceFile, ts.SymbolFlags.Module));
    const emitResult = program.emit(
        undefined,
        undefined,
        undefined,
        undefined,
        {
            before: [removeExports],
        },
    );

    // Collect diagnostics
    const diagnostics = ts.getPreEmitDiagnostics(program);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (outputCode === undefined) {
        throw new Error("No output code generated");
    }

    // Get the source file to extract local symbols
    const resultSourcefile = program.getSourceFile(dummyFilePath);
    
    // Retrieve all the locals
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const locals: Map<string, ts.Symbol> = (resultSourcefile as any).locals || new Map<string, ts.Symbol>();

    // Return everything
    return {
        code: removeEmptyExports(outputCode),
        diagnostics: emitResult.diagnostics.concat(diagnostics),
        locals: locals,
        typeInformation: {} /*getClassDefinitions(
            program,
            locals,
        ),*/
    };
}