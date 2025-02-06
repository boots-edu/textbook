import * as ts from "typescript";
import importableFiles from "./externals/importable_files.json";
import { VirtualFileSet } from "./virtual_files";
// import {RAW_D_TS_FILES} from "./raw_kettle_compiler_dts";

export const STUDENT_MAIN = { TS: "student_main.ts", JS: "student_main.js" };

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
    declare function _setIframeVisible(visible: boolean): void;
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

const ASSET_PATH = "/textbook/assets/imports/";

function makeDiagnostic(message: string): ts.Diagnostic {
    return {
        category: ts.DiagnosticCategory.Error,
        code: 0,
        file: undefined,
        start: 0,
        length: 0,
        messageText: message,
    };
}

/**
 * The result of a compilation operation. This includes the compiled code,
 * any diagnostics that were generated, a list of the locals,
 * and the type information for the code.
 *
 * The type information is a map from class names to their members.
 */
export interface CompilationResult {
    code?: string;
    files: Record<string, string>;
    imports: Record<string, string>;
    diagnostics: ts.Diagnostic[];
    locals: Map<string, ts.Symbol>;
    typeInformation: Record<string, DocEntry[]>;
}

export type Importer = (file: string) => void;

/**
 * Go through the AST and if we find a class MainComponent, then add some code to the
 * end of the file to actually inject the component into the DOM.
 * Pretty dirty hack, should be more elegant ways.
 * @returns
 */
const setupWebz: () => ts.TransformerFactory<ts.SourceFile> = () =>
    ((context) => {
        return (sourceFile) => {
            let foundMainComponent = false;
            const visitChildren = (child: ts.Node): ts.Node | undefined => {
                return ts.visitEachChild(child, visitChildren, context);
            };
            const convertNode = (node: ts.Node) => {
                if (node.kind === ts.SyntaxKind.ClassDeclaration) {
                    const classDeclaration = node as ts.ClassDeclaration;
                    if (classDeclaration.name?.getText() === "MainComponent") {
                        foundMainComponent = true;
                    }
                }
                return ts.visitEachChild(node, visitChildren, context);
            };
            const visit = (node: ts.Node): ts.Node => {
                return ts.visitEachChild(
                    node,
                    (node) => convertNode(node),
                    context,
                );
            };

            const result = ts.visitNode(sourceFile, visit) as ts.SourceFile;
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (foundMainComponent) {
                // _setIframeVisible(true); window.document.body.innerHTML = ""; (new MainComponent()).appendToDomElement(window.document.body);
                const iframeChange = ts.factory.createExpressionStatement(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("_setIframeVisible"),
                        undefined,
                        [ts.factory.createTrue()],
                    ),
                );
                const windowBody = ts.factory.createPropertyAccessExpression(
                    ts.factory.createPropertyAccessExpression(
                        ts.factory.createIdentifier("window"),
                        ts.factory.createIdentifier("document"),
                    ),
                    ts.factory.createIdentifier("body"),
                );
                const clearBody = ts.factory.createExpressionStatement(
                    ts.factory.createBinaryExpression(
                        ts.factory.createPropertyAccessExpression(
                            windowBody,
                            ts.factory.createIdentifier("innerHTML"),
                        ),
                        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                        ts.factory.createStringLiteral(""),
                    ),
                );
                const newMainComponent = ts.factory.createExpressionStatement(
                    ts.factory.createCallExpression(
                        ts.factory.createPropertyAccessExpression(
                            ts.factory.createParenthesizedExpression(
                                ts.factory.createNewExpression(
                                    ts.factory.createIdentifier(
                                        "MainComponent",
                                    ),
                                    undefined,
                                    [],
                                ),
                            ),
                            ts.factory.createIdentifier("appendToDomElement"),
                        ),
                        undefined,
                        [windowBody],
                    ),
                );
                const newStatements = [
                    ...result.statements,
                    iframeChange,
                    clearBody,
                    newMainComponent,
                ];
                const newSourceFile = ts.factory.updateSourceFile(
                    result,
                    newStatements,
                );
                return newSourceFile;
            }
            return result;
        };
    }) as ts.TransformerFactory<ts.SourceFile>;

/**
 * A TypeScript transformer that removes export statements from the code.
 * This is used to prevent the TypeScript compiler from exporting the code,
 * which is not compatible with the way the Kettle compiler works.
 * It literally just visits all the Export and Async keywords and returns undefined,
 * which removes them from the AST tree.
 */
const removeExports: (
    importFile: Importer,
) => ts.TransformerFactory<ts.SourceFile> = (importFile: Importer) =>
    ((context) => {
        return (sourceFile) => {
            const visitChildren = (child: ts.Node): ts.Node | undefined => {
                if (
                    child.kind === ts.SyntaxKind.ExportKeyword ||
                    child.kind === ts.SyntaxKind.AsyncKeyword ||
                    child.kind === ts.SyntaxKind.ExportDeclaration
                ) {
                    return undefined;
                }
                return ts.visitEachChild(child, visitChildren, context);
            };
            const convertNode = (node: ts.Node) => {
                if (node.kind === ts.SyntaxKind.ImportDeclaration) {
                    // return ts.createVariableDeclarationList([], ts.NodeFlags.Const);
                    const importChild = node as ts.ImportDeclaration;
                    let identifier: string | ts.BindingName;
                    let isDefault = false;
                    if (
                        importChild.importClause?.namedBindings?.kind ===
                        ts.SyntaxKind.NamedImports
                    ) {
                        const namedBindings = importChild.importClause
                            .namedBindings as ts.NamedImports;
                        identifier = ts.factory.createObjectBindingPattern(
                            namedBindings.elements.map((node) =>
                                ts.factory.createBindingElement(
                                    undefined,
                                    undefined,
                                    ts.factory.createIdentifier(node.getText()),
                                    undefined,
                                ),
                            ),
                        );
                    } else {
                        identifier = importChild.importClause?.getText() || "";
                        isDefault = true;
                    }
                    const moduleName = importChild.moduleSpecifier
                        .getText()
                        .replaceAll('"', "")
                        .replaceAll("'", "");
                    importFile(moduleName);
                    const importModuleCall = ts.factory.createCallExpression(
                        ts.factory.createIdentifier("$importModule"),
                        undefined,
                        [ts.factory.createStringLiteral(moduleName)],
                    );
                    return ts.factory.createVariableStatement(
                        undefined,
                        ts.factory.createVariableDeclarationList(
                            [
                                ts.factory.createVariableDeclaration(
                                    identifier,
                                    undefined,
                                    undefined,
                                    isDefault ?
                                        ts.factory.createPropertyAccessExpression(
                                            importModuleCall,
                                            ts.factory.createIdentifier(
                                                "default",
                                            ),
                                        )
                                    :   importModuleCall,
                                ),
                            ],
                            ts.NodeFlags.Const,
                        ),
                    );
                }
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
    rememberImport(moduleName: string, fileName: string): void;
    error(message: string): void;
}

// The actual TypeScript type definitions
const ORIGINAL_FILES: Record<string, string> = importableFiles as Record<
    string,
    string
>;
// A TypeScript type definition for the kettle compiler.
const KETTLE_D_TS_FILENAME = "kettle.d.ts";
ORIGINAL_FILES[KETTLE_D_TS_FILENAME] = KETTLE_JEST_D_TS;
ORIGINAL_FILES["fake.ts"] = "export const someValue = 0;";

const EXTRA_TYPES = [".txt", ".md", ".json", ".yaml", ".html", ".css"];

/**
 * Create a compiler host for the TypeScript compiler, which binds to the given
 * IO object.
 * @param options Compiler host options
 * @param io A mock IO object, with fileExists, readFile, and writeFile methods
 * @returns
 */
function createCompilerHost(
    options: ts.CompilerOptions,
    io: MockIO,
): ts.CompilerHost {
    /**
     * Resolve module names for the TypeScript compiler.
     * Need a custom implementation because otherwise the extensions get mangled;
     * specifically, things like "bind.decorators.d.ts" becomes "bind.d.decorators.ts".
     *
     * @see https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#customizing-module-resolution
     * @param moduleNames
     * @param containingFile
     * @returns
     */
    function resolveModuleNames(
        moduleNames: string[],
        containingFile: string,
    ): ts.ResolvedModule[] {
        const resolvedModules: ts.ResolvedModule[] = [];
        for (const moduleName of moduleNames) {
            // try to use standard resolution
            let result = ts.resolveModuleName(
                moduleName,
                containingFile,
                options,
                {
                    fileExists: io.fileExists,
                    readFile: io.readFile,
                },
            );
            if (result.resolvedModule) {
                // console.log("RESOLVED", result);
                resolvedModules.push(result.resolvedModule);
                io.rememberImport(
                    moduleName,
                    result.resolvedModule.resolvedFileName,
                );
            } else {
                // Check if it's a registered extra type
                if (EXTRA_TYPES.some((ext) => moduleName.endsWith(ext))) {
                    if (io.fileExists(moduleName)) {
                        resolvedModules.push({
                            resolvedFileName: moduleName + ".js",
                            isExternalLibraryImport: true,
                            resolvedUsingTsExtension: false,
                            extension: ".d.ts",
                        } as any);
                        io.rememberImport(moduleName, moduleName + ".js");
                        continue;
                    }
                }
                // if not, log an error
                console.error(
                    "The module is missing",
                    moduleName,
                    containingFile,
                );
                io.error(
                    `Could not resolve module '${moduleName}' from '${containingFile}'`,
                );
                throw new Error(
                    `Could not resolve module '${moduleName}' from '${containingFile}'`,
                );
                // check fallback locations, for simplicity assume that module at location
                // should be represented by '.d.ts' file
            }
        }
        return resolvedModules;
    }

    return {
        getSourceFile: (fileName, languageVersion) => {
            //console.log("getSourceFile", fileName, languageVersion);
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
        getCanonicalFileName: (fileName) => {
            //console.log("getCanonicalFileName", fileName);
            return fileName.toLowerCase();
        },
        getNewLine: () => "\n",
        useCaseSensitiveFileNames: () => false,
        fileExists: io.fileExists.bind(io),
        readFile: io.readFile.bind(io),
        resolveModuleNames,
    };
}

/**
 * @description Reads a file from the assets folder (specified in ASSET_PATH)
 * @param filename: The filename to read
 * @returns the contents of the file
 */
export function getFileFromWeb(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
        let path = ASSET_PATH + filename;
        const req = new XMLHttpRequest();
        req.addEventListener("error", () => {
            reject(new Error("Error getting import"));
        });
        req.addEventListener("load", () => {
            resolve(req.responseText);
        });
        req.open("GET", path);
        req.send();
    });
}

function replaceExtension(
    filename: string,
    oldExtension: string,
    newExtension: string,
): string {
    if (!filename.endsWith(oldExtension)) {
        return filename;
    }
    return filename.slice(0, -oldExtension.length) + newExtension;
}

//
// Check and compile in-memory TypeScript code for errors.
//
export async function compile(
    mainFilename: string,
    code: VirtualFileSet,
): Promise<CompilationResult> {
    const otherFiles = { ...ORIGINAL_FILES };
    Object.entries(code).forEach(([filename, file]) => {
        if (!(filename in otherFiles)) {
            otherFiles["./" + filename] = file.contents;
        }
    });
    //parse and remove imports
    // code = await processImports(code);
    // Setup the fake compiler's options
    const options = ts.getDefaultCompilerOptions();
    options.noImplicitAny = true;
    options.inlineSources = true;
    options.inlineSourceMap = true;
    options.target = ts.ScriptTarget.ES2016;
    options.removeComments = false;
    // options.module = ts.ModuleKind.ES2015; // ESNEXT?
    options.module = ts.ModuleKind.ESNext;
    options.useCaseSensitiveFileNames = false;
    options.allowJs = true;
    options.noLib = false;
    options.allowSyntheticDefaultImports = true;
    // options.outDir = "./build";
    options.experimentalDecorators = false;

    // Define the host (initalized further down)
    let host: ts.CompilerHost;

    // Create the output "file" in memory
    const dummyFileOut = replaceExtension(mainFilename, ".ts", ".js");
    let outputCode: string | undefined = undefined;
    let files: Record<string, string> = {};
    let imports: Record<string, string> = {};
    let extraErrors: string[] = [];
    let importedDiagnostic: ts.Diagnostic[] = [];
    const rootNames = [KETTLE_D_TS_FILENAME];

    const io: MockIO = {
        fileExists: (fileName) => {
            const result = fileName in code || fileName in otherFiles;
            return result;
        },
        readFile: (fileName) => {
            if (fileName in code) {
                return code[fileName].contents;
            }
            if (fileName in otherFiles) {
                return otherFiles[fileName];
            }
            return undefined;
        },
        writeFile: (fileName, data) => {
            // console.log("I should write:", fileName);
            if (fileName === dummyFileOut) {
                outputCode = data;
            }
            otherFiles[fileName] = data;
        },
        error: (message) => {
            extraErrors.push(message);
        },
        rememberImport: (moduleName, fileName) => {
            //console.log("REMEMBER", moduleName, "->", fileName);
            // Change d.ts extension to .js
            if (fileName.endsWith(".d.ts")) {
                fileName = replaceExtension(fileName, ".d.ts", ".js");
            } else if (EXTRA_TYPES.some((ext) => moduleName.endsWith(ext))) {
                const rawContent = otherFiles[moduleName];
                otherFiles[fileName] =
                    `Object.defineProperty(exports, "__esModule", { value: true }); exports.default = ${JSON.stringify(rawContent)};`;
            } else if (fileName.endsWith(".ts")) {
                // Check if the javascript version exists
                const jsFileName = replaceExtension(fileName, ".ts", ".js");
                if (!(jsFileName in otherFiles)) {
                    // Try compiling it ourselves!
                    let program;
                    try {
                        program = ts.createProgram(
                            rootNames.concat([fileName]),
                            { ...options, module: ts.ModuleKind.CommonJS },
                            host,
                        );
                    } catch (e) {
                        console.error(
                            "Error compiling additional file",
                            jsFileName,
                            e,
                        );
                        io.error(
                            `Error compiling additional file ${jsFileName}: ${e}`,
                        );
                        return;
                    }
                    // Run the type checker, removing exports first
                    const emitResults = program.emit();
                    importedDiagnostic = importedDiagnostic
                        .concat(ts.getPreEmitDiagnostics(program))
                        .concat(emitResults.diagnostics);
                    // console.log(otherFiles[jsFileName]);
                    otherFiles[jsFileName] = removeEmptyExports(
                        otherFiles[jsFileName],
                    );
                    fileName = jsFileName;
                }
            }
            // console.log(
            //     "REMEMBER",
            //     moduleName,
            //     "->",
            //     fileName,
            //     fileName in otherFiles,
            // );
            if (fileName in otherFiles) {
                imports[moduleName] = otherFiles[fileName];
            } else {
                console.error("Unknown import", moduleName, fileName);
            }
        },
    };
    // Create file system importer
    const importFile = async (file: string) => {
        files[file] = `export const someValue = "Hello world!"`;
    };

    // Create the fake compiler host
    host = createCompilerHost(options, io);

    // Create the TypeScript program
    let program;
    try {
        program = ts.createProgram(
            rootNames.concat([mainFilename]),
            options,
            host,
        );
    } catch (e) {
        console.error("Error creating program", e);
        return {
            files: files,
            imports: imports,
            diagnostics: [makeDiagnostic((e as Error).toString())].concat(
                extraErrors.map((message) => makeDiagnostic(message)),
            ),
            locals: new Map<string, ts.Symbol>(),
            typeInformation: {},
        };
    }

    // Run the type checker, removing exports first
    //console.log(checker.getSymbolsInScope(dummySourceFile, ts.SymbolFlags.Module));
    const emitResult = program.emit(
        undefined,
        undefined,
        undefined,
        undefined,
        {
            before: [removeExports(importFile), setupWebz()],
        },
    );

    // Collect diagnostics
    const diagnostics = ts.getPreEmitDiagnostics(program);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (outputCode === undefined) {
        throw new Error("No output code generated");
    }

    // Get the source file to extract local symbols
    const resultSourcefile = program.getSourceFile(mainFilename);

    // Retrieve all the locals
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const locals: Map<string, ts.Symbol> =
        (resultSourcefile as any).locals || new Map<string, ts.Symbol>();
    // Remove any locals that have flags equal to 0,
    // or if they have the ts.SymbolFlags.Interface flag
    locals.forEach((value, key) => {
        if (
            value.flags === 0 ||
            value.flags & ts.SymbolFlags.Interface ||
            value.flags & ts.SymbolFlags.TypeAlias ||
            value.flags & ts.SymbolFlags.ConstEnum ||
            value.flags & ts.SymbolFlags.NamespaceModule ||
            (value.declarations &&
                value.declarations.every(
                    (declaration) =>
                        declaration.flags & ts.SymbolFlags.Transient,
                ))
        ) {
            locals.delete(key);
        }
    });

    // Return everything
    return {
        code: removeEmptyExports(outputCode),
        files: files,
        imports: imports,
        diagnostics: emitResult.diagnostics
            .concat(diagnostics)
            .concat(extraErrors.map((message) => makeDiagnostic(message)))
            .concat(importedDiagnostic),
        locals: locals,
        typeInformation: {} /*getClassDefinitions(
            program,
            locals,
        ),*/,
    };
}
