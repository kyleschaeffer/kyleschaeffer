---
id: 358
title: Image Buttons and Accessibility
date: 2009-11-19T17:29:32+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=358
permalink: /user-experience/image-buttons-and-accessibility/
categories:
  - User Experience
tags:
  - CSS
  - Design
  - Images
  - Text
  - XHTML
---
Image buttons are a fairly common occurrence in web media. As with everything else in web design, you have a dizzying arsenal of methods from which you can choose to create this type of design element, and choosing the right method can greatly aid in your design&#8217;s accessibility, performance, and SEO-friendliness.<!--more-->

## Concerning Accessibility

Accessibility is chiefly important for a web designer (or at least, it should be). When you create your HTML, keep things as simple as possible. Assume that every single user who visits your site will (1) not have CSS support, (2) will disable all images on your page, and (3) will not have JavaScript enabled. If you design your HTML in this fashion, you&#8217;ll find that creating accessible content is much easier to do. Once you have an accessible document that works on all systems, you can use the fantastic features of CSS and client-side scripting to really bring your site to life. These &#8220;nice to have&#8221; features (style, scripting, etc.) are not essential to the structure of your document or the content that&#8217;s contained within. When it comes down to it, users are after your content, so that&#8217;s priority number one.

## A Simple Example

With that in mind, let&#8217;s say we wanted to create an image that links to another page (this is so very simple, but it serves as a great example of this technique). Because we&#8217;re assuming that users have disabled all images, we certainly don&#8217;t want to use the `<img/>` tag for our link, because those users without image support simply won&#8217;t see it. For that reason, our link will look like any other link on the site.

<pre>&lt;a class="learnGuitar" href="http://www.mahalo.com/how-to-play-guitar-for-newbies"&gt;Learn Guitar&lt;/a&gt;</pre>

I know&#8230;this is really simple, but stay with me; I promise we&#8217;re going somewhere with this. Our very simple HTML has passed our criteria: users with CSS disabled will see the link, as will users without images or script. It&#8217;s very simply an accessible link on our page, read as easily by normal users as it is by search engines or even people using screen readers. Next, for users who can utilize our &#8220;nice to have&#8221; features, we&#8217;ll add a bit of CSS to make our image appear.

<pre>.learnGuitar {
	display: block;
	width: 200px;
	height: 50px;
	background: url('/path/to/learn-guitar.png');
	text-indent: -9999em;
}</pre>

As you can see, we&#8217;re using the `text-indent` CSS property to bump our text out of the way, and in it&#8217;s place, we&#8217;re using `background` to set an image for our link. All you have to do for your own image is adjust the width, height, and background URL to match. What you get when you&#8217;re all done is this:

[Learn Guitar](http://www.mahalo.com/how-to-play-guitar-for-newbies){.learnGuitar}

## Adding a Hover Image

Easy and accessible CSS image replacement! It looks great, but let&#8217;s take it one more level to really make sure users know that our button DESERVES to be clicked. Let&#8217;s add a hover style. I&#8217;m going to use an image &#8220;sprite&#8221; for the hover image, which means that both our static and hover states are contained within the same image. Here&#8217;s my \*single\* image that&#8217;s used for this type of style:

<img src="https://kyleschaeffer.com/wp-content/uploads/2009/11/learn-guitar-hover.png" alt="Learn Guitar Image Sprite" title="Image sprite - note that both button states are contained within the same image!" width="200" height="100" />

We&#8217;ll adjust our CSS to account for our new hover image. Note that the `height` and `width` attributes will not change! The hover-state image will be &#8220;clipped,&#8221; so that it&#8217;s only visible when users move their mouse cursor over our image button.

<pre>.learnGuitar {
	display: block;
	width: 200px;
	height: 50px;
	background: url('/path/to/learn-guitar.png') top;
	text-indent: -9999em;
}
.learnGuitar:hover {
	background-position: 0 -50px;
}</pre>

Now, when users move their mouse cursor over our image button, the CSS will &#8220;slide&#8221; the background image so that the hover state is displayed instead of the static state.

[Learn Guitar](http://www.mahalo.com/how-to-play-guitar-for-newbies){.learnGuitarHover}

Crafting your image buttons in this fashion can really save on performance and download times. Perhaps more importantly, your site will be much more &#8220;friendly&#8221; to visually impaired users using screen readers, and you&#8217;ll find that search engines will have an easier time understanding what your links and other content are all about.

Let me know if you have any questions or comments!