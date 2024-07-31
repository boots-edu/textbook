import json
import math
import time
import os
from pathlib import Path
import io
from urllib.parse import unquote
from dataclasses import dataclass

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

# XML Handling stuff
from lxml import etree

# Monkey Patches
import python_pptx_patches
from pptx_utils import replace_with_image
from code_formatting import PowerPointCodeFormatter, format_code_as_image, get_lexer


MODES = {
    "start": 0,
    "title": 1,
    "preamble": 2,
    "key idea": 3,
    "content": 4,
    "next step": 5
}

LEFT_SIDE = 1
RIGHT_SIDE = 2


def flatten_text(element):
    pass


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
        self.presentation = Presentation(self.BASE_PRESENTATION)
        #: Estimated slide content so far, in short form
        self._slide_content = []
        
        self._current_slide = None
        self._current_text = None
        self._current_paragraph = None
        self._paragraph_index = 0
        self._current_title = None
        self._current_side = LEFT_SIDE
        
        self._list = []
        self.mode = "start"
        
        self.key_idea = None

    @property
    def current_slide(self):
        """
        Guaranteed access to a slide, even if it must be created first.
        """
        if self._current_slide is None:
            self._current_slide = self.add_slide("blank")
            self._current_text = None
            self._current_paragraph = None
            self._paragraph_index = 0
            self._current_side = LEFT_SIDE
        return self._current_slide
    
    @current_slide.setter
    def current_slide(self, value):
        self._current_slide = value

    @property
    def current_text(self):
        """
        Guaranteed access to a textbox, even if it must be created first.
        """
        if self._current_text is None:
            new_textbox = self.current_slide.shapes.add_textbox()
            self._current_text = new_textbox.text_frame
            self._current_paragraph = self._current_text.paragraphs[0]
            self._paragraph_index = 0
            self._current_side = LEFT_SIDE
        return self._current_text
    
    @current_text.setter
    def current_text(self, value):
        self._current_text = value
        self._current_paragraph = value.paragraphs[0]
        
    @property
    def current_paragraph(self):
        """
        Guaranteed access to a paragraph, even if it must be created first.
        """
        return self._current_paragraph
    
    def flip_side(self):
        self._current_side = RIGHT_SIDE if self._current_side == LEFT_SIDE else LEFT_SIDE
        print(list(self.current_slide.shapes))
        if self._current_side == RIGHT_SIDE:
            if self._slide_content and self._slide_content[0] == "image":
                self.current_text = self.current_slide.shapes[LEFT_SIDE].text_frame
            else:
                self.current_text = self.current_slide.shapes[RIGHT_SIDE].text_frame
            self._current_paragraph = self._current_text.paragraphs[0]
            self._paragraph_index = 0
    
    def add_paragraph(self):
        if self._paragraph_index == 0:
            self._paragraph_index += 1
            return self.current_text.paragraphs[0]
        self._current_paragraph = self.current_text.add_paragraph()
        self._paragraph_index += 1
        return self.current_paragraph

    def add_slide(self, type="title"):
        if type not in self.SLIDE_LAYOUT_TYPES:
            raise Exception(f"Invalid slide type: {type}")
        slide_layout_index = self.SLIDE_LAYOUT_TYPES[type]
        slide_layout = self.presentation.slide_layouts[slide_layout_index]
        self.current_slide = self.presentation.slides.add_slide(slide_layout)
        if type in ("title_content", "two_content"):
            # Set the left textbox to the current_text
            self.current_text = self.current_slide.shapes[LEFT_SIDE].text_frame
            self._current_side = LEFT_SIDE
        # Remove any existing content
        self._slide_content.clear()
        return self._current_slide
    

    def finish_previous_slides(self):
        # TODO: Check if we should resize anything, if we have extra space
        # If we only filled up one side, then we should resize the left side to be large
        slide_content = tuple(self._slide_content)
        if slide_content == ("text",):
            # TODO: Figure out width of the two content areas
            #self.current_slide.placeholders[LEFT_SIDE].width += self.current_slide.placeholders[RIGHT_SIDE].width
            #self.current_slide.placeholders[RIGHT_SIDE].width = 0
            pass
    
    def make_new_slide_if_needed(self):
        print(self._slide_content)
        slide_content = tuple(self._slide_content)
        if len(slide_content) >= 2:
            next_slide_title = self.current_slide.shapes.title.text
            self.finish_previous_slides()
            self.add_slide("two_content")
            self.current_slide.shapes.title.text = next_slide_title
        elif len(slide_content) == 1:
            self.flip_side()
    
    #######################
    ### Rendering Content
    #######################

    def render_strong_emphasis(self, element: "inline.StrongEmphasis") -> str:
        content = self.render_children(element)
        run = self.current_paragraph.add_run()
        run.bold = True
        run.text = content
        return ""

    def render_emphasis(self, element: "inline.Emphasis") -> str:
        content = self.render_children(element)
        run = self.current_paragraph.add_run()
        run.italic = True
        run.text = content
        return ""

    def render_code_span(self, element: "inline.CodeSpan") -> str:
        text = element.children
        run = self.current_paragraph.add_run()
        run.text = text
        run.font.name = "Courier New"
        return ""

    def render_fenced_code(self, element):
        self.make_new_slide_if_needed()
        code = element.children[0].children
        options = PowerPointRenderer.options.copy()
        lexer = get_lexer(element.lang, code)

        # TODO: Make this way smarter
        if code.count("\n") < PowerPointCodeFormatter.MAX_REASONABLE_LINE:
            formatter = PowerPointCodeFormatter(self.current_text, code, **options)
            result = highlight(code, lexer, formatter)
        else:
            result = format_code_as_image(self.presentation,
                                          self.current_slide,
                                          self._current_side,
                                          code,
                                          lexer, **options)
        
        self._slide_content.append("code")
        return ""

    def check_title(self, element, *options):
        return (
            element.children
            and element.children[0].children
            and isinstance(element.children[0].children[0], str)
            and element.children[0].children[0].strip().lower() in options
        )

    def render_heading(self, element: "block.Heading") -> str:
        self.finish_previous_slides()
        child_content = self.render_children(element)
        
        # FSA to determine what we are currently processing
        if self.mode == "start":
            self.mode = "title"
        elif self.mode == "title":
            self.mode = "preamble"
        elif self.mode == "preamble":
            if self.check_title(element, "key idea", "key ideas"):
                self.mode = "key idea"
            else:
                self.mode = "content"
        elif self.mode == "key idea":
            self.mode = "content"
        elif self.mode == "content":
            if self.check_title(element, "next step", "next steps"):
                self.mode = "next step"
        
        # Stop if we're not supposed to grab this title        
        if self.mode in ("start", "title", "preamble", "next step", "key idea"):
            return ""

        # Create a new slide, either a title or a two_content
        if element.level == 1:
            new_slide = self.add_slide("title")
        else:
            new_slide = self.add_slide("two_content")
        
        # Set the slide's title
        if new_slide.shapes.title is None:
            raise Exception("Invalid PowerPoint template - the slide has no title shape in its template")
        new_slide.shapes.title.text = child_content
        
        # Set the subheading for the title slide
        if element.level == 1:
            # TODO: Extract this to a setting!
            new_slide.placeholders[1].text = "BOOTS: Beginner Object-Oriented TypeScript"
        
        return ""
    
    IGNORED_CONTENT_MODES = ("start", "title", "preamble", "next step")

    def render_paragraph(self, element: "block.Paragraph") -> str:
        print(element.children)
        children = self.render_children(element)
        # Abort if we're not supposed to be rendering this
        if self.mode in self.IGNORED_CONTENT_MODES:
            return ""
        # Key idea gets saved
        if self.mode == "key idea":
            self.key_idea = children
            return ""
        # TODO: Stop if we're rendering a list
        if self._list:
            return children
        # TODO: Stop if we're rendering a class attribute
        if children.startswith("{:") and children.endswith("}"):
            return ""
        
        # Actually render the content
        self.make_new_slide_if_needed()
        paragraph = self.add_paragraph()
        # TODO: Need to be accessing children
        run = paragraph.add_run()
        run.text = children
        
        if not self._slide_content or self._slide_content[-1] != "text":
            self._slide_content.append("text")
        
        return ""

    def render_list(self, element: "block.List") -> str:
        if self.mode in self.IGNORED_CONTENT_MODES:
            return ""
        self.make_new_slide_if_needed()
        self._list.append(element)
        children = self.render_children(element)
        # PowerPoint output
        self.current_text.text += children
        self._list.pop()
        self._slide_content.append("list")
        return ""

    def render_list_item(self, element: "block.ListItem") -> str:
        self.render_children(element)
        return ""

    def render_image(self, element: "inline.Image") -> str:
        self.make_new_slide_if_needed()
        image_path = Path(element.dest).parts[2:]
        image_path = os.path.join(*image_path)
        url = unquote(self.escape_url(os.path.join(self.GRAPHICS_FOLDER, image_path)))
        # TODO: Make this choose its side more dynamically
        placeholder = self.current_slide.placeholders[self._current_side]
        replace_with_image(url, placeholder, self.current_slide)
        # Swap out the regular rendering function for a second
        render_func, self.render = self.render, self.render_plain_text
        body = self.render_children(element)
        # Swap back!
        self.render = render_func  # type: ignore
        self._slide_content.append("image")
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
