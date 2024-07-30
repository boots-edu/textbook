"""
Some noted suggestions and heuristics:

If a header has multiple chunks, then they should become separate slides. For example, if it's:
    Paragraph - Image - Paragraph - CodeBlock
Otherwise the text runs over

Extract out the key idea to repeat that text at the top of each file, along with the title of the presentation

Some text snippets are short (few lines) and could easily fit the code below them.
Generally, look for chunks that are heavily unbalanced, and then switch to vertical instead of horizontal layout.

Handle {: .info-title} and other related alerts
"""

import argparse
import json
import math
import time
import os
from pathlib import Path
import io
from urllib.parse import unquote

import marko
from pptx_extension import PowerPointRenderer, PPTXRenderExtension
from markdown_tools import extract_front_matter

# Main Function

def build_slides(
    input_path,
    output_path,
    graphics_path,
    quiet=False
):
    # Have to inject this through a class variable because of the way the markdown library works
    PowerPointRenderer.GRAPHICS_FOLDER = graphics_path
    PowerPointRenderer._input_path = input_path
    converter = marko.Markdown(extensions=[PPTXRenderExtension])
    #converter.use(PPTXRenderExtension)
    # Read input file
    if not quiet:
        yield "Reading input file: " + input_path
    with open(input_path, encoding="utf-8") as input_file:
        input_text = input_file.read()
    if not quiet:
        yield "Read input file"
    # Determine output path
    if output_path is None:
        output_path = Path(input_path).stem
        output_path = os.path.join("./dist/", output_path+".pptx")
    # Parse the markdown file
    if not quiet:
        yield "Parsing markdown"
    regular_metadata, front_matter_metadata, input_content = extract_front_matter(
        input_text
    )
    if not quiet:
        yield "Converting markdown to HTML"
    rendered = converter.convert(input_content)
    if not quiet:
        yield "Rendering markdown to PowerPoint"
    rendered += converter.renderer.finish()
    if not quiet:
        yield "Saving PowerPoint"
    presentation = converter.renderer.presentation
    presentation.save(output_path)
    if not quiet:
        yield "Finished powerpoint"


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Compile Markdown into PowerPoint Slides"
    )
    parser.add_argument("input", metavar="i", help="The input Markdown file (.md), relative to the current working directory.")
    parser.add_argument(
        "--output",
        metavar="o",
        help="The output path for the pptx file (you should specify the full path including pptx extension). If not provided, then the path will be generated based on the input filename and placed into the ./dist/ folder for this directory.",
        default=None,
    )
    parser.add_argument(
        "--graphics",
        metavar="g",
        help="The location of the folder with images in it, relative to the current working directory.",
        default="../source/",
    )
    parser.add_argument(
        "--quiet",
        action="store_true",
        help="Don't print progress updates",
    )

    args = parser.parse_args()
    for progress in build_slides(
        args.input,
        args.output,
        args.graphics,
        args.quiet
    ):
        print(progress)
