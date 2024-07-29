import { makeIFrame } from "./safe_iframe";
import { Timer } from "./timer";
import { KettleEngineSystemError, handleKettleSystemError, processTypeScriptDiagnostic } from "./ts_traceback";
import { CONSOLE_API_COMMAND_LIST, ConsoleAPICommand } from "./ts_console";
import { FeedbackExecutionRequest, ProgramExecutionRequest, makeExecutionRequest } from "./ts_assembler";
import { ExecutionUI } from "./execution_ui";
import { v4 as uuidv4 } from "uuid";


export interface ParentPost {
    type: string;
    contents: KettleEngineSystemError | string[];
}

interface TestCollection {
    expects: string[];
    status: string;
}
interface TestSuite {
    tests: TestCollection;
    status: string;
}

export class ExecutionEngine {
    public ui: ExecutionUI;
    private root: HTMLElement;
    private iframe: HTMLIFrameElement;
    private timeClock: number | undefined;
    private executionConfirmation: number | undefined;
    private latestErrors: string[] = [];
    private executionTimer: Timer;
    private isExecuting: boolean = false;
    private latestListener: ((e: MessageEvent) => void) | null = null
    private engineId: string = uuidv4();

    constructor(
        root: HTMLElement,
        initialCode: string,
        private isDebugMode: boolean,
    ) {
        this.root = root;
        this.iframe = makeIFrame();
        this.ui = new ExecutionUI(this.root, initialCode, this.iframe);
        this.timeClock = undefined;
        this.executionConfirmation = window.setTimeout(()=>{}, 0);
        this.executionTimer = new Timer(this.ui.runControls.timing);
        this.startEditor();
    }

    debugLog(...args: any[]) {
        if (this.isDebugMode) {
            console.log(...args);
            this.ui.console.info(...args);
        }
    }

    destroy() {
        if (this.latestListener !== null) {
            window.removeEventListener("message", this.latestListener);
        }
        this.iframe.remove();
        clearTimeout(this.executionConfirmation);
        this.executionTimer.destroy();
    }

    startEditor() {
        this.isExecuting = false;
        this.executionTimer.reset();
        this.ui.updateButtons(true, false);
        this.ui.updateStatus("Ready", false);
        this.ui.runControls.runButton.onclick = async () => {
            if (this.isExecuting) {
                this.terminateExecution();
                this.handleExecutionStopped("Terminated by user");
            } else {
                await this.executeCode();
            }
        };
    }

    handleExecutionEvents(
        event: MessageEvent,
        feedbackRequest: FeedbackExecutionRequest,
    ) {
        // Only process events for our engine
        if (event.data.engineId !== this.engineId) {
            return false;
        }
        // Handle any console events
        const handled = CONSOLE_API_COMMAND_LIST.find(
            (type: ConsoleAPICommand) => {
                if (event.data.type === `console.${type}`) {
                    this.debugLog("INSIDE Main Kettle Object", event);
                    this.ui.console[type](...event.data.contents);
                    return type;
                }
                return false;
            },
        );
        if (handled) {
            // Nothing to do here!
        } else if (event.data.type === "execution.begun") {
            // eslint-disable-next-line @typescript-eslint/ban-types
            clearTimeout(this.executionConfirmation);
        } else if (event.data.type === "execution.error") {
            const data = event.data.contents as KettleEngineSystemError;
            this.ui.updateStatus(`${data.category} ${data.place} Error`, false);
            const message = handleKettleSystemError(data, feedbackRequest);
            this.ui.console.error(message);
            this.latestErrors.push(message);
            this.ui.updateFeedback(`There were ${data.category} errors in the ${data.place} code.
            Please see the console more information.`);
        } else if (event.data.type === "execution.update") {
            this.ui.updateStatus(event.data.contents[0], false);
        } else if (event.data.type === "execution.finished") {
            this.handleExecutionStopped("Execution Finished");
        } else if (event.data.type === "instructor.tests") {
            this.debugLog("Instructor Test Results", event.data.contents);
            try {
                this.handleTestResults(event);
            } catch (e) {
                this.ui.console.error("Error handling test results", e);
                this.latestErrors.push((e as any).toString());
                this.ui.updateFeedback(
                    "There was an error handling the test results. Please notify the instructor.",
                );
            }
        } else if (event.data.type === "instructor.log") {
            this.ui.console.log(...event.data.contents);
        } else {
            if (event.data.source === "react-devtools-content-script") {
                return false;
            }
            this.debugLog("INSIDE Main Kettle Object", event);
            //this.console.error("Unknown Execution Event: ", event);
            this.latestErrors.push(
                "Unknown Execution Event: " + JSON.stringify(event),
            );
        }
    }

    handleTestResults(
        event: MessageEvent<any>,
    ) {
        const assertions: string[] = [];
        let allPassed = true;
        let totalPassed = 0,
            totalTests = 0;
        let testResults = event.data.contents as Record<string, TestSuite>;
        Object.entries(testResults).forEach(
            ([suiteName, suite]: [string, TestSuite]) => {
                if (suiteName === "_signedKey") {
                    return;
                }
                Object.entries(suite.tests).forEach(
                    ([testName, test]: [string, TestCollection]) => {
                        const passed = test.expects.every(
                            (result: string) => result === "passed",
                        );
                        totalPassed += passed ? 1 : 0;
                        totalTests += 1;
                        assertions.push(
                            (passed ? "✅" : "❌") +
                                " " +
                                (suiteName === "__GLOBAL" ? testName : (
                                    suiteName + ") " + testName
                                )),
                        );
                        allPassed = allPassed && passed;
                    },
                );
            },
        );
        this.ui.updateTestResults(totalPassed, totalTests, assertions);
    }

    logTypeScriptErrors(request: ProgramExecutionRequest, where: string = "") {
        where = where.length ? where + " " : where;
        request.errors
            .map((diagnostic) => processTypeScriptDiagnostic(diagnostic, where))
            .forEach((error: string) => {
                this.ui.console.error(error);
                this.latestErrors.push(error);
            });
    }

    handleExecutionStarted() {
        this.ui.updateStatus("Starting", true);
        this.executionTimer.start();
        this.isExecuting = true;
    }

    /**
     * Also logs the execution remotely, so MUST be the last thing we do.
     * @param reason
     */
    handleExecutionStopped(reason: string) {
        this.ui.updateButtons(true, false);
        this.isExecuting = false;
        this.executionTimer.stop();
        clearTimeout(this.executionConfirmation);
        this.ui.updateStatus(reason, false);
    }

    possibleExecutionFailure(
        request: FeedbackExecutionRequest,
        attempts: number,
    ) {
        if (attempts <= 0) {
            this.ui.console.error(
                "The execution engine failed to load after several attempts. Please notify the authors.",
            );
            this.ui.updateFeedback(
                "The execution engine failed to load. Please notify the authors.",
            );
            this.handleExecutionStopped("Execution Failure");
        } else {
            this.ui.console.error(
                `The execution engine failed to load. Trying to restart (${attempts} attempts left).`,
            );
            this.iframe.onload = () => {
                this.executeRequest(request, attempts - 1);
            };
            // Trigger page reload
            // eslint-disable-next-line no-self-assign
            this.iframe.src = this.iframe.src;
        }
    }

    executeRequest(request: FeedbackExecutionRequest, attempts = 3) {
        clearTimeout(this.executionConfirmation);
        // Check that the iframe is okay
        this.executionConfirmation = window.setTimeout(() => {
            this.possibleExecutionFailure(request, attempts);
        }, 5000);
        // Clear out any existing listeners
        if (this.latestListener !== null) {
            window.removeEventListener("message", this.latestListener);
        }
        this.latestListener = (e: MessageEvent) =>
            this.handleExecutionEvents(e, request);
        window.addEventListener("message", this.latestListener);
        // Setup iframe listeners
        if (this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage(
                {
                    type: "debug",
                    contents: this.isDebugMode,
                    engineId: this.engineId
                },
                "*",
            );
            this.iframe.contentWindow.postMessage(
                {
                    type: "execute",
                    code: request.assembled,
                    engineId: this.engineId
                },
                "*",
            );
        } else {
            console.error("Iframe not ready for execution.");
        }
        // Change the button to a stop button
        this.ui.updateButtons(true, true);
        // Load in variables data so far
        this.ui.updateVariables(request.student.locals);
    }

    async executeCode():Promise<void> {
        this.ui.console.clear(false);
        this.ui.console.info("Running and evaluating your code");
        this.handleExecutionStarted();
        this.ui.updateStatus("Compiling", true);
        const request = await makeExecutionRequest(this.ui.getCode(), this.engineId);
        if (request.noErrors) {
            this.ui.updateStatus("Starting execution", true);
            this.executeRequest(request);
            this.ui.updateStatus("Running", false)
        } else {
            console.error("Compilation Errors", request);
            if (request.student.errors.length > 0) {
                this.ui.updateFeedback("There were TypeScript error(s) in your code. The program could not be executed. See the console for more information.");
                this.logTypeScriptErrors(request.student);
            }
            this.handleExecutionStopped("Typescript Error");
        }
    }

    terminateExecution() {
        if (this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage(
                {
                    type: "terminate",
                    engineId: this.engineId
                },
                "*",
            );
        } else {
            console.error("Iframe not ready for execution.");
        }
    }
}
