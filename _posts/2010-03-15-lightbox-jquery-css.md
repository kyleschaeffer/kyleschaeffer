---
id: 488
title: Create a Lightbox with jQuery and CSS
date: 2010-03-15T16:37:05+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=488
permalink: /lightbox-jquery-css
redirect_from:
  - /development/lightbox-jquery-css/
categories:
  - Development
tags:
  - CSS
  - DHTML
  - JavaScript
  - jQuery
excerpt_separator: <!--more-->
---
The “lightbox” is a unique and useful design tool when used properly. It allows designers to present information that is totally independent from the site theme, and it is especially useful when displaying information that is loaded via AJAX requests (often negating the need for additional post-backs on your pages). There are countless ways to implement lightbox functionality into your site, and almost every option I’ve ever seen is weighed down by extraneous functionality or useless transition animations. It’s quite easy to create your own lightboxes with minimal effort. This tutorial can serve as a quick and easy template to get you started.<!--more-->

## The CSS Style

There are _two_ elements you’ll have to implement into your design in order to create a lightbox — CSS and Javascript. We’ll take care of the CSS style first, as it’s the most simple to implement. On your page or in an attached style sheet, add the following CSS styles:

{% highlight css %}
#lightbox {
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
  position: fixed;
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
}
{% endhighlight %}

**What we just did:** we established two styles. One style is for the lightbox that actually appears on the page (`#lightbox`). The second style is for lightbox background (`#lightbox-shadow`). We have made this background dark and semi-transparent in order to dim the site’s content as it appears behind the lightbox.

## The jQuery Script

The real work is done via our simple jQuery script. We have two JavaScript functions that will handle displaying and hiding our lightbox. First, make sure you have attached the jQuery library to your page:

{% highlight html %}
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
{% endhighlight %}

Now, in an attached `.js` file, add the following script code.

{% highlight js %}
/****************************************
  Barebones Lightbox Template
  by Kyle Schaeffer
  kyleschaeffer.com
  * requires jQuery
****************************************/

// display the lightbox
function lightbox(insertContent, ajaxContentUrl){

  // add lightbox/shadow <div/>'s if not previously added
  if($('#lightbox').size() == 0){
    var theLightbox = $('<div id="lightbox"/>');
    var theShadow = $('<div id="lightbox-shadow"/>');
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
    $('#lightbox').append('<p class="loading">Loading...</p>');

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

  // hide lightbox and shadow <div/>'s
  $('#lightbox').hide();
  $('#lightbox-shadow').hide();

  // remove contents of lightbox in case a video or other content is actively playing
  $('#lightbox').empty();
}
{% endhighlight %}

## Ready for Lightboxing

Once you have the CSS and script into place, you can call your new `lightbox();` function from anywhere within your design. It’s as easy as calling the lightbox from an `anchor` tag:

{% highlight html %}
<a href="javascript:lightbox('Hello!');">Show me the lightbox</a>
{% endhighlight %}

Remember, clicking anywhere on the “shadow” `<div/>` will hide the lightbox — you could easily add a “close” button to your lightbox by connecting it to the `closeLightbox();` JavaScript function.

Similarly, you can insert HTML (or even a jQuery DOM object) into the lightbox. Like so:

{% highlight html %}
<a href="javascript:lightbox('<p><strong>Rich</strong> content works too!</p>');">Show me the lightbox</a>
{% endhighlight %}

Finally, you can even use this simple lightbox function to insert AJAX content. Please keep in mind that my JavaScript function simply inserts the entire result into the `#lightbox` element — if you’re trying to request a website or HTML page, you’ll probably have to remove the `<html/>` and `<body/>` tags before inserting content into your lightbox window, else the lightbox would simply disappear. An AJAX lightbox request looks a little like this:

{% highlight html %}
<a href="javascript:lightbox(null, 'https://foo.com/readme.txt');">Show me the lightbox</a>
{% endhighlight %}

## The Demo

  * **Try it out:** <a href="javascript:lightbox('Hello, lightbox.');">Show me the lightbox</a>
  * **Let’s load some AJAX content:** <a href="javascript:lightbox(null, '/assets/css/lightbox.css');">Load the CSS file for this tutorial into a lightbox</a>

If you’re on a fast connection, you may not notice, but the AJAX link actually reads “Loading&hellip;” in the lightbox a split-second before the content actually appears. This can be useful to give users feedback while the AJAX request is processing. Please note that I’ve added a bit of styling to my demo (namely padding on the lightbox to make it appear less cluttered).

## Make it Shine

You’ll probably want to modify the CSS and other elements of this lightbox in order to suit your site’s design and style. If you’re working with a lot of AJAX content, you may want to even replace the temporary `loading` element with an animated spinner image, or something of the like.

To help you get started, you can download the CSS and JavaScript referenced in this tutorial here:

  * [lightbox.css](/assets/css/lightbox.css)
  * [lightbox.js](/assets/js/lightbox.js)

Good luck, and happy styling!

<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js?ver=1.10.2'></script>
<script src="/assets/js/lightbox.js" type="text/javascript"></script>
<link rel="stylesheet" href="/assets/css/lightbox.css" />
