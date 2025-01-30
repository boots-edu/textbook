import { ExecutionEngine } from "./kettle";
import {
    newFile,
    normalizePath,
    VirtualFileSet,
    VirtualFileTypeExtension,
} from "./virtual_files";

declare global {
    interface Window {
        runners: ExecutionEngine[];
    }
}

const HIGHLIGHTER_TO_EXTENSION: Record<string, VirtualFileTypeExtension> = {
    typescript: "ts",
    tsx: "tsx",
    html: "html",
    css: "css",
    javascript: "js",
    jsx: "jsx",
};

function getFilenameFromElement(element: Element): string {
    const explicit = element.getAttribute("data-filename");
    if (explicit) return explicit;
    const lang = element.classList[0].split("-")[1];
    return `main.${HIGHLIGHTER_TO_EXTENSION[lang]}`;
}

function groupAdjacentElements(selector: string): Element[][] {
    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) return [];

    const groups = [];
    let currentGroup = [elements[0]];
    groups.push(currentGroup);
    const seenFilenames = new Set<string>([]);
    seenFilenames.add(getFilenameFromElement(elements[0]));

    for (let i = 1; i < elements.length; i++) {
        const prevElement = elements[i - 1];
        const currentElement = elements[i];
        const currentFilename = getFilenameFromElement(currentElement);

        const isNewGroup =
            // The next element is not adjacent
            prevElement.nextElementSibling !== currentElement ||
            // The next element has a previously seen filename
            seenFilenames.has(currentFilename);

        if (isNewGroup) {
            currentGroup = [currentElement];
            groups.push(currentGroup);
            seenFilenames.clear();
            seenFilenames.add(currentFilename);
        } else {
            currentGroup.push(currentElement);
            seenFilenames.add(currentFilename);
        }
    }
    return groups;
}

const LANGUAGES = ["typescript", "tsx", "html", "css", "javascript", "jsx"];
const LANGUAGE_CLASSES = LANGUAGES.map(
    (lang) => `.language-${lang}.highlighter-rouge:not(.no-run)`,
).join(",");

export function setupRunners() {
    window["runners"] = [];
    window.addEventListener("load", function () {
        const areaGroups = groupAdjacentElements(LANGUAGE_CLASSES);
        areaGroups.forEach((areaGroup) => {
            const fileSet: VirtualFileSet = {};
            areaGroup.forEach((area) => {
                const filename = getFilenameFromElement(area as Element);
                const lang =
                    filename ?
                        (filename.split(".").pop() as VirtualFileTypeExtension)
                    :   HIGHLIGHTER_TO_EXTENSION[
                            area.classList[0].split("-")[1]
                        ];
                const normalizedPath = normalizePath(filename);
                fileSet[normalizedPath] = newFile(
                    filename,
                    area.textContent || "",
                    lang,
                );
            });
            const mainPath = Object.keys(fileSet)[0];

            const editButton = document.createElement("button");
            editButton.classList.add("btn", "btn-primary");
            editButton.appendChild(document.createTextNode("✏️"));
            editButton.style.float = "right";
            editButton.style.position = "relative";
            editButton.style.zIndex = "100";
            editButton.onclick = () => {
                const engineArea = document.createElement("div");
                window["runners"].push(
                    new ExecutionEngine(
                        engineArea as HTMLElement,
                        mainPath,
                        fileSet,
                        false,
                    ),
                );
                areaGroup[0].after(engineArea);
                areaGroup.forEach(
                    (area) => ((area as HTMLElement).style.display = "none"),
                );
                editButton.remove();
            };
            areaGroup[0].parentNode?.insertBefore(editButton, areaGroup[0]);
        });
    });
}
