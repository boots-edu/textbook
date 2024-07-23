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
                ".language-typescript.highlighter-rouge:not(.no-run),.language-tsx.highlighter-rouge:not(.no-run)",
            )
            .forEach((area) => {
                const imports:string[]=[];
                for (let classname of area.classList){
                    if (classname.endsWith("-ts")){
                        imports.push(classname.replace("-ts",".ts"));
                    }
                }

                const editButton = document.createElement("button");
                editButton.classList.add("btn", "btn-primary");
                editButton.appendChild(document.createTextNode("✏️"));
                editButton.style.float = "right";
                editButton.style.position = "relative";
                editButton.style.zIndex = "100";
                editButton.onclick = () => {
                    const engineArea = document.createElement("div");
                    window['runners'].push(new ExecutionEngine(
                        engineArea as HTMLElement,
                        area.textContent || "// No Text Found",
                        false,
                        imports
                    ))
                    area.after(engineArea);
                    (area as HTMLElement).style.display = "none";
                    editButton.remove();
                };
                area.parentNode?.insertBefore(editButton, area);
            });
    });
}
