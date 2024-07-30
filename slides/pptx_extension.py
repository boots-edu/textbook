import json
import math
import time
import os
from pathlib import Path
import io
from urllib.parse import unquote

# Markdown parsing stuff
import marko
from marko.ext.gfm.renderer import GFMRendererMixin
from marko.ext.gfm import elements
import marko.renderer

# Code highlighting stuff
from pygments import highlight
from pygments.lexers import get_lexer_by_name, guess_lexer
from pygments.formatters import html
from pygments.formatter import Formatter
from pygments.formatters.img import ImageFormatter
from pygments.formatters.html import HtmlFormatter
from pygments.util import ClassNotFound
from pygments.style import Style
from pygments import token

# from pygments.token import Token, Comment, Keyword, Name, String, \
#    Error, Generic, Number, Operator, Whitespace
from pygments.token import (
    Keyword,
    Name,
    Comment,
    String,
    Error,
    Number,
    Operator,
    Generic,
    Literal,
)
from pygments.styles.sas import SasStyle
from pygments.styles import get_style_by_name

# Powerpoint stuff
from pptx import Presentation
from pptx.util import Inches
from pptx.dml.color import RGBColor
from pptx.enum.dml import MSO_THEME_COLOR
from pptx.enum.text import MSO_AUTO_SIZE, MSO_ANCHOR
from pptx.util import Pt

from pptx.opc.package import PartFactory
from pptx.parts.media import MediaPart

#for aud_type in ["audio/mp3", "audio/mp4", "audio/mid", "audio/x-wav", "audio/mpeg"]:
#    PartFactory.part_type_for.update({aud_type: MediaPart})

# XML Handling stuff
from lxml import etree

# Monkey Patches
import python_pptx_patches


def replace_with_image(img, shape, slide, max_size=False, presentation=None):
    pic = slide.shapes.add_picture(img, shape.left, shape.top)

    # calculate max width/height for target size
    ratio = min(shape.width / float(pic.width), shape.height / float(pic.height))

    if max_size:
        start_of_content_area = slide.shapes.title.top + slide.shapes.title.height
        height_of_content_area = presentation.slide_height - start_of_content_area
        height_of_content_area -= Inches(0.5)
        pic.width = int(height_of_content_area * pic.width / pic.height)
        pic.height = int(height_of_content_area)
        pic.top = start_of_content_area
        pic.left = shape.left
    else:
        pic.height = int(pic.height * ratio)
        pic.width = int(pic.width * ratio)
        pic.top = shape.top + ((shape.height - pic.height) // 2)
        pic.left = shape.left + ((shape.width - pic.width) // 2)

    placeholder = shape.element
    placeholder.getparent().remove(placeholder)
    return


def no_bullet(paragraph):
    paragraph._pPr.insert(
        0,
        etree.Element("{http://schemas.openxmlformats.org/drawingml/2006/main}buNone"),
    )


def _parse_extras(line):
    if not line:
        return {}
    return {k: json.loads(v) for part in line.split(",") for k, v in [part.split("=")]}


class CodeStyle(Style):
    default_style = ""
    styles = {
        token.Whitespace: "#bbbbbb",
        token.Comment: "#008800",
        token.String: "#800080",
        token.Number: "#2c8553",
        token.Other: "bg:#ffffe0",
        token.Keyword: "#2c2cff",
        token.Keyword.Reserved: "#353580",
        token.Keyword.Constant: "",
        token.Name.Builtin: "#2c2cff",
        token.Name.Variable: "#2c2cff",
        token.Generic: "#2c2cff",
        token.Generic.Emph: "#008800",
        token.Generic.Error: "#d30202",
        token.Error: "bg:#e3d2d2 #a61717",
    }


def format_run(ttype, run):
    run.font.color.rgb = RGBColor(0x00, 0x00, 0x00)
    color, bold, italic, underline, _, border, roman, sans, mono = SasStyle._styles[
        ttype
    ]

    if color:
        if len(color) == 3:
            color = color[0] * 2, color[1] * 2, color[2] * 2
        else:
            color = color[:2], color[2:4], color[4:]
        color = [int(c, 16) for c in color]
        run.font.color.rgb = RGBColor(*color)


class PowerPointCodeFormatter(Formatter):
    MAX_REASONABLE_LINE = 14

    def __init__(self, text_frame, code, **options):
        self.options = options
        self.text_frame = text_frame
        self.code = code
        self.line_count = code.count("\n")
        # 9 fits comfortably

    def fix_height(self):
        paragraph = self.text_frame.paragraphs[0]
        # if self.line_count > 9:
        #    spacing = (self.MAX_REASONABLE_LINE-(self.line_count-9))/self.MAX_REASONABLE_LINE/2
        #    paragraph.line_spacing = spacing
        paragraph.line_spacing = 0.5

    def format(self, tokensource, outfile):
        if self.text_frame:
            self.text_frame.clear()
            self.text_frame.word_wrap = False
            self.text_frame.vertical_anchor = MSO_ANCHOR.MIDDLE
            paragraph = self.text_frame.paragraphs[0]
            no_bullet(paragraph)
            paragraph.font.name = "Courier New"
            paragraph.font.size = Pt(10)
            for ttype, value in tokensource:
                run = paragraph.add_run()
                run.text = value
                format_run(ttype, run)
            self.fix_height()
        else:
            print("Throwing away codeblock!")


class PowerPointRenderer(GFMRendererMixin):
    options = {}
    # TODO: Fix these to be instance locals instead of class locals!
    GRAPHICS_FOLDER = "../source/assets/"
    BASE_PRESENTATION = "./template-silber.pptx"
    SLIDE_LAYOUT_TYPES = {
        "title": 0,
        "title_content": 1,
        "section": 2,
        "two_content": 3,
        "comparison": 4,
        "title_only": 5,
        "blank": 6,
        "captioned_content": 7,
        "captioned_picture": 8,
    }

    def __init__(self, **options):
        super().__init__(**options)
        self.current = None
        self._current_text = None
        self._current_slide = None
        self.is_blank_slide = True
        self.presentation = Presentation(self.BASE_PRESENTATION)
        self._list = []
        self._notes = []
        self._durations = []
        self._transcript = []
        self._seen_summary = False

    @property
    def current_slide(self):
        if self._current_slide is None:
            self._current_slide = self.add_slide("blank")
            self._current_text = None
        return self._current_slide

    @property
    def current_text(self):
        if self._current_text is None:
            new_textbox = self.current_slide.shapes.add_textbox()
            self._current_text = new_textbox.text_frame
        return self._current_text

    def finish_previous_slides(self):
        if self._notes:
            notes = "\n".join(n for n in self._notes if n)
            self.add_narration(self._current_slide, notes)
            self._transcript.append(notes)
            self._notes = []

    def add_slide(self, type="title"):
        slide_layout_index = self.SLIDE_LAYOUT_TYPES.get(type, 6)
        slide_layout = self.presentation.slide_layouts[slide_layout_index]
        self._current_slide = self.presentation.slides.add_slide(slide_layout)
        if type == "two_content":
            self._current_text = self.current_slide.shapes[2].text_frame
        self.is_blank_slide = True
        return self._current_slide

    @staticmethod
    def autoplay_media(media):
        el_id = xpath(media.element, ".//p:cNvPr")[0].attrib["id"]
        el_cnt = xpath(
            media.element.getparent().getparent().getparent(),
            './/p:timing//p:video//p:spTgt[@spid="%s"]' % el_id,
        )[0]
        cond = xpath(el_cnt.getparent().getparent(), ".//p:cond")[0]
        cond.set("delay", "1000")

    def add_slide_transition(self, slide, duration):
        xpath(slide.element, ".//p:cSld")[0].addnext(
            etree.fromstring(
                f"""
            <mc:AlternateContent
                xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"
                xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main"
                xmlns:p159="http://schemas.microsoft.com/office/powerpoint/2015/09/main">
                <mc:Choice Requires="p159">
                    <p:transition spd="fast" p14:dur="1000" advTm="{duration}">
                        <p159:morph option="byObject" />
                    </p:transition>
                </mc:Choice>
                <mc:Fallback>
                    <p:transition spd="fast" advTm="{duration}">
                        <p:fade />
                    </p:transition>
                </mc:Fallback>
            </mc:AlternateContent>"""
            )
        )

    def add_audio_overlay(self, slide, audio_file) -> int:
        # print(audio_file)
        seconds = math.ceil(MP3(audio_file).info.length + 2)
        duration = seconds * 1000
        self.add_slide_transition(slide, duration)
        # audio_file = os.path.abspath(audio_file)
        audio_object = slide.shapes.add_movie(
            audio_file, left=Inches(0), top=Inches(0), width=Inches(0), height=Inches(0)
        )  # , poster_frame_image = None)
        self.autoplay_media(audio_object)
        self.is_blank_slide = False
        return seconds

    def add_narration(self, slide, text):
        """audio_file = polly.speech(
            text, self.voice, self.narrate, label=self._input_path
        )
        duration = self.add_audio_overlay(slide, audio_file)
        self._durations.append(duration)"""

    def render_strong_emphasis(self, element: "inline.StrongEmphasis") -> str:
        return f"{self.render_children(element)}"

    def render_emphasis(self, element: "inline.Emphasis") -> str:
        return self.render_children(element)

    def render_code_span(self, element: "inline.CodeSpan") -> str:
        text = element.children
        if text and text[0] == "`" or text[-1] == "`":
            return f"{text}"
        return str(text)
        # return f"{element.children}"

    def render_fenced_code(self, element):
        code = element.children[0].children
        options = PowerPointRenderer.options.copy()
        # options.update(_parse_extras(getattr(element, "extra", None)))
        if element.lang:
            try:
                lexer = get_lexer_by_name(element.lang, stripall=True)
            except ClassNotFound:
                lexer = guess_lexer(code)
        else:
            lexer = guess_lexer(code)

        if code.count("\n") < PowerPointCodeFormatter.MAX_REASONABLE_LINE:
            formatter = PowerPointCodeFormatter(self.current_text, code, **options)
            result = highlight(code, lexer, formatter)
        else:
            formatter = ImageFormatter(
                line_numbers=False,
                style=CodeStyle,  # get_style_by_name('sas'),
                font_size=12,
                image_pad=0,
                line_pad=8,
                **options,
            )
            image_information = highlight(code, lexer, formatter)
            with io.BytesIO() as temporary_image:
                temporary_image.write(image_information)
                temporary_image.seek(0)
                # TODO: Also make this dynamically placed
                placeholder = self.current_slide.placeholders[2]
                replace_with_image(
                    temporary_image,
                    placeholder,
                    self.current_slide,
                    True,
                    self.presentation,
                )
            # For no real reason, also generate HTML
            formatter = HtmlFormatter(**options)
            result = highlight(code, lexer, formatter)

        # self.current_text.auto_size = MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE
        # self.current_text.fit_text("Courier New")
        return result

    def add_transcript(self, text):
        self._notes.append(text)

    def is_summary(self, element):
        return (
            element.children
            and element.children[0].children
            and element.children[0].children == "Summary"
        )

    def render_heading(self, element: "block.Heading") -> str:
        self.finish_previous_slides()
        child_content = self.render_children(element)
        if self.is_summary(element):
            self._seen_summary = True
            if self._seen_summary:
                return child_content
        if element.level == 1:
            new_slide = self.add_slide("title")
            self.add_transcript(child_content)
        # TODO: Make this smarter based on size of content, to decide which one to use.
        else:
            new_slide = self.add_slide("two_content")
        if new_slide.shapes.title is None:
            raise Exception("Invalid PowerPoint template - the slide has no title shape in its template")
        new_slide.shapes.title.text = child_content
        if element.level == 1:
            new_slide.placeholders[1].text = "BOOTS: Beginner Object-Oriented TypeScript"
        return "<h{level}>{children}</h{level}>\n".format(
            level=element.level, children=child_content
        )

    def render_paragraph(self, element: "block.Paragraph") -> str:
        children = self.render_children(element)
        if self._list or self._seen_summary:
            return children
        if children.startswith("{:") and children.endswith("}"):
            return ""
        if self.current_slide.has_notes_slide:
            self.current_slide.notes_slide.notes_text_frame.text += "\n"
            self.current_slide.shapes[1].text_frame.text += "\n"
        self.current_slide.notes_slide.notes_text_frame.text += children
        self.current_slide.shapes[1].text_frame.text += children
        self.add_transcript(children)
        self.is_blank_slide = False
        if element._tight:  # type: ignore
            return children
        else:
            return f"<p>{children}</p>\n"

    def render_list(self, element: "block.List") -> str:
        if self._seen_summary:
            return ""
        self._list.append(element)
        children = self.render_children(element)
        # PowerPoint output
        self.current_text.text += children
        # Regular markdown output
        if element.ordered:
            tag = "ol"
            extra = f' start="{element.start}"' if element.start != 1 else ""
        else:
            tag = "ul"
            extra = ""
        self._list.pop()
        return ""
        # return "<{tag}{extra}>\n{children}</{tag}>\n".format(
        #    tag=tag, extra=extra, children=children
        # )

    def render_list_item(self, element: "block.ListItem") -> str:
        children = self.render_children(element)
        if len(element.children) == 1 and getattr(element.children[0], "_tight", False):  # type: ignore
            sep = ""
        else:
            sep = "\n"
        return f"{sep}{children}\n"
        # return f"<li>{sep}{children}</li>\n"

    def render_image(self, element: "inline.Image") -> str:
        # Need to remove the ../../ at the start of the element.dest
        image_path = Path(element.dest).parts[2:]
        image_path = os.path.join(*image_path)
        url = unquote(self.escape_url(os.path.join(self.GRAPHICS_FOLDER, image_path)))
        # for shape in self.current_slide.placeholders:
        #    print('%d %s %s' % (shape.placeholder_format.idx, shape.name, shape.placeholder_format.type), dir(shape))
        # TODO: Make this choose its side more dynamically
        placeholder = self.current_slide.placeholders[2]
        replace_with_image(url, placeholder, self.current_slide)
        render_func = self.render
        self.render = self.render_plain_text  # type: ignore
        body = self.render_children(element)
        self.render = render_func  # type: ignore
        # return template.format(url, body, title)
        return ""

    def finish(self):
        self.finish_previous_slides()
        return ""

    @staticmethod
    def escape_html(raw: str) -> str:
        return raw

    @staticmethod
    def escape_url(raw: str) -> str:
        return raw


class PPTXRenderExtension:
    elements = [
        elements.Paragraph,
        elements.Strikethrough,
        elements.Url,
        elements.Table,
        elements.TableRow,
        elements.TableCell,
    ]
    renderer_mixins = [PowerPointRenderer]
    parser_mixins = []


# XML Stuff

ETREE_NAMESPACE_MAP = {
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
    "p14": "http://schemas.microsoft.com/office/powerpoint/2010/main",
    "p159": "http://schemas.microsoft.com/office/powerpoint/2015/09/main",
}

for k, v in ETREE_NAMESPACE_MAP.items():
    etree.register_namespace(k, v)


def xpath(el, query):
    return etree.ElementBase.xpath(el, query, namespaces=ETREE_NAMESPACE_MAP)
