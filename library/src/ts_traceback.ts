import ts from "typescript";
import { FeedbackExecutionRequest } from "./ts_assembler";
import { SourceCodeMapping } from "./ts_source";
import { titleCase } from "./utilities";

/**
 * This is a modified version of the stack-utils parser, which is licensed under the MIT license.
 * https://github.com/tapjs/stack-utils/tree/main
 *
 */
const STACK_TRACE_REGEX = new RegExp(
    "^" +
        // Sometimes we strip out the '    at' because it's noisy
        "(?:\\s*at )?" +
        // $1 = ctor if 'new'
        "(?:(new) )?" +
        // $2 = function name (can be literally anything)
        // May contain method at the end as [as xyz]
        "(?:(.*?) \\()?" +
        // (eval at <anonymous> (file.js:1:1),
        // $3 = eval origin
        // $4:$5:$6 are eval file/line/col, but not normally reported
        "(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?" +
        // file:line:col
        // $7:$8:$9
        // $10 = 'native' if native
        "(?:(.+?):(\\d+):(\\d+)|(native))" +
        // maybe close the paren, then end
        // if $11 is ), then we only allow balanced parens in the filename
        // any imbalance is placed on the fname.  This is a heuristic, and
        // bound to be incorrect in some edge cases.  The bet is that
        // having weird characters in method names is more common than
        // having weird characters in filenames, which seems reasonable.
        "(\\)?)$",
);

function getValueForLowestKey(object: Record<number, any>, index: number) {
    let returned;

    for (const key in object) {
        // eslint-disable-next-line @typescript-eslint/ban-types
        if ((key as unknown as number) > index) break;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        returned = object[key];
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return returned;
}

export function cleanStack(
    stack: string,
    sourceCodeMapping: SourceCodeMapping,
    originalCode: string,
    offset: number = 0,
) {
    const lines = stack.split("\n");
    let cleaned = [];
    let initialLine: number | null = null;
    const restLines = lines.slice(1);
    restLines.reverse();
    for (let originalLine of restLines) {
        const line = originalLine.trim().match(STACK_TRACE_REGEX);
        if (!line) {
            cleaned.push(originalLine);
            continue;
        }
        //console.log(line);
        // Inner nested truly anonymous functions are called eval, so that's a little confusing.
        const functionName =
            line[2] === "eval" ? "eval"
            : !line[2] ? "instructorCode"
            : line[2];
        const inModule = !line[7].startsWith("blob:");
        let [lineNumber, colNumber] = [
            parseInt(line[8], 10),
            parseInt(line[9], 10),
        ];
        //console.log(sourceCodeMapping, lineNumber, colNumber);
        if (initialLine === null) {
            initialLine = lineNumber;
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const best_match = getValueForLowestKey(
                sourceCodeMapping[lineNumber - 2],
                colNumber,
            );
            if (best_match !== undefined) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                [lineNumber, colNumber] = best_match;
            }
        }
        //lineNumber -= initialLine;
        lineNumber += offset;
        if (inModule) {
            cleaned.push(
                "    at " +
                    functionName +
                    " (line " +
                    lineNumber +
                    ", column " +
                    colNumber +
                    ")",
            );
        }
    }
    cleaned.push(lines[0]);
    cleaned.reverse();
    return cleaned.join("\n");
}

export function handleKettleSystemError(
    error: KettleEngineSystemError,
    request: FeedbackExecutionRequest,
) {
    const result = [
        `${titleCase(error.category)} error in ${titleCase(error.place)} code:\n`,
    ];
    const defaultText =
        error.error.text === "[object Object]" ?
            JSON.stringify(error.error.raw)
        :   error.error.text;
    if (error.place === "student" || error.place === "instructor") {
        const sourceCodeMapping = request.student.sourceCodeMapping;
        const originalCode = request.student.original;
        if (error.category === "syntax" || error.category === "runtime") {
            // const offset = request[error.place]?.offset[error.category];
            if (error.error.stack) {
                result.push(
                    cleanStack(
                        error.error.stack,
                        sourceCodeMapping,
                        originalCode || "",
                    ),
                );
            } else {
                result.push(defaultText);
            }
        } else {
            result.push(defaultText);
        }
    } else {
        result.push(defaultText);
    }
    return result.join("\n");
}

export function processTypeScriptDiagnostic(
    diagnostic: ts.Diagnostic,
    where: string,
) {
    if (diagnostic.file) {
        const { line, character } = ts.getLineAndCharacterOfPosition(
            diagnostic.file,
            diagnostic.start || -1,
        );
        const message = ts.flattenDiagnosticMessageText(
            diagnostic.messageText,
            "\n",
        );
        return `${where}(Line ${line + 1}, Position ${character + 1}): ${message}`;
    } else {
        return (
            where +
            ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
        );
    }
}

export interface KettleEngineSystemError {
    place: string;
    category: string;
    error: {
        stack: string;
        message: string;
        text: string;
        raw: any;
    };
}