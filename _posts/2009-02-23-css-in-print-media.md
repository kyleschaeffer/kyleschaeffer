---
id: 178
title: CSS in Print Media
date: 2009-02-23T10:41:55+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=178
permalink: /css-in-print-media
redirect_from:
  - /development/css-in-print-media/
categories:
  - Development
tags:
  - CSS
  - Print Media
  - Text
---
Most of the time, web designers will optimize a site to display on screen media (any type of screen, such as a computer monitor or a mobile device screen). If your site has a lot of information that could potentially be printed out by your visitors, you should consider adding print-specific CSS to your design in order to make your print media visitors happy. Depending on your design itself, the visitor’s printer, and the visitor’s web browser, you can get a number of different results when printing a given page from the internet. Here are a few quick and simple steps you can take to make your site display just as well on paper as it does on the screen.

## Targeting Print Media With CSS

Browsers already have built-in support that allows you to separate your screen media CSS from your print media CSS. By default, when you visit a page, you are going to see the “screen” version of your CSS style sheet, but if you hit the print button in your browser (and if the web designer for that particular site has created print-version CSS styles), you may see an entirely different set of CSS styles that have been optimized for display on paper. Here’s how it’s done:

{% highlight css %}
@media screen {
  body {
    background: #000;
    color: #fff;
  }
}

@media print {
  body {
    background: #fff;
    color: #000;
  }
}

@media screen, print {
  p {
    margin: 0 0 1.5em 0;
  }
}
{% endhighlight %}

In the CSS shown above, we have segregated our CSS into three distinct sections. First, we show the CSS that is to be used _only_ in screen media (`@media screen`). Next, we designate a block of our CSS to be used only in print media (`@media print`). Finally, we have a block of CSS that includes styles to be used in both screen and print media (`@media screen, print`). This allows you to create styles only once if they are the same in both print and screen media.

## Font Sizes

In a [previous post](/css-font-size-em-vs-px-vs-pt-vs-percent), I talked about the different font size units and the web. In this post, I concluded that the percent (`%`) unit is the font size most suitable for internet screen media. Because we are creating a print-version style sheet, however, the percent unit is no longer preferred. When you create a document in a word processor, such as Microsoft Word or iWorks Pages, you choose the font size based off of a unit called “points.” Points are font sizes optimized for printing, so we’ll want to make use of them in our print-media CSS style sheet. Generally, you’ll want to set the base font size on your `body` tag to 11 or 12 points.

{% highlight css %}
@media screen {
  body {
    font-size: 100%;
  }
}

@media print {
  body {
    font-size: 12pt;
  }
}
{% endhighlight %}

## Design Width

Many site designs have a fixed pixel width, which doesn’t translate very well to print media. Some browsers, such as Internet Explorer, will actually shrink your entire design in order to fit everything on the page, but many other browsers will simply clip the contents of your site when printing. Generally, neither of these scenarios are desirable (shrinking your site often makes the font sizes too small). Because you can’t predict the type of printer or the type of media on to which your site is being printed, you should always use a percentage width (preferably 100%) for your site layout. Here’s how:

{% highlight css %}
@media screen {
  .myOuterDiv {
    width: 1000px;
    margin: auto;
  }
}

@media print {
  .myOuterDiv {
    width: 100%;
  }
}
{% endhighlight %}

In this example, visitors to your site would see the `myOuterDiv` box as 1000 pixels wide (aligned in the center of the screen), but when printing the page, that particular `<div/>` tag would expand to the full width of the printed media.

## Other Considerations

In many cases, you may want to hide something entirely on print media. Navigation, for instance, often serves no purpose on printed media. Search boxes, breadcrumbs, and forms are other examples of elements that you may want to hide when printing. To do this, just add `display: none` to an element in the print media CSS:

{% highlight css %}
@media screen {
  .topNavDiv {
    font-weight: bold;
    text-align: center;
  }
}

@media print {
  .topNavDiv {
    display: none;
  }
}
{% endhighlight %}

## Putting it All Together

I’ve combined all of the elements discussed above into a simple HTML example. Click on the link below to visit a sample HTML page that displays entirely differently on the screen and on print media. You don’t have to print out the page! Just go into your browser’s “Print Preview” function to see the difference.

[See the print media style sheet in action](/printmedia)
