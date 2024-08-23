import re
import os
from dataclasses import dataclass, field
    
@dataclass
class ChapterLine:
    chapter: str
    title: str
    path: str

@dataclass
class UnitLine:
    unit: str
    title: str
    path: str
    chapters: list[ChapterLine] = field(default_factory=list)
    
CHAPTER_MATCH = re.compile(r'^(\s*)([\d\-]{1,2})\.? \[(.+)\]\((.+)\)')


def parse_chapter_lines(index_content: str, source_dir: str) -> list[ChapterLine]:
    # Skip to first header (line starting with #)
    index_body = index_content[index_content.index("#"):]

    # Iterate through the table of contents for lines that start with a dash or number
    lines = index_body.split("\n")
    units = {}
    current_unit = ""
    counter = 0
    unit_order = []

    for line in lines:
        match = CHAPTER_MATCH.match(line)
        if match:
            indent, bullet, title, path = match.groups()
            full_path = os.path.join(source_dir, path)
            if bullet == "-":
                current_unit = "0"
                bullet = str(counter)
                counter += 1
            elif indent == "":
                current_unit = bullet
                bullet = "0"
            if not indent:
                units[current_unit] = UnitLine(current_unit, title, full_path)
                unit_order.append(current_unit)
            else:
                units[current_unit].chapters.append(ChapterLine(bullet, title, full_path))
    
    return units, unit_order
