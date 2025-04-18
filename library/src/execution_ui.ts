/*
CodeMirror editor
Run/Terminate Button: Status (Timing)
Console Log
Test Results (if available)
Variables and Values
Webz Area (if available)
*/
import { EditorView, basicSetup } from "codemirror";
import { EditorState, Extension } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { markdown } from "@codemirror/lang-markdown";
import { json } from "@codemirror/lang-json";
import { yaml } from "@codemirror/lang-yaml";
import { KettleConsole } from "./ts_console";
import ts from "typescript";
import {
    VirtualFileTypeExtension,
    VirtualFileSet,
    newFile,
} from "./virtual_files";
import { createTabInterface } from "./editor_tab_creation";

/*import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';  // CSS or LESS
import {createTree} from 'jquery.fancytree';
import 'jquery.fancytree/dist/modules/jquery.fancytree.edit';
import 'jquery.fancytree/dist/modules/jquery.fancytree.filter';*/

export const CodeMirrorExtensions: Record<
    VirtualFileTypeExtension,
    Extension[]
> = {
    js: [basicSetup, javascript()],
    ts: [basicSetup, javascript({ typescript: true })],
    jsx: [basicSetup, javascript({ jsx: true })],
    tsx: [basicSetup, javascript({ jsx: true, typescript: true })],
    css: [basicSetup, css() as Extension],
    html: [basicSetup, html()],
    md: [basicSetup, markdown()],
    json: [basicSetup, json()],
    yaml: [basicSetup, yaml()],
    txt: [basicSetup],
};
export const DEFAULT_CODE_MIRROR_EXTENSIONS = [basicSetup];

export interface RunControls {
    runButton: HTMLButtonElement;
    runThisFileButton: HTMLButtonElement;
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
    public codeStates: Record<string, EditorState>;
    public currentPath: string;
    public initialFiles: VirtualFileSet;

    constructor(
        root: HTMLElement,
        mainPath: string,
        initialFiles: VirtualFileSet,
        private iframe: HTMLIFrameElement,
    ) {
        this.root = root;
        this.codeStates = {};
        this.currentPath = mainPath;
        this.initialFiles = { ...initialFiles };
        this.codeEditor = this.createCodeEditor(initialFiles, mainPath);
        this.runControls = this.createRunControls();
        this.testResults = this.createTestResults();
        this.variables = this.createVariables();
        this.webz = this.createWebz(iframe);
        this.console = this.createConsole();
    }

    createCodeEditor(initialFiles: VirtualFileSet, mainPath: string) {
        Object.keys(initialFiles).forEach((path) => {
            const code = initialFiles[path].contents;
            const fileExtension = initialFiles[path].type;
            const extensions =
                fileExtension in CodeMirrorExtensions ?
                    CodeMirrorExtensions[fileExtension]
                :   DEFAULT_CODE_MIRROR_EXTENSIONS;
            extensions.push(
                EditorView.updateListener.of((evt) => {
                    if (evt.docChanged && this.currentPath === path) {
                        this.codeStates[path] = evt.state;
                    }
                }),
            );
            const initialState = EditorState.create({
                doc: code,
                extensions,
            });
            this.codeStates[path] = initialState;
        });
        if (!Object.keys(this.codeStates).length) {
            throw new Error("No files provided for code editor");
        }
        if (!(mainPath in this.codeStates)) {
            console.error(
                `Main path ${mainPath} not found in initial files`,
                Object.keys(this.codeStates),
            );
            mainPath = Object.keys(this.codeStates)[0];
        }
        const editor = new EditorView({
            state: this.codeStates[mainPath],
            parent: this.root,
        });
        if (Object.keys(this.codeStates).length > 1) {
            createTabInterface(this.root, this.codeStates, (filename) => {
                this.currentPath = filename;
                editor.setState(this.codeStates[filename]);
            });
        }

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
        runControlBox.classList.add("btn-group"); // Bootstrap button group
        this.root.appendChild(runControlBox);

        // Primary Run Button
        const runButton = document.createElement("button");
        runButton.classList.add("btn", "btn-success");
        runButton.appendChild(document.createTextNode("Run"));
        runControlBox.appendChild(runButton);

        // Dropdown Toggle Button
        const dropdownButton = document.createElement("button");
        dropdownButton.classList.add(
            "btn",
            "btn-success",
            "dropdown-toggle",
            "dropdown-toggle-split",
        );
        dropdownButton.setAttribute("data-bs-toggle", "dropdown");
        dropdownButton.setAttribute("aria-expanded", "false");
        // Add hidden span with visually hidden text for screen readers
        const visuallyHidden = document.createElement("span");
        visuallyHidden.classList.add("visually-hidden");
        visuallyHidden.appendChild(document.createTextNode("Toggle Dropdown"));
        dropdownButton.appendChild(visuallyHidden);
        runControlBox.appendChild(dropdownButton);

        // Dropdown Menu
        const dropdownMenu = document.createElement("ul");
        dropdownMenu.classList.add("dropdown-menu");

        // "Run This File" Option
        const runThisFileItem = document.createElement("li");
        const runThisFileButton = document.createElement("button");
        runThisFileButton.classList.add("dropdown-item");
        runThisFileButton.textContent = "Run This File";

        // Add the extra run options to the dropdown menu
        runThisFileItem.appendChild(runThisFileButton);
        dropdownMenu.appendChild(runThisFileItem);
        runControlBox.appendChild(dropdownMenu);

        // Status spinner and message
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

        return { runButton, runThisFileButton, status, timing, spinner };
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
        webzBox.style.width= "100%";
        this.root.appendChild(webzBox);
        // Create header for box
        const header = document.createElement("strong");
        header.appendChild(document.createTextNode("Webz Site"));
        webzBox.appendChild(header);
        webzBox.appendChild(iframe);
        // Webz is initially hidden
        // webzBox.style.display = "none";
        //console.log(">", iframe);
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

    updateTestResults(
        totalPassed: number,
        totalTests: number,
        assertions: string[],
    ) {
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

    getCode(filename: string | undefined = undefined) {
        if (filename === undefined) {
            filename = this.currentPath;
        }
        return this.codeStates[filename].doc.toString();
    }

    getMainFilename(useMain: boolean = true) {
        return useMain ? Object.keys(this.codeStates)[0] : this.currentPath;
    }

    /**
     * Returns an immutable copy of the current code states
     */
    getFiles(): VirtualFileSet {
        const files: VirtualFileSet = {};
        Object.keys(this.codeStates).forEach((filename) => {
            files[filename] = newFile(filename, this.getCode(filename));
        });
        return files;
    }
}
