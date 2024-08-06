import { wrapStudentCode } from "./ts_assembler";
import { CompilationResult, compile } from "./ts_compiler";

export async function executeCode(code: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var student, studentNamespace;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _updateStatus = (message: any) => { console.log("Status:", message); };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _kettleSystemError = (place: string, category: string, error: any) => { console.error("Error:", place, category, error); };

    const result: CompilationResult = await compile(code);

    // https://stackoverflow.com/a/19625245/1718155
    // Rudimentary version of require() that can load modules from the result.imports object
    const importCache: Record<string, any[]> = {};
    var require: (moduleName: string) => any[];
    function $importModule(moduleName: string): any[] {
        if (moduleName in importCache) {
            return importCache[moduleName];
        }
        const exports = importCache[moduleName] = [];

        if (!(moduleName in result.imports)) {
            throw new Error(`Module ${moduleName} not found, could not $importModule it.`);
        }

        console.log("LOADING", moduleName, moduleName in result.imports);
        const module = {id: moduleName, exports};
        const importedCode = result.imports[moduleName];
        const importAsFunction = new Function("require", "exports", "module", importedCode);
        try {
            importAsFunction(require, exports, module);
        } catch (e) {
            console.error("Error loading module", moduleName, e);
            throw e;
        }
        console.log("Loaded", moduleName, exports);
        return exports;
    }
    require = $importModule;

    // console.log(result.code);
    console.log("Errors:", result.diagnostics.length);
    if (result.diagnostics.length) {
        result.diagnostics.forEach(d => 
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            { console.log(`[${d.category}] ${d.messageText} at ${d.start}`); }
        );
    }

    const wrapped = wrapStudentCode(result.code || "undefined", 0, result.locals);
    console.log(Object.keys(result.imports));
    console.log(wrapped.code);
    console.log("-------- Executing --------");
    eval(wrapped.code);
}