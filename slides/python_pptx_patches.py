from pptx.shapes.shapetree import (PicturePlaceholder, SlidePlaceholder, 
                                    CT_Picture, PlaceholderPicture)


class CustomPicturePlaceholder(PicturePlaceholder):
    def insert_picture(self, image_file, method = 'crop'):
        """
        Return a |PlaceholderPicture| object depicting the image in
        *image_file*, which may be either a path (string) or a file-like
        object. The image is cropped to fill the entire space of the
        placeholder. A |PlaceholderPicture| object has all the properties and
        methods of a |Picture| shape except that the value of its
        :attr:`~._BaseSlidePlaceholder.shape_type` property is
        `MSO_SHAPE_TYPE.PLACEHOLDER` instead of `MSO_SHAPE_TYPE.PICTURE`.
        """
        pic = self._new_placeholder_pic(image_file, method) # pass new parameter "method"
        self._replace_placeholder_with(pic)
        return PlaceholderPicture(pic, self._parent)

    def _new_placeholder_pic(self, image_file, method = 'crop'):
        """
        Return a new `p:pic` element depicting the image in *image_file*,
        suitable for use as a placeholder. In particular this means not
        having an `a:xfrm` element, allowing its extents to be inherited from
        its layout placeholder.
        """
        rId, desc, image_size = self._get_or_add_image(image_file)
        shape_id, name = self.shape_id, self.name

        # Cropping the image, as in the original file
        if method == 'crop':
            pic = CT_Picture.new_ph_pic(shape_id, name, desc, rId)
            pic.crop_to_fit(image_size, (self.width, self.height))

        # Adjusting image to placeholder size and replace placeholder.     
        else:
            ph_w, ph_h = self.width, self.height
            aspectPh = ph_w / ph_h

            img_w, img_h = image_size
            aspectImg = img_w / img_h

            if aspectPh > aspectImg:
                w = int(ph_h * aspectImg)
                h = ph_h # keep the height
            else:
                w = ph_w # keep the width
                h = int(ph_w / aspectImg)

            top = self.top + (ph_h - h) / 2
            left = self.left + (ph_w - w) / 2

            pic = CT_Picture.new_pic(shape_id, name, desc, rId, self.left + (ph_w - w) / 2, self.top, w, h)


        return pic

SlidePlaceholder.insert_picture = CustomPicturePlaceholder.insert_picture
SlidePlaceholder._new_placeholder_pic = CustomPicturePlaceholder._new_placeholder_pic
SlidePlaceholder._get_or_add_image = CustomPicturePlaceholder._get_or_add_image

