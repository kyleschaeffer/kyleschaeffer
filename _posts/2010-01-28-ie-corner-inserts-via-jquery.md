---
id: 422
title: IE Corner Inserts via jQuery
date: 2010-01-28T17:51:43+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=422
permalink: /ie-corner-inserts-via-jquery
redirect_from:
  - /development/ie-corner-inserts-via-jquery
categories:
  - Development
tags:
  - Corners
  - CSS
  - JavaScript
  - jQuery
---
I recently had a client whose design demanded rounded corners in a lot of different areas of their site. As I looked through the design documentation, the variety and color of these rounded widgets really started to add up. I quickly decided that [pure CSS corners](/rounded-corners-in-mozilla-and-safari) were the best choice for their design. Most users can utilize `border-radius` to apply the rounded effect without any overhead (the browser does the work), and the remaining users can be handled by a quick and easy bit of jQuery.

## For the (better) browsers&hellip;

It’s easy to add corners to your design in most browsers. In a previous post, I talked about the different ways to apply CSS corners within your design. Here’s what I used for this particular client.

<div id="the-css">
  {% highlight css %}
  .corners {
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
  }
  {% endhighlight %}
</div>

This made it extremely easy to add corners to the elements in my design. In most cases, I could simply add `<div class="myDivClass <strong>corners</strong>"/>`, and the CSS does the rest. If I don’t want a rounded edge on a particular corner, I can just add `noTR`, `noBL`, etc. to my class list. Easy.

## For the other (not-so-better) browser&hellip;

**Disclaimer:** this really doesn’t do anything entirely too amazing. It’s not auto-magically generating corner images, and it’s not inserting a ton of HTML to simulate corner images (I just hate when scripts do that). This is a script I have been using for a while to add corners for IE users; basically, it builds a custom image path for each style of widget in your design marked with the `corners` CSS class. For each corners widget that my script finds, it will trace up through your HTML until it finds a parent element with a `background-color`. It then creates four `<div/>` tags inside your widget and positions them at the outer corners of the widget. The background-image for these `<div/>` tags is set to something like **corners-12-ffffff.png** or **corners-12-ffaa10-border** (if your widget has a border-width associated with it). The `12` is the radius of your corner, and `ffffff` is the background color that appears behind your widget. You’ll have to create the images yourself (and put them in the right place), but my script will handle inserting the HTML and CSS in the right place. If you create the images [a little like this](/reusable-transparent-css-rounded-corners), then you’ll find that your IE corners will be in place in no time at all.

It’s certainly not ground-breaking stuff, but it makes it very easy to reduce the overhead in your design for most users. In addition, the script is fairly small, and you’ll find it’s really not much overhead for IE users as well. Here’s how to add it to your site:

* You’ll need [jQuery 1.3.2](http://jquery.com/) or later linked to your page
* Add the [CSS (above)](#the-css) to your style sheet. This takes care of everyone except for IE.
* Create a new JavaScript file with the following contents:

{% highlight js %}
/*******************************************

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

    // apply corner <div/> tags to elements
    if(cornerColor != null){
      // find border offsets
      var offsetTop = parseInt($(this).css('border-top-width')) || 0;
      var offsetRight = parseInt($(this).css('border-right-width')) || 0;
      var offsetBottom = parseInt($(this).css('border-bottom-width')) || 0;
      var offsetLeft = parseInt($(this).css('border-left-width')) || 0;

      // add "-border" to any image path (for border-only corners)
      var borderImageText = '';
      if(offsetTop > 0 && offsetRight > 0 && offsetBottom > 0 && offsetLeft > 0){
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
        var cornerDiv = $('<div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') top left no-repeat;"/>');
        $(cornerDiv).css('top',(offsetTop * -1) + 'px');
        $(cornerDiv).css('left',(offsetLeft * -1) + 'px');
        $(this).append(cornerDiv);
      }
      if(!$(this).hasClass('noTR')){
        var cornerDiv = $('<div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') top right no-repeat;"/>');
        $(cornerDiv).css('top',(offsetTop * -1) + 'px');
        $(cornerDiv).css('right',(offsetRight * -1) + 'px');
        $(this).append(cornerDiv);
      }
      if(!$(this).hasClass('noBL')){
        var cornerDiv = $('<div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') bottom left no-repeat;"/>');
        $(cornerDiv).css('bottom',(offsetBottom * -1) + 'px');
        $(cornerDiv).css('left',(offsetLeft * -1) + 'px');
        $(this).append(cornerDiv);
      }
      if(!$(this).hasClass('noBR')){
        var cornerDiv = $('<div style="position: absolute; height: ' + cornerRadius + 'px; width: ' + cornerRadius + 'px; background: url(' + cornerImagePathPrefix + cornerImage + ') bottom right no-repeat;"/>');
        $(cornerDiv).css('bottom',(offsetBottom * -1) + 'px');
        $(cornerDiv).css('right',(offsetRight * -1) + 'px');
        $(this).append(cornerDiv);
      }
    }
  });
});

String.prototype.endsWith = function(str){
  return(this.match(str+"$")==str);
}
{% endhighlight %}

* Take a look at the configuration variables near the top of the script and update if needed
* Link to your new JS file, but make sure only IE users are loading the file:

{% highlight html %}
<!--[if lte IE 8]>
  <script type="text/javascript" src="/path/to/IE-Corner-Inserts.js"></script>
<![endif]-->
{% endhighlight %}

* Create your corner images and place them in the correct path on your web server. I recently made available [a corner images Photoshop template](/reusable-transparent-css-rounded-corners) if you need help getting started.

That’s it! If all goes well, you should hopefully see image-based rounded corners in Internet Explorer, as well as the more simplistic CSS-powered corners in all other browsers.
