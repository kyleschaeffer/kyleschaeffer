---
id: 201
title: CSS Absolute Positioning
date: 2009-04-06T10:56:36+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=201
permalink: /css-absolute-positioning
redirect_from:
  - /development/css-absolute-positioning
categories:
  - Development
tags:
  - CSS
  - Positioning
  - XHTML
---
Absolute positioning is a very powerful CSS technique when used properly. Traditionally, when you use `<div/>` tags and the like, everything in your page design is generally stacked from top to bottom. Using absolute positioning gives you the freedom to place elements of your page just about anywhere you’d like. Here are some fundamentals of absolute positioning that can make your design appear more fluid, elegant, and easier to manage.

## What is absolute positioning?

Absolute positioning can be frustrating if you don’t have a sound grasp on what it is and how it works. Let’s start at the very beginning.

Every block element on a page (`<div/>`, `<table/>`, `<p/>`, etc.) has a CSS property called `position`. By default, the `position` for these block elements is set to `static`. Static block elements appear in a stack on the page, from top to bottom. Here’s an example:

{% highlight html %}
<div>Div One</div>
<div>Div Two</div>
<div>Div Three</div>
{% endhighlight %}

<div style="background: #f0f0f0; padding: 1em; border: 1px #e0e0e0 solid; margin: 0 0 1.5em 0;">
  <div style="background: #8abb66; padding: 0.5em;">Div One</div>
  <div style="background: #d88541; padding: 0.5em;">Div Two</div>
  <div style="background: #419dd8; padding: 0.5em;">Div Three</div>
</div>

If you change an element’s position to `absolute`, however, its placement on the page is very different. The placement for an absolutely positioned element is relative to the parent of that element. What does that mean? Let’s see what happens if we take the same code from our last example and make our block elements position: absolute.

{% highlight html %}
<div style="position: absolute;">Div One</div>
<div style="position: absolute;">Div Two</div>
<div style="position: absolute;">Div Three</div>
{% endhighlight %}

<div style="position: relative; background: #f0f0f0; height: 2em; padding: 1em; border: 1px #e0e0e0 solid; margin: 0 0 1.5em 0;">
  <div style="position: absolute; background: #8abb66; padding: 0.5em;">Div One</div>
  <div style="position: absolute; background: #d88541; padding: 0.5em;">Div Two</div>
  <div style="position: absolute; background: #419dd8; padding: 0.5em;">Div Three</div>
</div>

The outcome is very different! You can’t tell, but the first and second `<div/>` tags are actually hiding behind the third `<div/>` tag. Whenever you set an element’s position to absolute, it is automatically shown at the top-left corner of the parent element <small>(* see notes about relativity below)</small>. This isn’t very useful now, but we can apply this technique to create a variety of simple and effective layout styles.

## Positioning

Our last example wasn’t very practical simply because all of our `<div/>` tags were stacked on top of each other. Using the `top`, `bottom`, `left`, and `right` properties, we can position absolute elements anywhere we’d like. Let’s try it out.

{% highlight html %}
<div style="position: absolute; top: 10px; left: 10px;">Div One</div>
<div style="position: absolute; top: 10px; right: 10px;">Div Two</div>
<div style="position: absolute; bottom: 1em; left: 50%;">Div Three</div>
{% endhighlight %}

<div style="position: relative; background: #f0f0f0; height: 4em; padding: 1em; border: 1px #e0e0e0 solid; margin: 0 0 1.5em 0;">
  <div style="position: absolute; top: 10px; left: 10px; background: #8abb66; padding: 0.5em;">Div One</div>
  <div style="position: absolute; top: 10px; right: 10px; background: #d88541; padding: 0.5em;">Div Two</div>
  <div style="position: absolute; bottom: 1em; left: 50%; background: #419dd8; padding: 0.5em;">Div Three</div>
</div>

Now that’s a little more practical. The first and second `<div/>` tags are positioned using pixels from the top, left, and right sides of their parent element (the gray box). I positioned the third `<div/>` tag a little differently just to demonstrate how you can use all the different measurement units that CSS has to offer in order to position absolute elements (px, pt, em, and %).

## Relativity

**The most difficult and confusing aspect of absolutely positioned elements is figuring out relative positioning.** Unless you specify otherwise, your absolute `<div/>` tags will be positioned relative to your entire HTML document (i.e. the very top left corner of your browser window). Basically, when your browser is trying to render an absolutely positioned element, it traces upward through your HTML hierarchy until it finds a parent element that uses relative positioning (`position: relative`). If you haven’t set any elements to `position: relative`, then the `<body>` tag is used by default. Always set the outer element to `position: relative`:

{% highlight html %}
<div style="position: relative;">
  <div style="position: absolute; top: 1em; right: 1em;">
    Contact Us / Register / Log Out
  </div>
</div>
{% endhighlight %}

<div style="position: relative; background: #f0f0f0; height: 4em; padding: 1em; border: 1px #e0e0e0 solid; margin: 0 0 1.5em 0;">
  <div style="position: absolute; top: 1em; right: 1em; background: #419dd8; padding: 0.5em;">Contact Us / Register / Log Out</div>
</div>

## Relative Parent Height

If you place an absolutely positioned element on a page, it does not have a layout height associated with it. That means that even though your absolute DIV is 150 pixels tall, it will _not_ bump the rest of your page down by 150 pixels. Here’s an example:

{% highlight html %}
<div style="position: relative;">
  <div style="position: absolute; height: 2em;">Div One</div>
</div>
{% endhighlight %}

<div style="position: relative; background: #f0f0f0; padding: 1em; border: 1px #e0e0e0 solid; margin: 0 0 2.5em 0;">
  <div style="position: absolute; background: #8abb66; padding: 0.5em; height: 2em;">Div One</div>
</div>

The easiest way to avoid this is to set the _parent element’s_ height to a fixed value. This should clear up any layout height issues because you’ll always have space for your absolute elements. For instance:

{% highlight html %}
<div style="position: relative; height: 3em;">
  <div style="position: absolute; height: 2em;">Div One</div>
</div>
{% endhighlight %}

<div style="position: relative; background: #f0f0f0; padding: 1em; height: 3em; border: 1px #e0e0e0 solid; margin: 0 0 2.5em 0;">
  <div style="position: absolute; background: #8abb66; padding: 0.5em; height: 2em;">Div One</div>
</div>

## Absolute vs. Floating

Absolute positioning shouldn’t be used in every case. Often times, I will use it to build out a header on a page where there is a logo, search, some utility links, etc. These types of controls are pretty consistent and don’t change in size, and absolute positioning comes in quite handy. There are, however, some disadvantages to using absolute positioning. Most importantly, absolutely positioned elements don’t appears as part of the normal layout flow in your document. They have a fixed position, which often confines them to a fixed width or height. If you can’t predict the size or consistency of the content in a particular page element (for instance, a _page content_ area where article text appears), then absolute positioning is probably not the best option.

As an alternative, you can use CSS floating to create very fluid and flexible layouts without absolute positioning. See my previous article about [tableless column design](/all-about-tableless-column-design) to learn more about floating elements in your design.
