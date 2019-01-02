---
id: 422
title: IE Corner Inserts via jQuery
date: 2010-01-28T17:51:43+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=422
permalink: /development/ie-corner-inserts-via-jquery/
categories:
  - Development
tags:
  - Corners
  - CSS
  - JavaScript
  - jQuery
---
I recently had a client whose design demanded rounded corners in a lot of different areas of their site. As I looked through the design documentation, the variety and color of these rounded widgets really started to add up. I quickly decided that [pure CSS corners](http://www.kyleschaeffer.com/best-practices/rounded-corners-in-mozilla-and-safari/) were the best choice for their design. Most users can utilize `border-radius` to apply the rounded effect without any overhead (the browser does the work), and the remaining users can be handled by a quick and easy bit of jQuery.<!--more-->

## For the (better) browsers&#8230;

It&#8217;s easy to add corners to your design in most browsers. In a previous post, I talked about the different ways to apply CSS corners within your design. Here&#8217;s what I used for this particular client.

<div id="the-css">
  <pre>.corners {
	-moz-border-radius: 12px;
	-webkit-border-radius: 12px;
}
.noTL {
	-moz-border-radius-topleft: 0;
	-webkit-border-top-left-radius: 0;
}
.noTR {
	-moz-border-radius-topright: 0;
	-webkit-border-top-right-radius: 0;
}
.noBL {
	-moz-border-radius-bottomleft: 0;
	-webkit-border-bottom-left-radius: 0;
}
.noBR {
	-moz-border-radius-bottomright: 0;
	-webkit-border-bottom-right-radius: 0;
}</pre>
</div>

This made it extremely easy to add corners to the elements in my design. In most cases, I could simply add `<div class="myDivClass <strong>corners</strong>"/>`, and the CSS does the rest. If I don&#8217;t want a rounded edge on a particular corner, I can just add `noTR`, `noBL`, etc. to my class list. Easy.

## For the other (not-so-better) browser&#8230;

**Disclaimer:** this really doesn&#8217;t do anything entirely too amazing. It&#8217;s not auto-magically generating corner images, and it&#8217;s not inserting a ton of HTML to simulate corner images (I just hate when scripts do that). This is a script I have been using for a while to add corners for IE users; basically, it builds a custom image path for each style of widget in your design marked with the `corners` CSS class. For each corners widget that my script finds, it will trace up through your HTML until it finds a parent element with a `background-color`. It then creates four `<div/>` tags inside your widget and positions them at the outer corners of the widget. The background-image for these `<div/>` tags is set to something like **corners-12-ffffff.png** or **corners-12-ffaa10-border** (if your widget has a border-width associated with it). The `12` is the radius of your corner, and `ffffff` is the background color that appears behind your widget. You&#8217;ll have to create the images yourself (and put them in the right place), but my script will handle inserting the HTML and CSS in the right place. If you create the images [a little like this](http://www.kyleschaeffer.com/best-practices/reusable-transparent-css-rounded-corners/), then you&#8217;ll find that your IE corners will be in place in no time at all.

It&#8217;s certainly not ground-breaking stuff, but it makes it very easy to reduce the overhead in your design for most users. In addition, the script is fairly small, and you&#8217;ll find it&#8217;s really not much overhead for IE users as well. Here&#8217;s how to add it to your site:

  1. You&#8217;ll need [jQuery 1.3.2](http://jquery.com/) or later linked to your page
  2. Add the [CSS (above)](#the-css) to your style sheet. This takes care of everyone except for IE.
  3. Create a new JavaScript file with the following contents: 
    <pre>/*******************************************

	IE Corner Inserts v1.0

	by Kyle Schaeffer
	http://www.kyleschaeffer.com

	* requires jQuery 1.3.2 or later

*******************************************/


// change this path to match the path to your corner image files
var cornerImagePathPrefix = '/designImages/';

// default file extension for corner images is PNG
var cornerImageFileExtension = '.png';

// default corner radius
var cornerRadius = '12';



$(document).ready(function(){
	$('.corners').each(function(i){
		var parentDiv = $(this).parent();
		var cornerColor = null;

		// find parent background color (trace up through DOM)
		while(cornerColor == null && parentDiv != null){
			if($(parentDiv).css('background-color') != 'transparent'){
				cornerColor = $(parentDiv).css('background-color');
				cornerColor = cornerColor.substr(1);
			}
			else if($(parentDiv).hasClass('bodyWrapper')){
				cornerColor = '6f98ae';
			}
			else{
				parentDiv = $(parentDiv).parent().get(0);
			}
		}

		// apply corner &lt;div/&gt; tags to elements
		if(cornerColor != null){
			// find border offsets
			var offsetTop = parseInt($(this).css('border-top-width')) || 0;
			var offsetRight = parseInt($(this).css('border-right-width')) || 0;
			var offsetBottom = parseInt($(this).css('border-bottom-width')) || 0;
			var offsetLeft = parseInt($(this).css('border-left-width')) || 0;

			// add "-border" to any image path (for border-only corners)
			var borderImageText = '';
			if(offsetTop &gt; 0 && offsetRight &gt; 0 && offsetBottom &gt; 0 && offsetLeft &gt; 0){
				borderImageText = '-border';
			}

			// change color values like "#fff" to "#ffffff"
			if(cornerColor.length == 3){
				cornerColor += cornerColor;
			}

			// set position to relative (if not already set)
			if($(this).css('position') != 'absolute' && $(this).css('position') != 'relative'){
				$(this).css('position','relative');
			}

			// corner image filename
			var cornerImage = 'corners-' + cornerRadius + '-' + cornerColor + borderImageText + cornerImageFileExtension;

			// add corners
			if(!$(this).hasClass('noTL')){
				var cornerDiv = $('&lt;div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') top left no-repeat;"/&gt;');
				$(cornerDiv).css('top',(offsetTop * -1) + 'px');
				$(cornerDiv).css('left',(offsetLeft * -1) + 'px');
				$(this).append(cornerDiv);
			}
			if(!$(this).hasClass('noTR')){
				var cornerDiv = $('&lt;div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') top right no-repeat;"/&gt;');
				$(cornerDiv).css('top',(offsetTop * -1) + 'px');
				$(cornerDiv).css('right',(offsetRight * -1) + 'px');
				$(this).append(cornerDiv);
			}
			if(!$(this).hasClass('noBL')){
				var cornerDiv = $('&lt;div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') bottom left no-repeat;"/&gt;');
				$(cornerDiv).css('bottom',(offsetBottom * -1) + 'px');
				$(cornerDiv).css('left',(offsetLeft * -1) + 'px');
				$(this).append(cornerDiv);
			}
			if(!$(this).hasClass('noBR')){
				var cornerDiv = $('&lt;div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') bottom right no-repeat;"/&gt;');
				$(cornerDiv).css('bottom',(offsetBottom * -1) + 'px');
				$(cornerDiv).css('right',(offsetRight * -1) + 'px');
				$(this).append(cornerDiv);
			}
		}
	});
});

String.prototype.endsWith = function(str){
	return(this.match(str+"$")==str);
}</pre>

  4. Take a look at the configuration variables near the top of the script and update if needed
  5. Link to your new JS file, but make sure only IE users are loading the file: 
    <pre>&lt;!--[if lte IE 8]&gt;
	&lt;script type="text/javascript" src="/path/to/IE-Corner-Inserts.js"&gt;&lt;/script&gt;
&lt;![endif]--&gt;</pre>

  6. Create your corner images and place them in the correct path on your web server. I recently made available [a corner images Photoshop template](http://www.kyleschaeffer.com/best-practices/reusable-transparent-css-rounded-corners/) if you need help getting started.

That&#8217;s it! If all goes well, you should hopefully see image-based rounded corners in Internet Explorer, as well as the more simplistic CSS-powered corners in all other browsers.