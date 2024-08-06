import { Worker } from "worker_threads";
import {compile} from '../src/ts_compiler';
import {wrapStudentCode} from '../src/ts_assembler';

var student, studentNamespace;
const _updateStatus = (message: any) => { console.log("Status:", message); };
const _kettleSystemError = (place: string, category: string, error: any) => { console.error("Error:", place, category, error); };
function $importModule(moduleName: string) {
    console.log("LOADING", moduleName);
    return {someValue: "HELLO THERE"};
}

(async ()=>{
const code = `
/*noskip*/ import {WebzComponent} from "@boots-edu/webz";
console.log(WebzComponent);
`;
const result = await compile(code);

// console.log(result.code);
console.log("Errors:", result.diagnostics.length);
if (result.diagnostics.length) {
    result.diagnostics.forEach(d => 
        console.log(`[${d.category}] ${d.messageText} at ${d.start}`)
    );
}

const wrapped = wrapStudentCode(result.code || "undefined", 0, result.locals);
console.log(wrapped.code);
console.log("-------- Executing --------");
eval(wrapped.code);

})();