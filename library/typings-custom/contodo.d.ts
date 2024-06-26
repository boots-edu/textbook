declare module 'contodo' {
    export default class ConTodo {
        constructor(target: HTMLElement, options: {
            autostart: boolean,
            showDebugging: boolean,
            showTimestamp: boolean,
        });
        createDocumentNode(): void;
        api: ConsoleAPI;
    }

    export type ConsoleAPICommand = "log" | "error" | "info" | "warning" | "table" | "clear";
    export type ConsoleAPI = Record<ConsoleAPICommand, (...message: any[]) => void>;
}