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
import traceback
from urllib.parse import unquote

import marko
from pptx_extension import PowerPointRenderer, PPTXRenderExtension, SlideConverter
from markdown_tools import eat_first_chapter, extract_front_matter
from toc import parse_chapter_lines

def build_slides_from_toc(input_path, output_path, graphics_path, quiet):
    if not quiet:
        yield "Reading toc file"
    with open(input_path, encoding="utf-8") as input_file:
        input_text = input_file.read()
    if output_path is None:
        output_path = "./dist/"
    # Parse the markdown file
    if not quiet:
        yield "Parsing toc markdown"
    regular_metadata, front_matter_metadata, input_content = extract_front_matter(
        input_text
    )
    # Get the indexes from the toc
    units, unit_order = parse_chapter_lines(input_content, os.path.dirname(input_path))
    if not quiet:
        yield f"Found {len(units)} units"
    # Combine the chapters of a single unit into a single index file
    for unit_index in unit_order:
        try:
            if not quiet:
                yield f"Processing unit {unit_index} - {units[unit_index].title}"
            concatenated_chapters = []
            for chapter in units[unit_index].chapters:
                if not quiet:
                    yield f" - Adding chapter {chapter.chapter} - {chapter.title}"
                with open(chapter.path, encoding="utf-8") as chapter_file:
                    chapter_text = chapter_file.read()
                regular_metadata, front_matter_metadata, input_content = extract_front_matter(
                    chapter_text
                )
                input_content = eat_first_chapter(input_content)
                input_content = f"# !BEGIN NEW SECTION ({chapter.title})!\n\n{input_content}"
                concatenated_chapters.append(input_content)
            unit_text = "\n".join(concatenated_chapters)
            # Determine output path
            #output_path_ending = Path(units[unit_index].path).stem
            output_path_ending = f"{unit_index}_{units[unit_index].title}"
            unit_output_path = os.path.join(output_path, output_path_ending+".pptx")
            
            with open(unit_output_path[:-4] + "md", "w") as output_file:
                output_file.write(unit_text)
            # Start the process of converting the markdown to powerpoint
            if not quiet:
                yield f" - Converting markdown to Internal Format"
            PowerPointRenderer.GRAPHICS_FOLDER = graphics_path
            converter = marko.Markdown(extensions=[PPTXRenderExtension])
            pptx_converter = SlideConverter({})
            rendered = converter.convert(unit_text)
            rendered += converter.renderer.finish()
            if not quiet:
                yield " - Rendering internal to PowerPoint"
            pptx = pptx_converter.convert(converter.renderer.slides)
            if not quiet:
                yield f" - Saving PowerPoint to {unit_output_path}"
            presentation = pptx_converter.presentation
            presentation.save(unit_output_path)
            if not quiet:
                yield "Finished powerpoint"
        except Exception as e:
            traceback.print_exc()
            if not quiet:
                yield f"(XXX) Failed to process unit {unit_index}: {e}"

# Main Function

def build_slides(
    input_path,
    output_path,
    graphics_path,
    quiet=False
):
    # Have to inject this through a class variable because of the way the markdown library works
    PowerPointRenderer.GRAPHICS_FOLDER = graphics_path
    converter = marko.Markdown(extensions=[PPTXRenderExtension])
    pptx_converter = SlideConverter({})
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
        yield "Converting markdown to Internal Format"
    rendered = converter.convert(input_content)
    rendered += converter.renderer.finish()
    if not quiet:
        yield "Rendering internal to PowerPoint"
    pptx = pptx_converter.convert(converter.renderer.slides)
    if not quiet:
        yield "Saving PowerPoint"
    presentation = pptx_converter.presentation
    presentation.save(output_path)
    if not quiet:
        yield "Finished powerpoint"


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Compile Markdown into PowerPoint Slides"
    )
    parser.add_argument("input", metavar="i", help="The input Markdown file (.md), relative to the current working directory.")
    parser.add_argument("--as-toc", "-t", action="store_true", 
                        help="If set, then the input file is assumed to be an index file, and parsed with each folder representing a single powerpoint deck.")
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
    build_function = build_slides_from_toc if args.as_toc else build_slides

    for progress in build_function(
        args.input,
        args.output,
        args.graphics,
        args.quiet
    ):
        print(progress)
