from typing import Union
from dataclasses import dataclass
from pptx.dml.color import ColorFormat
from pptx.dml.fill import FillFormat
from pptx.util import Pt
from pptx.text.text import Font
from pptx.util import Length
from pptx.enum.text import MSO_AUTO_SIZE, MSO_VERTICAL_ANCHOR

class SlideContent:
    pass


@dataclass
class Run:
    text: str
    font: Font
    hyperlink: str = None
    
    def add_to_paragraph(self, paragraph):
        r = paragraph.add_run(self.text)
        r.font = self.font
        if self.hyperlink:
            r.hyperlink.address = self.hyperlink
        return r
    
@dataclass
class Paragraph:
    runs: list[Run]
    font: Font
    level: int
    line_spacing: float
    space_after: Length
    space_before: Length
    
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
    
@dataclass
class TextFrame(SlideContent):
    paragraphs: list[Paragraph]
    auto_size: MSO_AUTO_SIZE
    margin_bottom: Length
    margin_left: Length
    margin_right: Length
    margin_top: Length
    vertical_anchor: MSO_VERTICAL_ANCHOR
    word_wrap: bool
    
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
    
    
@dataclass
class Picture(SlideContent):
    image: str
    left: int
    top: int
    width: int
    height: int
    

@dataclass
class RawSlide:
    content: list[Union[TextFrame]]
    
    
