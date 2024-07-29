import json
import os
from io import StringIO
from pprint import pprint
import frontmatter
from frontmatter.default_handlers import YAMLHandler
from ruamel.yaml import YAML

yaml = YAML()
yaml.default_flow_style = False
yaml.allow_unicode=True


class RuamelYamlHandler(YAMLHandler):
    def load(self, fm, **kwargs):
        return yaml.load(StringIO(fm))

class MarkdownFile:
    def __init__(self, filename):
        self.filename = filename
    def __enter__(self):
        with open(self.filename) as existing_file:
            raw = existing_file.read()
        self.metadata, self.waltz, self.content = extract_front_matter(raw)
        return self
    def __exit__(self, type, value, traceback):
        if type is None:
            self.save()
            return True
        else:
            # Failed to save, rethrow exception
            return False
    def save(self):
        new_version = add_to_front_matter(self.content, self.waltz)
        with open(self.filename, 'w') as existing_file:
            existing_file.write(new_version)

def extract_front_matter(text):
    data = frontmatter.loads(text, handler=RuamelYamlHandler())
    regular_metadata = data.metadata
    front_matter_metadata = regular_metadata.pop('waltz', {})
    return regular_metadata, front_matter_metadata, data.content

def add_to_front_matter(markdown, yaml):
    if markdown.startswith("---"):
        data = frontmatter.loads(markdown, handler=yaml)
        regular_metadata = data.metadata
        if 'waltz' not in regular_metadata:
            regular_metadata['waltz'] = {}
        regular_metadata['waltz'].update(yaml)
        yaml = regular_metadata
        markdown = data.content
    else:
        yaml = {'waltz': yaml}
    return inject_yaml(markdown, yaml)


def inject_yaml(markdown, yaml_data):
    stream = StringIO()
    yaml.dump(yaml_data, stream)
    return "---\n{}---\n{}".format(stream.getvalue(), markdown)
