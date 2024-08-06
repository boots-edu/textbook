import json
import re
import os

NODE_MODULES_PATH = '../../node_modules/'
NODE_FOLDERS_TO_INCLUDE = [
    "@boots-edu/webz"
]

raw_d_ts_files = [
    name for name in os.listdir('d_ts_files')
    if name.endswith('.ts')
    #"es6",
    #"es5",
    #"es2015.core",
    #"es2015.collection",
    #"es2015.symbol",
    #"es2015.symbol.wellknown",
    #"es2015.iterable",
    #"es2015.generator",
    #"es2015.promise",
    #"es2015.proxy",
    #"es2015.reflect",
    #"dom.generated",
    #"dom.iterable.generated",
    #"webworker.importscripts",
    #"scripthost"
]

files = {}
for raw_d_ts_file in raw_d_ts_files:
    with open("d_ts_files/"+raw_d_ts_file, encoding='utf-8') as raw_file:
        files[""+raw_d_ts_file] = raw_file.read()
        
# Webz
for folder in NODE_FOLDERS_TO_INCLUDE:
    path = os.path.join(NODE_MODULES_PATH, folder)
    for filename in os.listdir(path):
        
        if filename.endswith('.d.ts') or filename.endswith('.ts') or filename.endswith('.js'):
            with open(os.path.join(path, filename), encoding='utf-8') as raw_file:
                internal_path = "node_modules/@types/" + folder.strip("@").replace("/", "__")+"/"+filename
                print("Adding", filename, internal_path)
                files[internal_path] = raw_file.read()
    

with open('importable_files.json', 'w', encoding='utf-8') as output:
    output.write(json.dumps(files, indent=4))