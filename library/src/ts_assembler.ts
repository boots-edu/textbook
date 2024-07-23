import ts from "typescript";
import { SourceCodeMapping, extractSourceCodeMap } from "./ts_source";
import { CompilationResult, compile } from "./ts_compiler";

export interface ProgramExecutionRequest {
    code: string;
    offset: {
        syntax: number;
        runtime: number;
    };
    locals: Map<string, ts.Symbol>;
    errors: ts.Diagnostic[];
    original: string;
    sourceCodeMapping: SourceCodeMapping;
}

export interface FeedbackExecutionRequest {
    header: string;
    student: ProgramExecutionRequest;
    assembled: string;
    noErrors: boolean;
    signedKey: string;
    engineId: string;
}

export const EXECUTION_HEADER = `// Execution Header
let silenceConsole = false;
let _signedKey = null;
const parentPost = (type, contents, override=false) => {
    //contents = JSON.parse(JSON.stringify(contents));
    if (!silenceConsole || override) {
        postMessage({type: type, contents: contents});
    }
};
const console = {
    log: (...text) => parentPost("console.log", text),
    error: (...text) => parentPost("console.error", text),
    info: (...text) => parentPost("console.info", text),
    warning: (...text) => parentPost("console.warning", text),
    table: (...text) => parentPost("console.table", text),
    clear: () => parentPost("console.clear", [])
};
const _updateStatus = (message) => {
    parentPost("execution.update", [message]);
};
const _kettleSystemError = (place, category, error) => {
    parentPost("execution.error", {
        place,
        category,
        error: {
            text: error.toString(),
            message: error.message,
            stack: error.stack,
            raw: JSON.parse(JSON.stringify(error))
        }
    });
}
// Listen for cool stuff
addEventListener('message', (message) => {
    console.log("Web Worker internally heard", message)
});

var describe, test, expect;
(function() {
const isDeepEqual = (object1, object2) => {
    return JSON.stringify(object1) === JSON.stringify(object2);
};


const DEFAULT_SUITE = "__GLOBAL";
let currentSuite = DEFAULT_SUITE, currentTest = null;
let _results = {[DEFAULT_SUITE]: { status: "success", tests: {} }};
const instructor_log = (...text) => {
    parentPost("instructor.log", text, true);
};
describe = (name, tests) => {
    currentSuite = name;
    if (name in _results) {
        throw new Error("Test suite name already exists: "+name);
    }
    _results[currentSuite] = { status: "success", tests: {} };
    try {
        tests();
    } catch (failedSuite) {
        _results[name].status = "failed: "+failedSuite.toString();
    }
    currentSuite = DEFAULT_SUITE;
}
test = (name, assertions) => {
    currentTest = name;
    _results[currentSuite].tests[name] = { status: "success", expects: [] };
    silenceConsole = true;
    try {
        assertions();
    } catch (failedTest) {
        _results[currentSuite].tests[name].status = "failed: "+failedTest.toString();
        _results[currentSuite].tests[name].expects.push(
            "error"
        );
    } finally {
        silenceConsole = false;
    }
    currentTest = null;
}
const getExpects = () => {
    if (currentTest === null) {
        throw new Error("Trying to run expect outside of a test.");
    }
    return _results[currentSuite].tests[currentTest].expects;
}
expect = (actual) => {
    return {
        toBe: (expected) => {
            const expects = getExpects();
            expects.push(actual === expected ? "passed" : "failed");
        },
        toEqual: (expected) => {
            const expects = getExpects();
            expects.push(isDeepEqual(actual, expected) ? "passed" : "failed");
        },
        toContain: (expected) => {
            const expects=getExpects();
            expects.push(actual.find(m=>m===expected) ? "passed" : "failed");
        },
        toBeInstanceOf: (expected) => {
            const expects=getExpects();
            expects.push(actual instanceof expected ? "passed" : "failed");
        },
        toThrowError: (expected) => {
            const expects=getExpects();
            try{
                actual();
            } catch (e){
                expects.push(e === expected?"passed":"failed");
            }
        },
        not: {
            toBe: (expected) => {
                const expects = getExpects();
                expects.push(actual === expected ? "failed" : "passed");
            },
            toEqual: (expected) => {
                const expects = getExpects();
                expects.push(isDeepEqual(actual, expected) ? "failed" : "passed");
            },
            toContain: (expected) => {
                const expects=getExpects();
                expects.push(actual.find(m=>m===expected) ? "failed" : "passed");
            },
            toBeInstanceOf: (expected) => {
                const expects=getExpects();
                expects.push(actual instanceof expected ? "failed" : "passed");
            },
            toThrowError: (expected) => {
                const expects=getExpects();
                try{
                    actual();
                } catch (e){
                    expects.push(e === expected?"passed":"failed");
                }
            }
        },
    }
};
`;

export const EXECUTION_FOOTER = `// Execution Footer
parentPost("instructor.tests", _results);
})();
parentPost("execution.finished", []);
close();
`;

export interface WrappedCode {
    code: string;
    offset: {
        syntax: number;
        runtime: number;
        analyzer?: number;
    };
    lineCount: number;
    locals: Map<string, ts.Symbol>;
}

export const wrapStudentCode = (
    code: string,
    offset: number = 0,
    locals: Map<string, ts.Symbol>,
): WrappedCode => {
    code = code.replace(/[\\`$]/g, "\\$&");
    code += "\nreturn {" + Array.from(locals.keys()).join(", ") + "};";
    const wrapped = `_updateStatus("Executing Student Code"); // $Student Code
student = {};
studentNamespace = {};
try {
    const __studentFunction = Function("studentCode", \`${code}\`).bind(studentNamespace);
    try {
        student = __studentFunction();
    } catch (e) {
        _kettleSystemError('student', "runtime", e);
    }
} catch (e) {
    _kettleSystemError('student', "syntax", e);
}`.trim();
    return {
        code: wrapped,
        offset: {
            syntax: 4 + offset,
            runtime: 6 + offset,
        },
        lineCount: wrapped.split("\n").length + offset,
        locals
    };
};

export async function makeExecutionRequest(studentCode: string, engineId: string,imports:string[]=[]): Promise<FeedbackExecutionRequest> {
    // TODO: Handle strings with blank lines inside?
    studentCode = studentCode.replace("\n\n", "\n//\n");
    const studentResults: CompilationResult = await compile(studentCode,imports);
    const studentLocals = studentResults.locals;
    const headerOffset = EXECUTION_HEADER.split("\n").length;
    const wrappedStudent = wrapStudentCode(studentResults.code || "", headerOffset, studentLocals);
    const assemblage = [EXECUTION_HEADER, wrappedStudent.code];
    const signedKey = crypto.randomUUID();
    assemblage.push(EXECUTION_FOOTER);
    const assembled = assemblage.join("\n");

    console.log(assembled);

    return {
        assembled,
        header: EXECUTION_HEADER,
        student: {
            ...wrappedStudent,
            errors: studentResults.diagnostics,
            original: studentCode,
            sourceCodeMapping: extractSourceCodeMap(studentResults.code || "")
        },
        signedKey,
        engineId,
        noErrors: studentResults.diagnostics.length === 0,
    };
}