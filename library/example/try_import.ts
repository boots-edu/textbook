import {compile} from '../src/ts_compiler';

(async ()=>{
const code = `
/*noskip*/ import * as webz from "@boots-edu/webz";
console.log(webz);
`;
const result = await compile(code);

console.log(result.code);
console.log("Errors:", result.diagnostics.length);
if (result.diagnostics.length) {
    console.log(result.diagnostics[0]);
}
})();