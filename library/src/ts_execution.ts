import { ExecutionEngine } from "./kettle";
import { FeedbackExecutionRequest, makeExecutionRequest } from "./ts_assembler";


export async function executeCode(code: string, engineId: string,
    updateStatus: (message: any, spinner: any) => void,
    kettle: ExecutionEngine
): Promise<FeedbackExecutionRequest> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var student, studentNamespace;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const _updateStatus = (message: any) => { console.log("Status:", message); };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const _kettleSystemError = (place: string, category: string, error: any) => { console.error("Error:", place, category, error); };

    const request = await makeExecutionRequest(code, engineId);
    const result = request.student;

    if (!request.noErrors) {
        return request;
    }
    updateStatus("Starting execution", true);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let postMessageAlt = (message: any) => { 
        kettle.handleExecutionEvents(new MessageEvent(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            "message", {data: {
                ...message,
                engineId: engineId
            }}
        ), request)
     };

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

        // console.log("LOADING", moduleName, moduleName in result.imports);
        const module = {id: moduleName, exports};
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const importedCode = result.imports[moduleName];
        const importAsFunction = new Function("require", "exports", "module", importedCode);
        try {
            importAsFunction(require, exports, module);
        } catch (e) {
            console.error("Error loading module", moduleName, e);
            throw e;
        }
        // console.log("Loaded", moduleName, exports);
        return exports;
    }
    require = $importModule;
    
    // console.log(Object.keys(result.imports));
    // console.log(wrapped.code);
    // console.log("-------- Executing --------");
    eval(request.assembled);

    return request;
}