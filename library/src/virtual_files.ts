import { v4 as uuidv4 } from "uuid";

function generateInodeFromUUID(): number {
    return parseInt(uuidv4().replace(/-/g, "").slice(0, 12), 16);
}

/* Map extension to file type name */
export const VirtualFileType = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    ts: "TypeScript",
    tsx: "TypeScript",
    jsx: "JavaScript",
    txt: "Text",
    md: "Markdown",
    json: "JSON",
    yaml: "YAML",
};

export type VirtualFileTypeExtension = keyof typeof VirtualFileType;
export type VirtualFileTypeName =
    (typeof VirtualFileType)[VirtualFileTypeExtension];

export const PERMISSIONS = {
    READ: 0o4,
    WRITE: 0o2,
    EXECUTE: 0o1,
};

/* A virtual file that can be used in the virtual file system */
export interface VirtualFile {
    /* The filename without the path, but including the extension */
    path: string;
    /* The actual string contents of the file */
    contents: string;
    /* The type of the file */
    type: VirtualFileTypeExtension;
    /* The unique identifier of the file */
    inode: number;
    /* The permission bits of the file */
    mode: number;
    /* The time the file was last accessed */
    atime: Date;
    /* The time the file was last modified */
    mtime: Date;
    /* The time the file was created */
    ctime: Date;

    /* Whether this file should be a directory */
    isDirectory?: boolean;
    /* A link to another file */
    isSymlink?: boolean;
    /* The target (path) of the symlink */
    symlinkTarget?: string;
    /* Whether this file should be executable */
    isExecutable?: boolean;
    /* Whether this file should be hidden from the user */
    isHidden?: boolean;
    /* Whether this file should be read-only (cannot be edited) */
    isReadOnly?: boolean;
    /* Is marked for deletion when the current file handler closes */
    isDeleted?: boolean;

    /* Whether the file is actually binary */
    isBinary?: boolean;
    /* The encoding of the file, if the file is binary */
    binaryEncoding?: string;
    /* The actual binary data of the file, if the file is binary; in which case the contents field is ignored */
    binaryData?: ArrayBuffer;
}

export const newFile = (
    path: string,
    contents: string = "",
    type: VirtualFileTypeExtension = "txt",
    mode: number = PERMISSIONS.READ | PERMISSIONS.WRITE | PERMISSIONS.EXECUTE,
): VirtualFile => {
    return {
        path,
        contents,
        type,
        mode,
        atime: new Date(),
        mtime: new Date(),
        ctime: new Date(),
        inode: generateInodeFromUUID(),
    };
};

export type VirtualFileSet = Record<string, VirtualFile>;

export interface VirtualFileSystem {
    cwd: string;
    files: VirtualFileSet;
}

export function normalizePath(
    inputPath: string,
    fs: VirtualFileSystem | null = null,
    cwd: string = "/",
): string {
    const MAX_SYMLINK_DEPTH = 40; // Prevent infinite loops
    let pathParts = inputPath.split("/");

    // Convert relative path to absolute using the current working directory (cwd)
    let resolvedParts: string[] = cwd.split("/").filter(Boolean);

    if (inputPath.startsWith("/")) {
        resolvedParts = []; // If inputPath is absolute, start from root
    }

    for (let part of pathParts) {
        if (part === "" || part === ".") {
            continue; // Skip empty parts and current directory
        } else if (part === "..") {
            if (resolvedParts.length > 0) resolvedParts.pop(); // Move up a directory
        } else {
            resolvedParts.push(part);
        }
    }

    // Resolve symlinks
    let finalPath = resolvedParts.join("/");
    let symlinkDepth = 0;

    if (!fs) {
        return finalPath;
    }

    while (fs.files[finalPath].isSymlink) {
        if (symlinkDepth++ > MAX_SYMLINK_DEPTH) {
            throw new Error(`Symlink loop detected at ${finalPath}`);
        }

        let symlinkTarget = fs.files[finalPath].symlinkTarget;
        if (!symlinkTarget) {
            throw new Error(`Broken symlink at ${finalPath}`);
        }

        // Resolve the symlink target as if it were the new inputPath
        finalPath = normalizePath(
            symlinkTarget,
            fs,
            finalPath.substring(0, finalPath.lastIndexOf("/")),
        );
    }

    return finalPath;
}
