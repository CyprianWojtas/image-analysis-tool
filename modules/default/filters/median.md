---
name: Median Filter
id: defaults.filters.median
group: defaults.filters

inputs:
  image_in:
    type: image
    name: Image
  radius:
    type: number
    name: Filter Radius

outputs:
  image_out:
    type: image
    name: Image

---

!description

Applies median filter

!wiki

The Image Median Filter is a popular non-linear image processing technique used to reduce noise and preserve edges in an image. Unlike linear filters, such as Gaussian or mean filters, the median filter replaces the pixel value at a given location with the median value of the pixel intensities within a specified neighborhood.

## How it Works

The operation of the Image Median Filter involves sliding a window or kernel over the image. For each position of the window, the pixel value at the center of the window is replaced with the median value calculated from the intensities of all pixels within the window. This process effectively removes outliers and reduces the impact of noise without blurring the edges of objects.

## Parameters

- **Image**: The input image to be processed using the Maximum Filter.
- **Filter Radius:** The size of the neighborhood or window used for calculating the median. A larger kernel size can provide more effective noise reduction but may result in some loss of image detail.

## Usage

In image editing software or programming libraries, the Image Median Filter is typically accessible through specific functions or filters. Users can apply the filter with different kernel sizes based on the characteristics of the image and the level of noise present.


## Applications

- **Noise Reduction:** Particularly effective in reducing salt-and-pepper noise and other types of impulsive noise.
- **Edge Preservation:** Unlike linear filters, the median filter preserves edges and fine details in the image.
- **Medical Imaging:** Commonly used in medical image processing to enhance the visibility of structures.

The Image Median Filter is a valuable tool in image processing, providing a robust method for noise reduction while maintaining important image features. It is widely employed in various domains, including medical imaging, computer vision, and digital photography.
