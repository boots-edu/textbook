import { EditorState } from "@codemirror/state";

function cleanFilename(filename: string) {
    return filename.split("/").pop() || filename;
}

/**
 * Generates a button group interface for managing CodeMirror editor tabs.
 * @param {HTMLElement} container - The container where the button group will be appended.
 * @param {Record<string, EditorView>} editorViews - An object mapping filenames to their respective EditorView objects.
 */
export function createTabInterface(
    container: HTMLElement,
    editorViews: Record<string, EditorState>,
    switchTabs: (filename: string) => void,
) {
    // Create the button group container
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("btn-group", "mb-3");
    buttonGroup.role = "group";

    // Create buttons for each file in editorViews
    Object.keys(editorViews).forEach((filename) => {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("btn", "btn-outline-primary", "font-monospace");
        button.textContent = cleanFilename(filename);
        button.onclick = () => {
            // Switch to the appropriate editor state
            switchTabs(filename);
        };
        buttonGroup.appendChild(button);
    });

    // // Add "Add Tab" button
    // const addButton = document.createElement("button");
    // addButton.type = "button";
    // addButton.classList.add("btn", "btn-outline-success");
    // addButton.textContent = "Add Tab";
    // addButton.onclick = () => {
    //     // Stubbed out method for adding a new tab
    //     console.log("Add Tab functionality not implemented yet.");
    // };
    // buttonGroup.appendChild(addButton);

    // // Add "Delete Tab" button
    // const deleteButton = document.createElement("button");
    // deleteButton.type = "button";
    // deleteButton.classList.add("btn", "btn-outline-danger");
    // deleteButton.textContent = "Delete Tab";
    // deleteButton.onclick = () => {
    //     // Stubbed out method for deleting a tab
    //     console.log("Delete Tab functionality not implemented yet.");
    // };
    // buttonGroup.appendChild(deleteButton);

    // Prepend the button group to the container
    container.insertBefore(buttonGroup, container.firstChild);

    return buttonGroup;
}
