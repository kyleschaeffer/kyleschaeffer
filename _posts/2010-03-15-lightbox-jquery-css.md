---
id: 488
title: Create a Lightbox with jQuery and CSS
date: 2010-03-15T16:37:05+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=488
permalink: /development/lightbox-jquery-css/
categories:
  - Development
tags:
  - CSS
  - DHTML
  - JavaScript
  - jQuery
---
The &#8220;lightbox&#8221; is a unique and useful design tool when used properly. It allows designers to present information that is totally independent from the site theme, and it is especially useful when displaying information that is loaded via AJAX requests (often negating the need for additional post-backs on your pages). There are countless ways to implement lightbox functionality into your site, and almost every option I&#8217;ve ever seen is weighed down by extraneous functionality or useless transition animations. It&#8217;s quite easy to create your own lightboxes with minimal effort. This tutorial can serve as a quick and easy template to get you started.<!--more-->

## The CSS Style

There are _two_ elements you&#8217;ll have to implement into your design in order to create a lightbox — CSS and Javascript. We&#8217;ll take care of the CSS style first, as it&#8217;s the most simple to implement. On your page or in an attached style sheet, add the following CSS styles:

<pre>#lightbox {
	position: absolute;
	top: 0;
	left: 50%;
	width: 500px;
	margin-left: -250px;
	background: #fff;
	z-index: 1001;
	display: none;
}
#lightbox-shadow {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	filter: alpha(opacity=75);
	-moz-opacity: 0.75;
	-khtml-opacity: 0.75;
	opacity: 0.75;
	z-index: 1000;
	display: none;
}</pre>

**What we just did:** we established two styles. One style is for the lightbox that actually appears on the page (`#lightbox`). The second style is for lightbox background (`#lightbox-shadow`). We have made this background dark and semi-transparent in order to dim the site&#8217;s content as it appears behind the lightbox.

## The jQuery Script

The real work is done via our simple jQuery script. We have two JavaScript functions that will handle displaying and hiding our lightbox. First, make sure you have attached the jQuery library to your page:

<pre>&lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"&gt;&lt;/script&gt;</pre>

Now, in an attached `.js` file, add the following script code.

<pre>/****************************************
	Barebones Lightbox Template
	by Kyle Schaeffer
	kyleschaeffer.com
	* requires jQuery
****************************************/

// display the lightbox
function lightbox(insertContent, ajaxContentUrl){

	// add lightbox/shadow &lt;div/&gt;'s if not previously added
	if($('#lightbox').size() == 0){
		var theLightbox = $('&lt;div id="lightbox"/&gt;');
		var theShadow = $('&lt;div id="lightbox-shadow"/&gt;');
		$(theShadow).click(function(e){
			closeLightbox();
		});
		$('body').append(theShadow);
		$('body').append(theLightbox);
	}

	// remove any previously added content
	$('#lightbox').empty();

	// insert HTML content
	if(insertContent != null){
		$('#lightbox').append(insertContent);
	}

	// insert AJAX content
	if(ajaxContentUrl != null){
		// temporarily add a "Loading..." message in the lightbox
		$('#lightbox').append('&lt;p class="loading"&gt;Loading...&lt;/p&gt;');

		// request AJAX content
		$.ajax({
			type: 'GET',
			url: ajaxContentUrl,
			success:function(data){
				// remove "Loading..." message and append AJAX content
				$('#lightbox').empty();
				$('#lightbox').append(data);
			},
			error:function(){
				alert('AJAX Failure!');
			}
		});
	}

	// move the lightbox to the current window top + 100px
	$('#lightbox').css('top', $(window).scrollTop() + 100 + 'px');

	// display the lightbox
	$('#lightbox').show();
	$('#lightbox-shadow').show();

}

// close the lightbox
function closeLightbox(){

	// hide lightbox and shadow &lt;div/&gt;'s
	$('#lightbox').hide();
	$('#lightbox-shadow').hide();

	// remove contents of lightbox in case a video or other content is actively playing
	$('#lightbox').empty();
}</pre>



## Ready for Lightboxing

Once you have the CSS and script into place, you can call your new `lightbox();` function from anywhere within your design. It&#8217;s as easy as calling the lightbox from an `anchor` tag:

<pre>&lt;a href="javascript:lightbox('Hello!');"&gt;Show me the lightbox&lt;/a&gt;</pre>

Remember, clicking anywhere on the &#8220;shadow&#8221; `<div/>` will hide the lightbox — you could easily add a &#8220;close&#8221; button to your lightbox by connecting it to the `closeLightbox();` JavaScript function.

Similarly, you can insert HTML (or even a jQuery DOM object) into the lightbox. Like so:

<pre>&lt;a href="javascript:lightbox('&lt;p&gt;&lt;strong&gt;Rich&lt;/strong&gt; content works too!&lt;/p&gt;');"&gt;Show me the lightbox&lt;/a&gt;</pre>

Finally, you can even use this simple lightbox function to insert AJAX content. Please keep in mind that my JavaScript function simply inserts the entire result into the `#lightbox` element — if you&#8217;re trying to request a website or HTML page, you&#8217;ll probably have to remove the `<html/>` and `<body/>` tags before inserting content into your lightbox window, else the lightbox would simply disappear. An AJAX lightbox request looks a little like this:

<pre>&lt;a href="javascript:lightbox(null, 'https://foo.com/readme.txt');"&gt;Show me the lightbox&lt;/a&gt;</pre>

## The Demo

  * **Try it out:** <a>Show me the lightbox</a>
  * **Let&#8217;s load some AJAX content:** <a>Load the CSS file for this tutorial into a lightbox</a>

If you&#8217;re on a fast connection, you may not notice, but the AJAX link actually reads &#8220;Loading&#8230;&#8221; in the lightbox a split-second before the content actually appears. This can be useful to give users feedback while the AJAX request is processing. Please note that I&#8217;ve added a bit of styling to my demo (namely padding on the lightbox to make it appear less cluttered).

## Make it Shine

You&#8217;ll probably want to modify the CSS and other elements of this lightbox in order to suit your site&#8217;s design and style. If you&#8217;re working with a lot of AJAX content, you may want to even replace the temporary `loading` element with an animated spinner image, or something of the like.

To help you get started, you can download the CSS and JavaScript referenced in this tutorial here:

  * [lightbox.css](https://kyleschaeffer.com/wp-content/uploads/2015/09/lightbox.css)
  * [lightbox.js](https://kyleschaeffer.com/wp-content/uploads/2015/09/lightbox.js)

Good luck, and happy styling!