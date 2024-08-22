/*
CodeMirror editor
Run/Terminate Button: Status (Timing)
Console Log
Test Results (if available)
Variables and Values
Webz Area (if available)
*/
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { KettleConsole } from "./ts_console";
import ts from "typescript";

import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';  // CSS or LESS
import {createTree} from 'jquery.fancytree';
import 'jquery.fancytree/dist/modules/jquery.fancytree.edit';
import 'jquery.fancytree/dist/modules/jquery.fancytree.filter';


export interface RunControls {
    runButton: HTMLButtonElement;
    status: HTMLElement;
    timing: HTMLElement;
    spinner: HTMLElement;
}


export class ExecutionUI {
    private static uniqueIDCounter = 0;
    public uniqueID: number = ExecutionUI.uniqueIDCounter++;
    public root: HTMLElement;
    public codeEditor: EditorView;
    public runControls: RunControls;
    public console: KettleConsole;
    public testResults: HTMLElement;
    public variables: HTMLElement;
    public webz: HTMLElement;

    constructor(
        root: HTMLElement,
        initialCode: string,
        private iframe: HTMLIFrameElement,
    ) {
        this.root = root;
        this.codeEditor = this.createCodeEditor(initialCode);
        this.runControls = this.createRunControls();
        this.testResults = this.createTestResults();
        this.variables = this.createVariables();
        this.webz = this.createWebz(iframe);
        this.console = this.createConsole();
    }

    createCodeEditor(initialCode: string) {
        const initialState = EditorState.create({
            doc: initialCode,
            extensions: [basicSetup, javascript()],
        });
        const editor = new EditorView({
            state: initialState,
            parent: this.root,
        });
        /*editor.getSession().setUseWorker(false);
        editor.setFontSize(14);
        editor.getSession().setTabSize(2);
        editor.getSession().setUseSoftTabs(true);
        //editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/tsx");
        editor.getSession().setValue(initialCode);*/
        return editor;
    }
    createRunControls() {
        const runControlBox = document.createElement("div");
        this.root.appendChild(runControlBox);
        const runButton = document.createElement("button");
        runButton.classList.add("btn", "btn-success");
        runButton.appendChild(document.createTextNode("Run"));
        runControlBox.appendChild(runButton);
        const spinner = document.createElement("span");
        spinner.classList.add("spinner-border", "spinner-border-sm");
        spinner.style.display = "none";
        runControlBox.appendChild(spinner);
        const status = document.createElement("span");
        status.classList.add("ms-2");
        runControlBox.appendChild(status);
        const timing = document.createElement("span");
        timing.classList.add("float-end");
        runControlBox.appendChild(timing);
        return { runButton, status, timing, spinner };
    }
    createConsole() {
        const consoleBox = document.createElement("div");
        this.root.appendChild(consoleBox);
        consoleBox.classList.add("kettle-console");
        consoleBox.style.resize = "vertical";
        consoleBox.style.height = "300px";
        consoleBox.style.overflow = "auto";
        consoleBox.style.scrollBehavior = "smooth";
        const header = document.createElement("strong");
        header.appendChild(document.createTextNode("Console Log"));
        consoleBox.appendChild(header);
        return new KettleConsole(consoleBox);
    }
    createTestResults() {
        const testResultsBox = document.createElement("div");
        this.root.appendChild(testResultsBox);
        const header = document.createElement("strong");
        header.appendChild(document.createTextNode("Unit Test Results"));
        testResultsBox.appendChild(header);
        // Test results are initially hidden
        testResultsBox.style.display = "none";
        return testResultsBox;
    }
    createVariables() {
        const variablesBox = document.createElement("div");
        this.root.appendChild(variablesBox);
        const header = document.createElement("strong");
        header.appendChild(document.createTextNode("Variables and Values"));
        variablesBox.appendChild(header);
        // Variables are initially hidden
        variablesBox.style.display = "none";
        return variablesBox;
    }
    createWebz(iframe: HTMLIFrameElement) {
        const webzBox = document.createElement("div");
        webzBox.id = `webz-${this.uniqueID}`;
        this.root.appendChild(webzBox);
        // Create header for box
        const header = document.createElement("strong");
        header.appendChild(document.createTextNode("Webz Site"));
        webzBox.appendChild(header);
        webzBox.appendChild(iframe);
        // Webz is initially hidden
        // webzBox.style.display = "none";
        console.log(">", iframe);
        return webzBox;
    }

    setIframeVisible(visible: boolean) {
        if (visible) {
            this.iframe.style.display = "block";
        } else {
            this.iframe.style.display = "none";
        }
    }

    destroy() {
        this.codeEditor.destroy();
        this.console.destroy();
    }

    updateStatus(message: string, spinner: boolean) {
        this.runControls.status.innerText = message;
        if (spinner) {
            this.runControls.spinner.style.display = "inline-block";
        } else {
            this.runControls.spinner.style.display = "none";
        }
    }

    updateFeedback(message: string) {
        this.console.log(message);
    }

    updateTestResults(totalPassed: number, totalTests: number, assertions: string[]) {
        if (totalTests === 0) {
            this.testResults.style.display = "none";
            return;
        }
        this.testResults.style.display = "block";
        const assertionList = assertions.join("\n<br>\n");
        const message = `Tests: ${totalPassed}/${totalTests}\n<br/>\n${assertionList}`;
        this.testResults.innerHTML = message;
    }

    updateVariables(variables: Map<string, ts.Symbol>) {
        if (variables.size === 0) {
            this.variables.style.display = "none";
            return;
        }
        // TODO: Finish the updateVariable feature
        // this.variables.style.display = "block";
        this.variables.style.display = "none";
        this.variables.innerHTML = "<strong>Variables and Values</strong><br>";
        variables.forEach((symbol, name) => {
            this.variables.innerHTML += `${name}: ${symbol.escapedName}\n<br>`;
        });
    }

    updateButtons(ready: boolean, running: boolean) {
        this.runControls.runButton.disabled = !ready;

        if (running) {
            this.runControls.runButton.innerText = "Stop";
        } else {
            this.runControls.runButton.innerText = "Run";
        }
    }

    getCode() {
        return this.codeEditor.state.doc.toString();
    }
}