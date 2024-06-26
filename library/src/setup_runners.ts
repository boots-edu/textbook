import { ExecutionEngine } from "./kettle";

declare global {
    interface Window {
        runners: ExecutionEngine[];
    }
}

export function setupRunners() {
    window['runners'] = [];
    window.addEventListener("load", function () {
        document
            .querySelectorAll(
                ".language-typescript.highlighter-rouge,.language-tsx.highlighter-rouge",
            )
            .forEach((area) => {
                const editButton = document.createElement("button");
                editButton.classList.add("btn", "btn-primary");
                editButton.appendChild(document.createTextNode("✏️"));
                editButton.style.float = "right";
                editButton.style.position = "relative";
                editButton.style.zIndex = "100";
                editButton.onclick = () => {
                    window['runners'].push(new ExecutionEngine(
                        area as HTMLTextAreaElement,
                        area.textContent || "// No Text Found",
                        false,
                    ))
                    editButton.remove();
                };
                area.parentNode?.insertBefore(editButton, area);
            });
    });
}
