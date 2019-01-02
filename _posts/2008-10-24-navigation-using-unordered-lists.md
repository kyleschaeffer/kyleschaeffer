---
id: 74
title: Navigation Using Unordered Lists
date: 2008-10-24T17:21:07+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=74
permalink: /development/navigation-using-unordered-lists/
categories:
  - Development
tags:
  - CSS
  - Navigation
  - XHTML
---
An unordered list (the `<ul/>` tag in HTML) is a great way to easily organize your site navigation with a minimal use of HTML, but how is it done? This is a simple tutorial showing you exactly how to create a simple list-based navigation menu in your site.<!--more-->

## Vertical Menus

Vertical menus are the easiest list-based menus to create; basically all you have to do is hide the bullets and padding for your list using CSS. In the example below, we have a very simple two-level vertical navigation menu.

### The HTML:

<pre>&lt;ul class="navigation"&gt;
    &lt;li&gt;&lt;a href="http://www.google.com"&gt;Google&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="http://www.yahoo.com"&gt;Yahoo!&lt;/a&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="http://www.yahoo.com/shopping"&gt;Yahoo! Shopping&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="http://www.yahoo.com/sports"&gt;Yahoo! Sports&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="http://www.yahoo.com/weather"&gt;Yahoo! Weather&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a href="http://www.amazon.com"&gt;Amazon&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="http://www.ebay.com"&gt;eBay&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

### The CSS:

<pre>ul.navigation,
ul.navigation ul {
	margin: 0;
}
ul.navigation li {
	list-style-type: none;
	padding: 0 0 0 20px;
}</pre>

### The Result:

<img class="alignnone size-full wp-image-76" title="Vertical Navigation" src="https://kyleschaeffer.com/wp-content/uploads/2008/10/navigation1.gif" alt="" width="151" height="130" />

## Horizontal Menus

Horizontal menus are slightly more complex than the vertical variety, but they aren&#8217;t so far removed. As you can see in the example below, the HTML remains largely the same; we&#8217;ll modify the CSS to allow the navigation list items to appear in left-to-right orientation.

### The HTML:

<pre>&lt;ul class="navigation"&gt;
    &lt;li&gt;&lt;a href="http://www.google.com"&gt;Google&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="http://www.yahoo.com"&gt;Yahoo!&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="http://www.amazon.com"&gt;Amazon&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="http://www.ebay.com"&gt;eBay&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

### The CSS:

<pre>ul.navigation,
ul.navigation ul {
	margin: 0;
}
ul.navigation li {
	list-style-type: none;
	<strong>float: left;</strong>
}</pre>

### The Result:

<img class="alignnone size-full wp-image-77" title="Horizontal Navigation" src="https://kyleschaeffer.com/wp-content/uploads/2008/10/navigation2.gif" alt="" width="232" height="18" />

The basic structure (as shown in the examples above) can be used for your site menus, but you&#8217;ll undoubtedly want to add some style and color to match the design of your site. Here are a few examples to get you started and to perhaps give you some ideas of your own.

## Vertical Navigation

Click on the image below to see the demo. On the demo page, right-click and view source to see the code.

<a href="https://kyleschaeffer.com/wp-content/uploads/2008/10/verticalmenu.htm" target="_blank"><img class="alignnone size-full wp-image-78" style="border: 0pt none;" title="Vertical Navigation Styled" src="https://kyleschaeffer.com/wp-content/uploads/2008/10/navigation3.gif" alt="" width="171" height="179" /></a>

## Horizontal Navigation

Click on the image below to see the demo. On the demo page, right-click and view source to see the code.

<a href="https://kyleschaeffer.com/wp-content/uploads/2008/10/horizontalmenu.htm" target="_blank"><img class="alignnone size-full wp-image-79" style="border: 0pt none;" title="Horizontal Navigation Styled" src="https://kyleschaeffer.com/wp-content/uploads/2008/10/navigation4.gif" alt="" width="333" height="65" /></a>

As you can see, we&#8217;re using CSS to add rollover effects and sub-menu background colors. You can add images and other navigation elements to take your design even further.