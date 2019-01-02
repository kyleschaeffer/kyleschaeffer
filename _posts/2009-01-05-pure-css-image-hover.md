---
id: 142
title: Pure CSS Image Hover
date: 2009-01-05T10:14:17+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=142
permalink: /pure-css-image-hover
categories:
  - Development
  - User Experience
tags:
  - CSS
  - DHTML
  - Images
  - XHTML
---
Many site designs will feature varying types of image “hover” states, where an image or background image changes when you move your mouse cursor into that area of the page. Traditionally, this change in image is handled via JavaScript. It’s fairly easy to write a small script that swaps out images on mouseover, but there are a number of disadvantages to this approach that have pushed many web developers toward using a CSS-only method of achieving this exact same effect. This tutorial describes exactly how to implement a pure CSS image hover effect.

## The Image

The biggest difference between a traditional JavaScript image hover and a pure CSS image hover is the image, itself. When using CSS to achieve this effect, the static image and the hover image are actually contained within the same image file. Basically, we’re displaying the image and cropping it so that only one image state is displayed at one time. In order to do this, we’ll omit the `<img>` tag and display the image as a the background-image of an `<a/>` (anchor) tag instead.

Let’s look at an image that could be used as a CSS hover image.

![Hover image](/assets/img/buttonleafhover.png)

## Simplistic Markup

As you can see, both static and hover images are contained within the same file. In order to display only half of the image at one time, we’ll apply it as a background color to an HTML block element. Here is the HTML for this example:

{% highlight html %}
<a class="myButtonLink" href="#LinkURL">Leaf</a>
{% endhighlight %}

## The CSS

As you can see, the HTML is extremely simple. We’re doing everything in CSS, so this is where the real magic happens:

{% highlight css %}
.myButtonLink {
  display: block;
  width: 100px;
  height: 100px;
  background: url('/path/to/myImage.png') bottom;
  text-indent: -99999px;
}

.myButtonLink:hover {
  background-position: 0 0;
}
{% endhighlight %}

We’re using the CSS psuedo-element `hover` to apply the mouseover image effect. When your mouse pointer moves over the “myButtonLink” element, our CSS slides the background image (using the `background-position` property) appropriately, giving us our mouseover image. This is simple, fast, and efficient! You’ll use less files and space on your server, clients will have to download less data, and older computers will render your content much faster.

## The Result

Move your mouse over the image to see the hover in action.

<a class="myButtonLink" href="javascript:alert('Accessible design is good design.\n~Steve Ballmer')">Leaf</a>
<style type="text/css">
.myButtonLink {
  display: block;
  width: 100px;
  height: 100px;
  background: url('/assets/img/buttonleafhover.png') bottom;
  text-indent: -99999px;
}

.myButtonLink:hover {
  background-position: 0 0;
}
</style>

And there you have it, a pure CSS approach to image hovers. You can apply this method to links, `<div/>` tags, and just about anything else you can imagine in your site’s design. Happy styling!
