---
id: 565
title: 'Input Prompt Text:  A Better Way'
date: 2010-06-03T21:43:37+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=565
permalink: /input-prompt-text
redirect_from:
  - /development/input-prompt-text/
categories:
  - Development
  - User Experience
tags:
  - CSS
  - JavaScript
  - jQuery
  - Text
  - XHTML
---
It’s a very cool feature to have a form field that has prompt text such as _Enter search keywords&hellip;_ right inside the input box, itself. It looks good, it makes sense to users, and it can save a lot of real estate in your design by negating the need for field labels. The problem, however, is that there are about one hundred ways to implement prompt text, and ninety-nine of them are wrong. Let’s look at this thing from all angles and come up with a fantastically simple and reliable way to make this work.

## What is input prompt text?

You’re probably familiar with the concept, even if you don’t know what I’m talking about. Here’s an example:

<input type="text" style="color: #999; font-style: italic; width: 250px;" value="Enter search keywords..." /><input type="button" value="Search" />

The _prompt text_ appears inside the form field as soon as the page loads, so users immediately know what it’s for. Simple, right?

## Why it Doesn’t Work

There are a number of problems you’ll encounter while implementing prompt text into your forms. Watch out for these caveats when you’re developing your own solution.

  1. **Input validation** &mdash; if someone submits the form without first removing the prompt text, your prompt text is submitted in lieu of real data. Fixing this is a pain. Avoiding this entirely is recommended.
  2. **Prompt style** &mdash; it’s best to style the prompt text so that it doesn’t look like real form data. Creativity is a virtue, but generally web users will expect light (gray) text and italics. This can be problematic because you’ll have to swap the input style back and forth using JavaScript.
  3. **Losing focus** &mdash; when users focus on a form field, don’t type anything, and then click somewhere else, you should always add the prompt text _back into the input box_. Otherwise, users could miss the intent of the form field entirely. Again, you’ll have to do this with JavaScript, which can be a little tricky.
  4. **Progressive enhancement** &mdash; always make sure that users without JavaScript can still understand and interact with your form fields. This is progressive enhancement at its finest.

## The Solution

Almost everything related to the problems listed above originates from one basic fact: you’re trying to create both a **field** and a **label** using a single HTML element. When you take a step back and think about that, it really doesn’t make much sense, does it? The solution lies in separating the form field from the label entirely. We’ll use a little bit of jQuery to create an elegant solution that dynamically creates these labels and places them over our form fields. Because we’re creating two separate elements, we can use CSS to style them independently. Perfect!

**The jQuery:**

{% highlight js %}
$(document).ready(function(){
  $('input[type=text][title],input[type=password][title],textarea[title]').each(function(i){
    $(this).addClass('input-prompt-' + i);
    var promptSpan = $('<span class="input-prompt"/>');
    $(promptSpan).attr('id', 'input-prompt-' + i);
    $(promptSpan).append($(this).attr('title'));
    $(promptSpan).click(function(){
      $(this).hide();
      $('.' + $(this).attr('id')).focus();
    });
    if($(this).val() != ''){
      $(promptSpan).hide();
    }
    $(this).before(promptSpan);
    $(this).focus(function(){
      $('#input-prompt-' + i).hide();
    });
    $(this).blur(function(){
      if($(this).val() == ''){
        $('#input-prompt-' + i).show();
      }
    });
  });
});
{% endhighlight %}

**The CSS:**

{% highlight css %}
.input-prompt {
  position: absolute;
  font-style: italic;
  color: #aaa;
  margin: 0.2em 0 0 0.5em;
}
{% endhighlight %}

**The HTML:**

{% highlight html %}
<input type="text" title="Enter search keywords..." />
{% endhighlight %}

Basically, this script finds any `<input>` tags that have a `title` attribute (i.e. `<input title="Enter search keywords..." />`). For each of these form fields, it takes the `title` and creates a little `<span>` tag next to it. The CSS positions the `<span>` tag so that it appears _on top_ of the form field. The rest is just a little bit of scripting that makes sure to hide and show the labels based on what the user is doing with the input box.

## The Result

Here is a demo of the code shown above:

<input id="demo" type="text" title="Enter search keywords..." size="50" />
<style type="text/css">
.input-prompt { position: absolute; font-style: italic; color: #aaa; margin: 0.5em 0 0 1em; }
</style>
<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js?ver=1.10.2'></script>
<script type="text/javascript">
jQuery(document).ready(function(){
  jQuery('input#demo').each(function(i){
    jQuery(this).addClass('input-prompt-' + i);
    var promptSpan = jQuery('<span class="input-prompt"/>');
    jQuery(promptSpan).attr('id', 'input-prompt-' + i);
    jQuery(promptSpan).append(jQuery(this).attr('title'));
    jQuery(promptSpan).click(function(){
      jQuery(this).hide();
      jQuery('.' + jQuery(this).attr('id')).focus();
    });
    if(jQuery(this).val() != ''){
      jQuery(promptSpan).hide();
    }
    jQuery(this).before(promptSpan);
    jQuery(this).focus(function(){
      jQuery('#input-prompt-' + i).hide();
    });
    jQuery(this).blur(function(){
      if(jQuery(this).val() == ''){
        jQuery('#input-prompt-' + i).show();
      }
    });
  });
});
</script>

Users without JavaScript enabled will see the normal title tool tips when they hover their mouse cursor over the form field. Please note that you’ll probably have to adjust the `margin` a bit in the CSS to make sure the labels fit the size of your input boxes. For more information on jQuery and all the great things it can do, visit [jQuery.com](http://jquery.com/).
