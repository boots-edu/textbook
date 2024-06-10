import * as ts from "typescript";

declare global {
    const RAW_D_TS_FILES: Record<string, string>;
}

const KETTLE_JEST_D_TS = `
    interface Assertion {
        toBe: (expected: any) => void;
        toEqual: (expected: any) => void;
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
    locals: Map<string, string>;
    typeInformation: Record<string, DocEntry[]>;
};

function removeExports(context: ts.TransformationContext) {
    return (sourceFile: ts.SourceFile) => {
        function visit(node: ts.Node): ts.Node {
            return ts.visitEachChild(node, node => convertNode(node), context);
        }
        function convertNode(node: ts.Node) {
            return ts.visitEachChild(node, visitChildren, context);
        }
        function visitChildren(child: ts.Node): ts.Node | undefined {
            if (child.kind == ts.SyntaxKind.ExportKeyword) return undefined;
            if (child.kind == ts.SyntaxKind.AsyncKeyword) return undefined;
            if (child.kind === ts.SyntaxKind.ExportDeclaration) {
                return undefined;
            }

            return ts.visitEachChild(child, visitChildren, context);
        }

        return ts.visitNode(sourceFile, visit);
    };
}

interface DocEntry {
    name?: string,
    fileName?: string,
    documentation?: string,
    type?: string,
    constructors?: DocEntry[],
    parameters?: DocEntry[],
    returnType?: string,
    modifiers?: string[]
};



function getClassDefinitions(program: ts.Program, locals: Map<string, ts.Symbol>): Record<string, DocEntry[]> {
    const classMap: Record<string, DocEntry[]> = {};
    const checker = program.getTypeChecker();
    locals.forEach((value, key) => {
        if ("exportSymbol" in value) {
            value = value['exportSymbol'] as ts.Symbol;
        }
        if ('members' in value) {
            const classProperties: DocEntry[] = [];
            value.members.forEach((type: ts.Symbol, name: ts.__String) => {
                classProperties.push(serializeClass(type));
            });
            const serialized = serializeClass(value);
            serialized.name = "";
            classProperties.push(serialized);
            classMap[key] = classProperties;
        }
    });
    return classMap;

    /** Serialize a symbol into a json object */
    function serializeSymbol(symbol: ts.Symbol): DocEntry {
        const xyz = ts;
        //const modifiers = getEffectiveModifierFlags(symbol.valueDeclaration);
        let allModifiersAsStrings: string[] = [];
        if ('valueDeclaration' in symbol) {
            allModifiersAsStrings = Object.entries(ts.ModifierFlags).filter(([_, v]) => {
                // @ts-ignore
                return (ts.getSyntacticModifierFlags(symbol.valueDeclaration) & v as number) !== 0;
            }).map(([k, _]) => k);
        }
        return {
            name: symbol.getName(),
            type: checker.typeToString(checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)),
            modifiers: allModifiersAsStrings,
        };
    }

    /** Serialize a class symbol information */
    function serializeClass(symbol: ts.Symbol) {
        let details = serializeSymbol(symbol);

        // Get the construct signatures
        let constructorType = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!);
        details.constructors = constructorType.getConstructSignatures().map(serializeSignature);
        return details;
    }

    /** Serialize a signature (call or construct) */
    function serializeSignature(signature: ts.Signature) {
        return {
            parameters: signature.parameters.map(serializeSymbol),
            returnType: checker.typeToString(signature.getReturnType())
        };
    }
}

//
// Check and compile in-memory TypeScript code for errors.
//
export function compile(code: string, libs: string[]): CompilationResult {
    // @ts-ignore
    ts.sys = {
        args: [],
        newLine: "\n",
        createDirectory(path: string): void {
        },
        directoryExists(path: string): boolean {
            return false;
        },
        exit(exitCode?: number): void {
        },
        fileExists(path: string): boolean {
            return false;
        },
        getCurrentDirectory(): string {
            return "";
        },
        getDirectories(path: string): string[] {
            return [];
        },
        getExecutingFilePath(): string {
            return "";
        },
        readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[] {
            return [];
        },
        readFile(path: string, encoding?: string): string | undefined {
            return undefined;
        },
        resolvePath(path: string): string {
            return "";
        },
        write(s: string): void {
        },
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void {
        },
        useCaseSensitiveFileNames: false
    }
    const options = ts.getDefaultCompilerOptions();
    options.noImplicitAny = true;
    options.inlineSources = true;
    options.inlineSourceMap = true;
    options.target = ts.ScriptTarget.ES2016;
    options.removeComments = false;
    options.module = ts.ModuleKind.ES2015; // ESNEXT?

    const realHost = ts.createCompilerHost(options, true);

    const dummyFilePath = "/in-memory-file.ts";
    const dummySourceFile = ts.createSourceFile(dummyFilePath, code, ts.ScriptTarget.Latest);
    let outputCode: string | undefined = undefined;
    const otherFakeFiles: Record<string, string> = RAW_D_TS_FILES;
    const KETTLE_D_TS_FILENAME = 'kettle.d.ts';
    otherFakeFiles[KETTLE_D_TS_FILENAME] = KETTLE_JEST_D_TS;

    const host: ts.CompilerHost = {
        fileExists: filePath => filePath === dummyFilePath || realHost.fileExists(filePath),
        directoryExists: realHost.directoryExists && realHost.directoryExists.bind(realHost),
        getCurrentDirectory: realHost.getCurrentDirectory.bind(realHost),
        getDirectories: realHost.getDirectories.bind(realHost),
        getCanonicalFileName: fileName => realHost.getCanonicalFileName(fileName),
        getNewLine: realHost.getNewLine.bind(realHost),
        getDefaultLibFileName: realHost.getDefaultLibFileName.bind(realHost),
        getSourceFile: (fileName, languageVersion, onError, shouldCreateNewSourceFile) => {
            return fileName === dummyFilePath
                ? dummySourceFile
                : otherFakeFiles[fileName]
                    ? ts.createSourceFile(fileName, otherFakeFiles[fileName], languageVersion)
                : realHost.getSourceFile(fileName, languageVersion, onError, shouldCreateNewSourceFile)
        },
        readFile: filePath => {
            return filePath === dummyFilePath
                ? code
                : realHost.readFile(filePath)
        },
        useCaseSensitiveFileNames: () => false, //realHost.useCaseSensitiveFileNames(),
        writeFile: (fileName, data) => {
            //console.log("wf", fileName, data);
            outputCode = data;
        },
    };

    const rootNames = [KETTLE_D_TS_FILENAME]; // Object.keys(otherFakeFiles); //libs.map(lib => require.resolve(`typescript/lib/lib.${lib}.d.ts`));
    const program = ts.createProgram(rootNames.concat([dummyFilePath]), options, host);
    //console.log("P",program);
    const emitResult = program.emit(undefined, undefined, undefined, undefined, {
        before: [removeExports]
    });
    //console.log("ER", emitResult);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    return {
        code: removeEmptyExports(outputCode),
        diagnostics: emitResult.diagnostics.concat(diagnostics),
        locals: (dummySourceFile as any).locals,
        typeInformation: getClassDefinitions(program, (dummySourceFile as any).locals)
    };
}

export function removeEmptyExports(code: string): string {
    // https://github.com/microsoft/TypeScript/issues/41513
    return code.replace(/export\s*{\s*}/g, "");
}

export function delint(sourceFile: ts.SourceFile) {
  delintNode(sourceFile);

  function delintNode(node: ts.Node) {
    switch (node.kind) {
      case ts.SyntaxKind.ForStatement:
      case ts.SyntaxKind.ForInStatement:
      case ts.SyntaxKind.WhileStatement:
      case ts.SyntaxKind.DoStatement:
        if ((node as ts.IterationStatement).statement.kind !== ts.SyntaxKind.Block) {
          report(
            node,
            'A looping statement\'s contents should be wrapped in a block body.'
          );
        }
        break;

      case ts.SyntaxKind.IfStatement:
        const ifStatement = node as ts.IfStatement;
        if (ifStatement.thenStatement.kind !== ts.SyntaxKind.Block) {
          report(ifStatement.thenStatement, 'An if statement\'s contents should be wrapped in a block body.');
        }
        if (
          ifStatement.elseStatement &&
          ifStatement.elseStatement.kind !== ts.SyntaxKind.Block &&
          ifStatement.elseStatement.kind !== ts.SyntaxKind.IfStatement
        ) {
          report(
            ifStatement.elseStatement,
            'An else statement\'s contents should be wrapped in a block body.'
          );
        }
        break;

      case ts.SyntaxKind.BinaryExpression:
        const op = (node as ts.BinaryExpression).operatorToken.kind;
        if (op === ts.SyntaxKind.EqualsEqualsToken || op === ts.SyntaxKind.ExclamationEqualsToken) {
          report(node, 'Use \'===\' and \'!==\'.');
        }
        break;
    }

    ts.forEachChild(node, delintNode);
  }

  function report(node: ts.Node, message: string) {
    const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    console.log(`${sourceFile.fileName} (${line + 1},${character + 1}): ${message}`);
  }
}

