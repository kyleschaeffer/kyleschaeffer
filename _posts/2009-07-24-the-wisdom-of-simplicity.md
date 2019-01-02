---
id: 237
title: The Wisdom of Simplicity
date: 2009-07-24T13:38:11+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=237
permalink: /user-experience/the-wisdom-of-simplicity/
categories:
  - User Experience
tags:
  - CSS
  - Design
  - XHTML
---
Web designers would be wise to approach every situation with one thing in mind: simplicity. Simplicity is the cornerstone of designing a well-structured and highly flexible HTML/CSS design. I&#8217;ve found that all too often, many designers approach a website with one thing in mind: the &#8220;look&#8221; of the fully rendered site. They approach each page or screen with a definitive pixel-perfect image in their heads, and they execute the design process to produce each pixel as it was originally intended.<!--more-->

The truth of the matter is that a web document is a compilation of various highly organized computer languages (XML, HTML, CSS, JavaScript, etc.). The web designer has the difficult task of considering the &#8220;art&#8221; of the design as well as the technical architecture of it. A truly skilled web designer has the ability to think both creatively and logically. A designer bridges the gap between design and development, which is sometimes a very difficult task; a task made far more feasible by the utilization of simplicity.

## A Simple Example

I use the word &#8220;simplicity&#8221; in a very generic sense; it&#8217;s a very broad term, so I&#8217;d like to use a few examples to show how simplicity can be a great aid in web design. Take, for instance, the anchor tag (`<a/>`). The anchor tag is at the very foundation of HTML; it is the most basic implementation of the concept of the internet: the hyperlink. It&#8217;s so simple in and of itself, how could designers possibly do anything at all to mar it&#8217;s glorious simplicity?

**Here are two anchor tags. They appear quite identical, but the behavior of each is remarkably different. Which one is better?**

<span class="complexLink"><a href="javascript:alert('The art of art, the glory of expression and the sunshine of the light of letters, is simplicity.n~ Walt Whitman');">A Simple Link</a></span> [A Simple Link](javascript:alert('Design is not just what it looks like and feels like. Design is how it works.n~ Steve Jobs');){.simpleLink}

<div style="clear: both;">
  &nbsp;
</div>

Did you notice a difference? At first glance, they are identical, but the interactive behavior of each link is quite different. Move your mouse cursor over each link, and notice the difference in clickable area on each link. On the first anchor tag, only the text &#8220;A Simple Link&#8221; is hyperlinked. The padded area around the link is not. The second link, however, is fully hyperlinked (the entire padded area is clickable).

## Visual Interactivity

This is a demonstration of the fundamental elements of simplicity in design. A user who visits your site doesn&#8217;t care how you&#8217;ve formatted your CSS and HTML, or how you&#8217;ve scripted page behavior to allow for access to your data. The user only cares about navigating to the content they&#8217;re interested in. When a user sees a visual element on the page (such as the links above), they want to move their mouse pointer to that element and click. If a particular page element has some level of interactive behavior associated with it, the _entire element_ should react to that behavior.

## Logical Simplicity

Treating page elements in this fashion can also help eliminate extraneous HTML and CSS. Again, using the example above, let&#8217;s look at the source code of these two different links and examine their differences.

### Scenario 1 (Complex)

<pre>&lt;style type="text/css"&gt;
.complexLink {
	display: block;
	width: 15em;
	padding: 1em 0;
	margin: 0 2em 2em 0;
	float: left;
	background: #f0f0f0;
	border: 1px #e0e0e0 solid;
	-moz-border-radius: 1em;
	-webkit-border-radius: 1em;
	text-align: center;
}
.complexLink:hover {
	border-color: #c0c0c0;
}
.complexLink a {
	color: #555;
}
.complexLink a:hover {
	color: #d56e1c;
	text-decoration: none;
}
&lt;/style&gt;
&lt;span class="complexLink"&gt;&lt;a href="..."&gt;A Simple Link&lt;/a&gt;&lt;/span&gt;</pre>

### Scenario 2 (Simple)

<pre>&lt;style type="text/css"&gt;
.simpleLink {
	display: block;
	width: 15em;
	padding: 1em 0;
	margin: 0 2em 2em 0;
	float: left;
	background: #f0f0f0;
	color: #555;
	border: 1px #e0e0e0 solid;
	-moz-border-radius: 1em;
	-webkit-border-radius: 1em;
	text-align: center;
}
.simpleLink:hover {
	color: #d56e1c;
	border-color: #c0c0c0;
	text-decoration: none;
}
&lt;/style&gt;
&lt;a class="simpleLink" href="..."&gt;A Simple Link&lt;/a&gt;</pre>

The code above relates to the first and second links, respectively. At first, the two links seemed almost identical, but now the differences are really starting to show. Not only is our more complex example (the first link) more difficult for the user to interpret, but it&#8217;s also more work for you as the designer because you have more elements, layers, and styles to deal with.

## Now Repeat

It might be somewhat trivial to look at an anchor tag in such depth, but this type of design methodology extends into every aspect of web development. From HTML to CSS, from JavaScript to server-side programming, simplicity is an essential element of a good design. You&#8217;ll find that adopting this mentality can increase your productivity, lower the costs of site re-design, and expedite efforts to troubleshoot and resolve rendering problems in your web application. Less really _is_ more.

Take a moment, take your time, and think about each and every element that you design as an independent function of logic and art. Think about the best way to approach every control, and apply uncompromising simplicity wherever possible.