from typing import Union
from dataclasses import dataclass, field
from pptx.dml.color import ColorFormat
from pptx.dml.fill import FillFormat
from pptx.util import Pt
from pptx.text.text import Font
from pptx.util import Length
from pptx.enum.text import MSO_AUTO_SIZE, MSO_VERTICAL_ANCHOR
from pygments import highlight

from code_formatting import PowerPointCodeFormatter, format_code_as_image, get_lexer

class SlideContent:
    pass


@dataclass
class TextFormatting:
    bold: bool = False
    italic: bool = False
    underline: bool = False
    strikethrough: bool = False
    code: bool = False
    
    def copy_with_changes(self, **changes):
        return TextFormatting(
            bold=changes.get('bold', self.bold),
            italic=changes.get('italic', self.italic),
            underline=changes.get('underline', self.underline),
            strikethrough=changes.get('strikethrough', self.strikethrough),
            code=changes.get('code', self.code)
        )
        
    def to_font(self):
        new_font = Font()
        new_font.bold = self.bold
        new_font.italic = self.italic
        new_font.underline = self.underline
        new_font.strikethrough = self.strikethrough
        if self.code:
            new_font.name = "Courier New"
        return new_font
    
    def to_preview(self):
        if not any((self.bold, self.italic, self.underline, self.strikethrough, self.code)):
            return ""
        return (f"{'B' if self.bold else ''}{'I' if self.italic else ''}"
                f"{'U' if self.underline else ''}{'S' if self.strikethrough else ''}"
                f"{'C' if self.code else ''}")


@dataclass
class Run:
    text: str
    font: TextFormatting
    hyperlink: str = None
    
    def add_to_paragraph(self, paragraph):
        r = paragraph.add_run(self.text)
        r.font = self.font
        if self.hyperlink:
            r.hyperlink.address = self.hyperlink
        return r
    
    def to_preview(self):
        formatting = self.font.to_preview()
        if not formatting:
            return self.text
        return f"[{formatting}]{self.text}[/{formatting}]"
    
@dataclass
class Paragraph:
    runs: list[Run]
    level: int
    font: TextFormatting = None
    line_spacing: float = None
    space_after: Length = None
    space_before: Length = None
    
    def add_to_text_frame(self, text_frame):
        p = text_frame.add_paragraph()
        p.level = self.level
        p.line_spacing = self.line_spacing
        p.space_after = self.space_after
        p.space_before = self.space_before
        p.font = self.font
        for run in self.runs:
            run.add_to_paragraph(p)
        return p
    
    def to_preview(self):
        return "    "*(self.level-1) + "|".join(run.to_preview() for run in self.runs)
    
@dataclass
class TextFrame(SlideContent):
    paragraphs: list[Paragraph] = field(default_factory=list)
    auto_size: MSO_AUTO_SIZE = None
    margin_bottom: Length = None
    margin_left: Length = None
    margin_right: Length = None
    margin_top: Length = None
    vertical_anchor: MSO_VERTICAL_ANCHOR = None
    word_wrap: bool = True
    is_list: bool = False
    
    def add_run(self, text, formatting):
        if isinstance(formatting, dict):
            print(">>>", text, formatting)
        if isinstance(text, str):
            run = Run(text, formatting)
        else:
            run = text
        if not self.paragraphs:
            self.start_paragraph(0)
        self.paragraphs[-1].runs.append(run)
        return run
    
    def start_paragraph(self, level):
        self.paragraphs.append(Paragraph([], level))
    
    def add_to_slide(self, slide, left, top, width, height):
        text_box = slide.shapes.add_textbox(
            left, top, width, height
        )
        self.modify_text_frame(text_box.text_frame)
        return text_box
    
    def set_text_frame(self, text_frame):
        text_frame.auto_size = self.auto_size
        text_frame.vertical_anchor = self.vertical_anchor
        text_frame.word_wrap = self.word_wrap
        text_frame.margin_bottom = self.margin_bottom
        text_frame.margin_left = self.margin_left
        text_frame.margin_right = self.margin_right
        text_frame.margin_top = self.margin_top
        for paragraph in self.paragraphs:
            paragraph.add_to_text_frame(text_frame)
        return text_frame
    
    def to_preview(self):
        symbol = "list" if self.is_list else "text"
        return (f"[{symbol}]" +
                "\n".join(paragraph.to_preview() for paragraph in self.paragraphs) +
                f"[/{symbol}]")
    
    
@dataclass
class Picture(SlideContent):
    image: str
    left: int = None
    top: int = None
    width: int = None
    height: int = None
    
    def to_preview(self):
        return f"[image]{self.image}"
    
    
@dataclass
class CodeBlock(SlideContent):
    code: str
    language: str
    runnable: bool = True
    
    MAX_REASONABLE_LINE = 10
    
    def to_powerpoint(self, options):
        code = self.code
        options = options.copy()
        lexer = get_lexer(self.language, code)

        # TODO: Make this way smarter
        if code.count("\n") < self.MAX_REASONABLE_LINE:
            formatter = PowerPointCodeFormatter(self.current_text, code, **options)
            result = highlight(code, lexer, formatter)
        else:
            result = format_code_as_image(self.presentation,
                                          self.current_slide,
                                          self._current_side,
                                          code,
                                          lexer, **options)
        
        self._slide_content.append("code")
        
    def to_preview(self):
        symbol = "code" if self.runnable else "code_no_run"
        return f"[{symbol}]{self.language!r}\n{self.code}[/{symbol}]"
    

@dataclass
class RawSlide:
    title: TextFrame
    type: str
    key_idea: str = None
    content: list[Union[TextFrame]] = field(default_factory=list)
    
    def copy_without_content(self):
        return RawSlide(self.title, [])
    
    def to_preview(self):
        return (f"# {self.title.to_preview()}: {self.type}\n" +
                f"Key Idea: {self.key_idea.to_preview()}\n" + 
                "\n----\n".join(content.to_preview() for content in self.content) + 
                "\n\n")
