---
id: 565
title: 'Input Prompt Text:  A Better Way'
date: 2010-06-03T21:43:37+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=565
permalink: /development/input-prompt-text/
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
It&#8217;s a very cool feature to have a form field that has prompt text such as _Enter search keywords&#8230;_ right inside the input box, itself. It looks good, it makes sense to users, and it can save a lot of real estate in your design by negating the need for field labels. The problem, however, is that there are about one hundred ways to implement prompt text, and ninety-nine of them are wrong. Let&#8217;s look at this thing from all angles and come up with a fantastically simple and reliable way to make this work.<!--more-->

## What is input prompt text?

You&#8217;re probably familiar with the concept, even if you don&#8217;t know what I&#8217;m talking about. Here&#8217;s an example:

<input type="text" style="color: #999; font-style: italic; width: 250px;" value="Enter search keywords..." /><input type="button" value="Search" />

The _prompt text_ appears inside the form field as soon as the page loads, so users immediately know what it&#8217;s for. Simple, right?

## Why it Doesn&#8217;t Work

There are a number of problems you&#8217;ll encounter while implementing prompt text into your forms. Watch out for these caveats when you&#8217;re developing your own solution.

  1. **Input validation** &mdash; if someone submits the form without first removing the prompt text, your prompt text is submitted in lieu of real data. Fixing this is a pain. Avoiding this entirely is recommended.
  2. **Prompt style** &mdash; it&#8217;s best to style the prompt text so that it doesn&#8217;t look like real form data. Creativity is a virtue, but generally web users will expect light (gray) text and italics. This can be problematic because you&#8217;ll have to swap the input style back and forth using JavaScript.
  3. **Losing focus** &mdash; when users focus on a form field, don&#8217;t type anything, and then click somewhere else, you should always add the prompt text _back into the input box_. Otherwise, users could miss the intent of the form field entirely. Again, you&#8217;ll have to do this with JavaScript, which can be a little tricky.
  4. **Progressive enhancement** &mdash; always make sure that users without JavaScript can still understand and interact with your form fields. This is progressive enhancement at its finest.

## The Solution

Almost everything related to the problems listed above originates from one basic fact: you&#8217;re trying to create both a **field** and a **label** using a single HTML element. When you take a step back and think about that, it really doesn&#8217;t make much sense, does it? The solution lies in separating the form field from the label entirely. We&#8217;ll use a little bit of jQuery to create an elegant solution that dynamically creates these labels and places them over our form fields. Because we&#8217;re creating two separate elements, we can use CSS to style them independently. Perfect!

**The jQuery:**

<pre>$(document).ready(function(){
  $('input[type=text][title],input[type=password][title],textarea[title]').each(function(i){
    $(this).addClass('input-prompt-' + i);
    var promptSpan = $('&lt;span class="input-prompt"/&gt;');
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
});</pre>

**The CSS:**

<pre>.input-prompt {
  position: absolute;
  font-style: italic;
  color: #aaa;
  margin: 0.2em 0 0 0.5em;
}</pre>

**The HTML:**

<pre>&lt;input type="text" <strong>title="Enter search keywords..."</strong> /&gt;</pre>

Basically, this script finds any `<input>` tags that have a `title` attribute (i.e. `<input title="Enter search keywords..." />`). For each of these form fields, it takes the `title` and creates a little `<span>` tag next to it. The CSS positions the `<span>` tag so that it appears _on top_ of the form field. The rest is just a little bit of scripting that makes sure to hide and show the labels based on what the user is doing with the input box.

## The Result

Here is a demo of the code shown above:



<input id="demo" type="text" title="Enter search keywords..." size="50" style="padding: 0.5em;" />

Users without JavaScript enabled will see the normal title tool tips when they hover their mouse cursor over the form field. Please note that you&#8217;ll probably have to adjust the `margin` a bit in the CSS to make sure the labels fit the size of your input boxes. For more information on jQuery and all the great things it can do, visit [jQuery.com](http://jquery.com/).