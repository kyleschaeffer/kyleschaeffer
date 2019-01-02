---
id: 358
title: Image Buttons and Accessibility
date: 2009-11-19T17:29:32+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=358
permalink: /image-buttons-and-accessibility
categories:
  - User Experience
tags:
  - CSS
  - Design
  - Images
  - Text
  - XHTML
---
Image buttons are a fairly common occurrence in web media. As with everything else in web design, you have a dizzying arsenal of methods from which you can choose to create this type of design element, and choosing the right method can greatly aid in your design’s accessibility, performance, and SEO-friendliness.

## Concerning Accessibility

Accessibility is chiefly important for a web designer (or at least, it should be). When you create your HTML, keep things as simple as possible. Assume that every single user who visits your site will (1) not have CSS support, (2) will disable all images on your page, and (3) will not have JavaScript enabled. If you design your HTML in this fashion, you’ll find that creating accessible content is much easier to do. Once you have an accessible document that works on all systems, you can use the fantastic features of CSS and client-side scripting to really bring your site to life. These “nice to have” features (style, scripting, etc.) are not essential to the structure of your document or the content that’s contained within. When it comes down to it, users are after your content, so that’s priority number one.

## A Simple Example

With that in mind, let’s say we wanted to create an image that links to another page (this is so very simple, but it serves as a great example of this technique). Because we’re assuming that users have disabled all images, we certainly don’t want to use the `<img/>` tag for our link, because those users without image support simply won’t see it. For that reason, our link will look like any other link on the site.

{% highlight html %}
<a class="learnGuitar" href="http://www.mahalo.com/how-to-play-guitar-for-newbies">Learn Guitar</a>
{% endhighlight %}

I know&hellip;this is really simple, but stay with me; I promise we’re going somewhere with this. Our very simple HTML has passed our criteria: users with CSS disabled will see the link, as will users without images or script. It’s very simply an accessible link on our page, read as easily by normal users as it is by search engines or even people using screen readers. Next, for users who can utilize our “nice to have” features, we’ll add a bit of CSS to make our image appear.

{% highlight css %}
.learnGuitar {
  display: block;
  width: 200px;
  height: 50px;
  background: url('/path/to/learn-guitar.png');
  text-indent: -9999em;
}
{% endhighlight %}

As you can see, we’re using the `text-indent` CSS property to bump our text out of the way, and in it’s place, we’re using `background` to set an image for our link. All you have to do for your own image is adjust the width, height, and background URL to match. What you get when you’re all done is this:

<a class="learnGuitar" href="http://www.mahalo.com/how-to-play-guitar-for-newbies">Learn Guitar</a>

<style type="text/css">
.learnGuitar{display: block;width: 200px;height: 50px;background: url('/assets/img/learn-guitar.png');text-indent: -9999em;}.learnGuitar:hover{border-style: none;background-color: transparent;}
</style>

## Adding a Hover Image

Easy and accessible CSS image replacement! It looks great, but let’s take it one more level to really make sure users know that our button DESERVES to be clicked. Let’s add a hover style. I’m going to use an image “sprite” for the hover image, which means that both our static and hover states are contained within the same image. Here’s my \*single\* image that’s used for this type of style:

![Learn Guitar Image Sprite](/assets/img/learn-guitar-hover.png)

We’ll adjust our CSS to account for our new hover image. Note that the `height` and `width` attributes will not change! The hover-state image will be “clipped,” so that it’s only visible when users move their mouse cursor over our image button.

{% highlight css %}
.learnGuitar {
  display: block;
  width: 200px;
  height: 50px;
  background: url('/path/to/learn-guitar.png') top;
  text-indent: -9999em;
}

.learnGuitar:hover {
  background-position: 0 -50px;
}
{% endhighlight %}

Now, when users move their mouse cursor over our image button, the CSS will “slide” the background image so that the hover state is displayed instead of the static state.

<a class="learnGuitarHover" href="http://www.mahalo.com/how-to-play-guitar-for-newbies">Learn Guitar</a>

<style type="text/css">
.learnGuitarHover{display: block;width: 200px;height: 50px;background: url('/assets/img/learn-guitar-hover.png') top;text-indent: -9999em;}.learnGuitarHover:hover{background-position: 0 -50px;border-style: none;background-color:transparent;}
</style>

Crafting your image buttons in this fashion can really save on performance and download times. Perhaps more importantly, your site will be much more “friendly” to visually impaired users using screen readers, and you’ll find that search engines will have an easier time understanding what your links and other content are all about.

Let me know if you have any questions or comments!
