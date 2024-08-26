import json
import re
import os
import argparse

DEFAULT_TEXTBOOK_IMPORT_PATH = "../../../source/assets/imports/"
DEFAULT_NODE_MODULES_PATH = '../../node_modules/'
DEFAULT_OUTPUT_PATH = 'importable_files.json'

NODE_FOLDERS_TO_INCLUDE = [
    "@boots-edu/webz"
]


def make_defs(textbook_import_path: str, node_modules_path: str, output: str, node_folders_to_include: list[str]):
    raw_d_ts_files = [
        name for name in os.listdir('d_ts_files')
        if name.endswith('.ts')
    ]

    # Built-in types
    files = {}
    for raw_d_ts_file in raw_d_ts_files:
        with open("d_ts_files/"+raw_d_ts_file, encoding='utf-8') as raw_file:
            files[""+raw_d_ts_file] = raw_file.read()
    print(f"Added {len(raw_d_ts_files)} built-in files")
            
    # Webz and any other libraries
    for folder in node_folders_to_include:
        file_count = 0
        path = os.path.join(node_modules_path, folder)
        for filename in os.listdir(path):
            fullpath = os.path.join(path, filename)
            if filename.endswith('.d.ts') or filename.endswith('.ts') or filename.endswith('.js') and not os.path.isdir(fullpath):
                with open(fullpath, encoding='utf-8') as raw_file:
                    internal_path = "node_modules/@types/" + folder.strip("@").replace("/", "__")+"/"+filename
                    files[internal_path] = raw_file.read()
                    file_count += 1
        print(f"Added {file_count} files from {folder}")
        
    # Walk the Textbook imports directory
    for root, dirs, found_files in os.walk(textbook_import_path):
        for file in found_files:
            if file.endswith('.ts') or file.endswith('.d.ts'):
                with open(os.path.join(root, file), encoding='utf-8') as raw_file:
                    # internal_path = re.sub(r'[^a-zA-Z0-9]', '_', root.replace(textbook_import_path, "")) + "__" + file
                    subdir = os.path.relpath(root, textbook_import_path)
                    if subdir in ['.', '']:
                        internal_path = file
                    else:
                        internal_path = "/".join([subdir, file])
                    print("Adding", file, internal_path)
                    files[internal_path] = raw_file.read()


    with open(output, 'w', encoding='utf-8') as output:
        output.write(json.dumps(files, indent=4))
        
    
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--textbook_import_path", default=DEFAULT_TEXTBOOK_IMPORT_PATH, type=str,
                        help=f"Path to the textbook imports directory, default is {DEFAULT_TEXTBOOK_IMPORT_PATH}")
    parser.add_argument("--node_modules_path", default=DEFAULT_NODE_MODULES_PATH, type=str,
                        help=f"Path to the node_modules directory, default is {DEFAULT_NODE_MODULES_PATH}")
    parser.add_argument("--output", default=DEFAULT_OUTPUT_PATH, type=str,
                        help=f"Path to the output file, default is {DEFAULT_OUTPUT_PATH}")
    # Variable number of arguments for the node_modules
    parser.add_argument("node_modules_to_include", nargs='*', default=NODE_FOLDERS_TO_INCLUDE, type=str,
                        help=f"List of node_modules to include, default is " + " ".join(map(repr, NODE_FOLDERS_TO_INCLUDE)))
    args = parser.parse_args()
    make_defs(args.textbook_import_path, args.node_modules_path, args.output, args.node_modules_to_include)