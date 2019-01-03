---
id: 121
title: 'Best Practices:  Images on the Web'
date: 2008-12-05T12:09:48+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=121
permalink: /best-practices-images-on-the-web
redirect_from:
  - /development/best-practices-images-on-the-web
categories:
  - Development
  - User Experience
tags:
  - Images
---
Web design is about much more than HTML and CSS. In many cases, the quality of a website lies just as much in its code and functionality as it does in the quality and optimization of its images and other graphical information. The amount of choices in image format, quality, and optimization is dazzling to say the least. What format should you use? Is there a end-all format for the web that trumps all other formats?

## Connections, Not Size

As internet connections increase in bandwidth and online content becomes increasingly available, image size is becoming less important. It’s still very important to optimize your images in order to minimize the download times for your pages, as it always will be, but there is no denying that image size is becoming less of a factor. One important element of internet connectivity to understand is the battle between image size and total number of images. On many high-speed internet connections, it’s actually faster to download one large image than it is to download many smaller images. The time it takes to make a server request factors in to every file the client must download when viewing a web page, so _combining multiple smaller images into one larger file_ can greatly increase site performance. Dave Shea has written a great blog post about this technique, known as HTML Sprites, which [can be found here](http://www.alistapart.com/articles/sprites/).

## Diversity

So, which image format is best? The answer lies in diversity. Each web-friendly image format has its own unique set of advantages and disadvantages that make it suitable in certain situations. While it would be nice to create all your images in the same format, pragmatism requires that you deviate from this formula in certain situations.

## The Amazing PNG

In almost every case, 24-bit PNG images are superior to all other formats. The unique and most important benefit of PNG images is alpha transparency. In a nutshell, this allows you to create semi-transparent images that will display on top of any background color or image in a web page. The images I use in the header section of my site’s theme, for instance, are transparent PNG images. If you click on the clock at the top of this page, you’ll notice the background color of the page changes, but the images do not.

### Advantages

* **Alpha Transparency**: Semi-transparent images that do not have to be updated, even when your site design changes.
* **File Size**: Small images with few colors are stored in extremely small file sizes.
* **Quality**: Images are indexed with 24-bit color, saving only the color information that you need for that particular image.

### Disadvantages

* **Compatability**: Older internet browsers (such as Internet Explorer 6) do not support alpha transparency. This problem can be fixed with [a simple javascript function](http://homepage.ntlworld.com/bobosola/), but CSS background images require a bit of a more complex solution in order to remedy.
* **File Size**: Large images with many colors (i.e. photos) can be very large in size.

## JPEG for Photos

JPEG images are the defacto standard for photos in many applications, including the world wide web. JPEG files are unsurpassed when it comes to files that contain many colors (sometimes millions of colors) and files that are very large in canvas size.

### Advantages

* **File Size**: When working with large files that contain many colors, the JPEG is the only choice.
* **Quality Optimization**: JPEG files can be optimized in quality to even further reduce file size.

### Disadvantages

* **No Transparency**: JPEG images do not support transparency.
* **File Overhead**: Every image file has a certain amount of “overhead,” meaning that even when you save a 1&times;1 pixel image, certain file attributes are still saved to that file. JPEG images have the largest overhead, somewhere around 300 bytes, which means that they aren’t well-suited for smaller images that do not have many colors.

## The Tiny GIF

GIF files are probably used more than any other format on the web (most likely due to their file size). The file overhead on a GIF file is under 50 bytes, meaning it’s well suited for small images that do not utilize a lot of colors.

### Advantages

* **File Size**: GIF files are great for images with a small canvas and very few colors because of an extremely small file size and similarly small download time.
* **Transparency**: GIF files support transparency, allowing you to layer images on other page elements. The transparency is not alpha-based, meaning you can’t have semi-transparent pixels, so transparent elements must have hard edges in order to display correctly on top of other elements.
* **Animation**: GIF files support animation, although file size quickly becomes a factor when using many different frames.

### Disadvantages

* **Limited Colors**: A standard GIF file cannot contain more than 256 colors, meaning they aren’t well suited for photos or smooth gradients, which contain more color data.

## Conclusion

As you can see, there are a lot of choices when it comes to images on the web, and there is no end-all image format that should _always_ be used. The truth of the matter is that your website visitors don’t care what format your images are in, they only care that they are downloaded in a timely fashion. In that spirit, images should be optimized for both speed and usability, regardless of the format.
