---
name: Brightness and Contrast
id: defaults.transforms.brightness_contrast
group: defaults.transforms

inputs:
  image_in:
    type: image
    name: Image
    description: Image
  brightness:
    type: number
    name: Brightness
    optional: true
  contrast:
    type: number
    name: Contrast
    optional: true

outputs:
  image_out:
    type: image
    name: Image

---

!wiki

The Brightness and Contrast Adjustment filter is a fundamental image processing technique used to enhance or modify the overall luminance and visual impact of an image. By adjusting the brightness and contrast, users can control the intensity of light and the range of tones in an image, thereby improving its clarity, visibility, and overall aesthetic appeal.

## How it Works

### Brightness Adjustment

Brightness refers to the overall lightness or darkness of an image. Increasing brightness involves adding a constant value to the intensity of all pixels, making the image appear lighter. Conversely, decreasing brightness involves subtracting a constant value, resulting in a darker appearance.

### Contrast Adjustment

Contrast, on the other hand, is the difference in intensity between the light and dark areas of an image. Increasing contrast enhances the distinction between these areas, making the image more vivid and dynamic. Decreasing contrast reduces the difference, resulting in a more subdued and evenly toned appearance.

## Parameters

- **Brightness Level:** A numerical value that determines the amount of brightness adjustment. Positive values increase brightness, while negative values decrease it.

- **Contrast Level:** A numerical value that determines the amount of contrast adjustment. Higher values increase contrast, while lower values decrease it.

## Usage

In image editing software or programming libraries, the Brightness and Contrast Adjustment filter is typically accessible through dedicated functions or sliders. Users can experiment with different parameter values to achieve the desired visual effect.

## Applications

- **Photography Enhancement:** Correcting underexposed or overexposed images.
- **Visualization:** Improving the visibility of details in medical or scientific images.
- **Artistic Effects:** Creating stylized images with varying degrees of brightness and contrast.

The Brightness and Contrast Adjustment filter is a versatile tool that allows users to fine-tune the visual characteristics of an image, making it an essential component of image processing workflows.
