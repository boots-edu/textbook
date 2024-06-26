import ConTodo from "contodo";

export type ConsoleAPICommand =
    | "log"
    | "error"
    | "info"
    | "warning"
    | "table"
    | "clear";

export const CONSOLE_API_COMMAND_LIST: ConsoleAPICommand[] = [
    "log",
    "error",
    "info",
    "warning",
    "table",
    "clear",
];

export type ConsoleAPI = Record<ConsoleAPICommand, (...message: any[]) => void>;

interface KettleConsoleLine {
    type: string;
    contents: any[];
}

export class KettleConsole implements ConsoleAPI {
    contodo: ConTodo | null;
    // Human readable output log for convenience
    history: KettleConsoleLine[];

    constructor(target: HTMLElement) {
        this.contodo = new ConTodo(target, {
            autostart: false,
            showDebugging: false,
            showTimestamp: false,
            // TODO: Stop this from using the real console too, please
        });
        this.contodo.createDocumentNode();
        this.history = [];
    }

    destroy() {
        this.contodo?.api.clear();
        this.contodo = null;
    }

    _logEvent(type: string, contents: any[]) {
        this.history.push({ type, contents });
    }

    clear(info: boolean = false) {
        this.contodo?.api.clear(info);
        this.history.push({ type: "clear", contents: [] });
    }

    log(...message: any[]) {
        this.contodo?.api.log(...message);
        this._logEvent("log", message);
    }

    error(...message: any[]) {
        this.contodo?.api.error(...message);
        this._logEvent("error", message);
    }

    info(...message: any[]) {
        this.contodo?.api.info(...message);
        this._logEvent("info", message);
    }

    warning(...message: any[]) {
        this.contodo?.api.warning(...message);
        this._logEvent("warning", message);
    }

    table(...message: any[]) {
        this.contodo?.api.table(...message);
        this._logEvent("table", message);
    }
}