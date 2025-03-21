import ts from "typescript";
import { SourceCodeMapping, extractSourceCodeMap } from "./ts_source";
import { CompilationResult, compile } from "./ts_compiler";
import { linkObjects } from "./ts_linker";
import { VirtualFileSet } from "./virtual_files";

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
    imports: Record<string, string>;
}

export interface ProgramLinking {
    importCache: Record<string, any[]>;
    require: (moduleName: string) => any[];
    $importModule: (moduleName: string) => any[];
}

export interface FeedbackExecutionRequest {
    header: string;
    student: ProgramExecutionRequest;
    assembled: string;
    noErrors: boolean;
    signedKey: string;
    engineId: string;
    linking: ProgramLinking;
}

export const FUNCTIONS_AVAILABLE_TO_STUDENTS = [
    "console",
    "$importModule",
    "describe",
    "test",
    "expect",
    "_setIframeVisible",
];

export const EXECUTION_HEADER = /*javascript*/ `// Execution Header
let silenceConsole = false;
let _signedKey = null;
let parentPost = (type, contents, override=false) => {
    // contents = JSON.parse(JSON.stringify(contents));
    if (!silenceConsole || override) {
        postMessage({
            type: type, 
            contents: contents,
            isForParent: true,
        });
    }
};
let originalConsole = window.console;
let console = {
    log: (...text) => parentPost("console.log", text),
    error: (...text) => parentPost("console.error", text),
    info: (...text) => parentPost("console.info", text),
    warning: (...text) => parentPost("console.warning", text),
    table: (...text) => parentPost("console.table", text),
    clear: () => parentPost("console.clear", [])
};
let _updateStatus = (message) => {
    parentPost("execution.update", [message]);
};
let _kettleSystemError = (place, category, error) => {
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
var _setIframeVisible = (visible) => {
    parentPost("iframe.visibility", visible);
};
// Listen for cool stuff
/*addEventListener('message', (message) => {
    console.log("Web Worker internally heard", message)
});*/

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

export const EXECUTION_FOOTER = /*javascript*/ `// Execution Footer
parentPost("instructor.tests", _results);
})();
parentPost("execution.finished", []);
//close();
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
    const functionParameters = FUNCTIONS_AVAILABLE_TO_STUDENTS.map((f) =>
        JSON.stringify(f),
    ).join(", ");
    const functionArguments = FUNCTIONS_AVAILABLE_TO_STUDENTS.join(", ");
    code = code.replace(/[\\`$]/g, "\\$&");
    code += "\nreturn {" + Array.from(locals.keys()).join(", ") + "};";
    const wrapped =
        /*javascript*/ `_updateStatus("Executing Student Code"); // $Student Code
student = {};
studentNamespace = {};
try {
    const __studentFunction = Function(${functionParameters}, \`"use strict";\n${code}\`).bind(studentNamespace);
    try {
        student = __studentFunction(${functionArguments});
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
        locals,
    };
};

function preserveEmptyLines(files: VirtualFileSet) {
    const keys = Object.keys(files);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        files[key].contents = files[key].contents.replace(/\n\n/g, "\n//\n");
    }
}

export async function makeExecutionRequest(
    mainFilename: string,
    studentCode: VirtualFileSet,
    engineId: string,
): Promise<FeedbackExecutionRequest> {
    // TODO: Handle strings with blank lines inside?
    preserveEmptyLines(studentCode);
    const studentResults: CompilationResult = await compile(
        mainFilename,
        studentCode,
    );
    const studentLocals = studentResults.locals;
    const headerOffset = EXECUTION_HEADER.split("\n").length;
    const wrappedStudent = wrapStudentCode(
        studentResults.code || "",
        headerOffset,
        studentLocals,
    );
    const assemblage = [EXECUTION_HEADER, wrappedStudent.code];
    const signedKey = crypto.randomUUID();
    assemblage.push(EXECUTION_FOOTER);
    const assembled = assemblage.join("\n");

    // Build the student object
    const student: ProgramExecutionRequest = {
        ...wrappedStudent,
        imports: studentResults.imports,
        errors: studentResults.diagnostics,
        original: studentCode[mainFilename].contents,
        sourceCodeMapping: extractSourceCodeMap(studentResults.code || ""),
    };
    // Link in imports, if any
    const linking = linkObjects(student);

    // Generate actual final request
    const request: FeedbackExecutionRequest = {
        assembled,
        linking,
        header: EXECUTION_HEADER,
        student,
        signedKey,
        engineId,
        noErrors: studentResults.diagnostics.length === 0,
    };
    console.debug(request);
    return request;
}
