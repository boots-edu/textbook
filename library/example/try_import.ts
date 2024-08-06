import { Worker } from "worker_threads";
import {compile} from '../src/ts_compiler';
import {wrapStudentCode} from '../src/ts_assembler';

var student, studentNamespace;
const _updateStatus = (message: any) => { console.log("Status:", message); };
const _kettleSystemError = (place: string, category: string, error: any) => { console.error("Error:", place, category, error); };

(async ()=>{
const code = `
/*noskip*/ import {WebzComponent} from "@boots-edu/webz";
console.log(WebzComponent);
`;
const result = await compile(code);

var Module = require("module");

// https://stackoverflow.com/a/19625245/1718155
// Rudimentary version of require() that can load modules from the result.imports object
const importCache: Record<string, any[]> = {};
function $importModule(moduleName: string) {
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
var Module = require('module');
const backupRequire = Module.prototype.require;
Module.prototype.require = function() {
    if (arguments[0] in result.imports) {
        return $importModule(arguments[0]);
    }
    return backupRequire.apply(this, arguments);
}

// console.log(result.code);
console.log("Errors:", result.diagnostics.length);
if (result.diagnostics.length) {
    result.diagnostics.forEach(d => 
        console.log(`[${d.category}] ${d.messageText} at ${d.start}`)
    );
}

const wrapped = wrapStudentCode(result.code || "undefined", 0, result.locals);
console.log(Object.keys(result.imports));
console.log(wrapped.code);
console.log("-------- Executing --------");
eval(wrapped.code);

Module.prototype.require = backupRequire;

})();