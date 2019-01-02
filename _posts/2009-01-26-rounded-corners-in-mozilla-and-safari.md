---
id: 156
title: Rounded Corners in Mozilla and Safari
date: 2009-01-26T18:35:34+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=156
permalink: /development/rounded-corners-in-mozilla-and-safari/
categories:
  - Development
tags:
  - Corners
  - CSS
---
The W3C&#8217;s CSS3 specification includes an oft-requested CSS attribute called `border-radius`. Using this attribute, you can create rounded-corner boxes that use no images, script, or other fancy DHTML tricks (pure CSS). This will make your site flexible, faster, and more accessible. It&#8217;s not yet supported in Internet Explorer 7/8, but other modern browsers have already introduced support for this fantastic CSS feature.<!--more-->

Both Mozilla Firefox and Apple&#8217;s Safari browsers have made it incredibly easy to eliminate those sharp corners with a single CSS attribute. Here&#8217;s the code:

<pre>.myRoundedBox {
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}</pre>

You&#8217;ll notice that this CSS isn&#8217;t merely clipping the contents of the block element you&#8217;re applying it to. If your `<div/>` has a border associated with it, the border will adhere to the contours of your newly rounded corner. Throw in a slight background color or gradient, and you can create some really stunning effects. Here&#8217;s a quick look at something I was creating, just to play around with this great new feature:

<img title="BORDER-RADIUS In Action" src="https://kyleschaeffer.com/wp-content/uploads/2009/01/radius-example.png" alt="BORDER-RADIUS In Action" width="331" height="225" />

Using border-radius instead of corner images can eliminate a lot of HTML and unneeded CSS, which saves on bandwidth and improves the performance of your site as a whole. Of course, the big monster of a caveat here is that your design won&#8217;t be consistent across browsers. That certainly isn&#8217;t good, but on the other hand, rounded corners don&#8217;t have any effect on the functionality of your site, so it will work just the same on any browser.

For more information about this upcoming CSS3 attribute, [see the official W3C specification here](http://www.w3.org/TR/css3-background/#border-radius). In addition, Mozilla&#8217;s proprietary support for this feature is [documented here](https://developer.mozilla.org/en/CSS/-moz-border-radius).