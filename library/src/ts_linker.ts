import { ProgramExecutionRequest } from "./ts_assembler";

export function linkObjects(result: ProgramExecutionRequest) {
    // https://stackoverflow.com/a/19625245/1718155
    // Rudimentary version of require() that can load modules from the result.imports object
    const importCache: Record<string, any[]> = {};
    var require: (moduleName: string) => any[];
    function $importModule(moduleName: string): any[] {
        if (moduleName in importCache) {
            return importCache[moduleName];
        }
        const exports = (importCache[moduleName] = []);

        if (!(moduleName in result.imports)) {
            throw new Error(
                `Module ${moduleName} not found, could not $importModule it.`,
            );
        }

        // console.log("LOADING", moduleName, moduleName in result.imports);
        const module = { id: moduleName, exports };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const importedCode = result.imports[moduleName];
        const importAsFunction = new Function(
            "require",
            "exports",
            "module",
            importedCode,
        );
        // console.log("I am here", moduleName, exports, module, result);
        try {
            importAsFunction(require, exports, module);
        } catch (e) {
            console.error("Error loading module", moduleName, e);
            throw e;
        }
        // console.log("Loaded", moduleName, exports);
        if ((exports as any)["default"]) {
            return (exports as any)["default"] as any[];
        }
        return exports;
    }
    require = $importModule;
    return { importCache, require, $importModule };
}
