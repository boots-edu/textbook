import * as ts from "typescript";
import {RAW_D_TS_FILES} from "./raw_kettle_compiler_dts";

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

//
// Result of compiling TypeScript code.
//
export interface CompilationResult {
    code?: string;
    diagnostics: ts.Diagnostic[];
    locals: Map<string, ts.Symbol>;
    typeInformation: Record<string, DocEntry[]>;
}

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

export function removeEmptyExports(code: string): string {
    // https://github.com/microsoft/TypeScript/issues/41513
    return code.replace(/export\s*{\s*}/g, "");
}

interface MockIO {
    fileExists(fileName: string): boolean;
    readFile(fileName: string): string | undefined;
    writeFile(fileName: string, data: string): void;
}

const otherFakeFiles: Record<string, string> = RAW_D_TS_FILES;
const KETTLE_D_TS_FILENAME = "kettle.d.ts";
otherFakeFiles[KETTLE_D_TS_FILENAME] = KETTLE_JEST_D_TS;
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

//
// Check and compile in-memory TypeScript code for errors.
//
export function compile(code: string): CompilationResult {
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

    const [dummyFilePath, dummyFileOut] = ["in-memory-file.ts", "in-memory-file.js"];
    // const dummySourceFile = ts.createSourceFile(
    //     dummyFilePath,
    //     code,
    //     ts.ScriptTarget.Latest,
    //     true,
    // );
    let outputCode: string | undefined = undefined;

    const host: ts.CompilerHost = createCompilerHost(
        options,
        {
            fileExists: (fileName) => {
                // console.log("fileExists", fileName, fileName === dummyFilePath || fileName in otherFakeFiles);
                return fileName === dummyFilePath || fileName in otherFakeFiles;
            },
            readFile: (fileName) => {
                console.log("readFile", fileName, fileName === dummyFilePath || fileName in otherFakeFiles);
                if (fileName === dummyFilePath) {
                    //console.log("readFile", fileName, "Main");
                    return code;
                }
                if (fileName in otherFakeFiles) {
                    //console.log("readFile", fileName, "Additional");
                    return otherFakeFiles[fileName];
                }
                //console.log("readFile", fileName, "Missing");
                return undefined;
            },
            writeFile: (fileName, data) => {
                //console.log("writeFile", fileName);
                if (fileName === dummyFileOut) {
                    outputCode = data;
                }
            }
        }
    );

    const rootNames = [KETTLE_D_TS_FILENAME]; // Object.keys(otherFakeFiles); //libs.map(lib => require.resolve(`typescript/lib/lib.${lib}.d.ts`));
    const program = ts.createProgram(
        rootNames.concat([dummyFilePath]),
        options,
        host,
    );
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
    const diagnostics = ts.getPreEmitDiagnostics(program);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (outputCode === undefined) {
        throw new Error("No output code generated");
    }

    const resultSourcefile = program.getSourceFile(dummyFilePath);
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const locals: Map<string, ts.Symbol> = (resultSourcefile as any).locals || new Map<string, ts.Symbol>();
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

export function delint(sourceFile: ts.SourceFile) {
    function report(node: ts.Node, message: string) {
        const { line, character } = sourceFile.getLineAndCharacterOfPosition(
            node.getStart(),
        );
        console.log(
            `${sourceFile.fileName} (${line + 1},${character + 1}): ${message}`,
        );
    }
    function delintNode(node: ts.Node) {
        let ifStatement, op;
        switch (node.kind) {
            case ts.SyntaxKind.ForStatement:
            case ts.SyntaxKind.ForInStatement:
            case ts.SyntaxKind.WhileStatement:
            case ts.SyntaxKind.DoStatement:
                if (
                    (node as ts.IterationStatement).statement.kind !==
                    ts.SyntaxKind.Block
                ) {
                    report(
                        node,
                        "A looping statement's contents should be wrapped in a block body.",
                    );
                }
                break;

            case ts.SyntaxKind.IfStatement:
                ifStatement = node as ts.IfStatement;
                if (ifStatement.thenStatement.kind !== ts.SyntaxKind.Block) {
                    report(
                        ifStatement.thenStatement,
                        "An if statement's contents should be wrapped in a block body.",
                    );
                }
                if (
                    ifStatement.elseStatement &&
                    ifStatement.elseStatement.kind !== ts.SyntaxKind.Block &&
                    ifStatement.elseStatement.kind !== ts.SyntaxKind.IfStatement
                ) {
                    report(
                        ifStatement.elseStatement,
                        "An else statement's contents should be wrapped in a block body.",
                    );
                }
                break;

            case ts.SyntaxKind.BinaryExpression:
                op = (node as ts.BinaryExpression).operatorToken.kind;
                if (
                    op === ts.SyntaxKind.EqualsEqualsToken ||
                    op === ts.SyntaxKind.ExclamationEqualsToken
                ) {
                    report(node, "Use '===' and '!=='.");
                }
                break;
        }

        ts.forEachChild(node, delintNode);
    }

    delintNode(sourceFile);
}
