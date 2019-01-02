---
id: 933
title: Responsive Design Testing with Screenfly
date: 2011-06-07T12:04:28+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=933
permalink: /mobile/responsive-design-testing-with-screenfly/
categories:
  - Mobile
tags:
  - jQuery
  - Layout
  - Mobile
  - Responsive Design
  - Web Browsers
---
Responsive design is all the rage. [Ethan Marcotte](http://unstoppablerobotninja.com/), just today, released [a new book](http://www.abookapart.com/products/responsive-web-design) on the subject, of which I&#8217;m quite excited. My [last post](https://kyleschaeffer.com/best-practices/responsive-layouts-using-css-media-queries/ "Responsive Layouts Using CSS Media Queries") was all about responsive web design, and after writing the article, I couldn&#8217;t help but ask myself: what now? Designing and implementing experiences for an unknown number of devices can be an intimidating task, especially when you don&#8217;t have the opportunity to test your designs on many (or any) of them. The answer, for me, was to create a new web app that aids in this testing process. It&#8217;s called **Screenfly**, and it&#8217;s the first of many apps that will be available on QuirkTools.com.<!--more-->

[<img class="alignnone size-full wp-image-934" title="Screenfly" src="https://kyleschaeffer.com/wp-content/uploads/2011/06/screenfly-screenshot.jpg" alt="" width="539" height="152" srcset="https://kyleschaeffer.com/wp-content/uploads/2011/06/screenfly-screenshot.jpg 539w, https://kyleschaeffer.com/wp-content/uploads/2011/06/screenfly-screenshot-300x85.jpg 300w" sizes="(max-width: 539px) 100vw, 539px" />](http://quirktools.com/screenfly/)

As you can see, it&#8217;s an incredibly simple application. Simply type in a web address and you&#8217;re off and running. The entire thing, from concept to complete, took less than eight hours of work to complete – don&#8217;t expect all the wiz-bang bells and whistles for that type of investment, but I do have to say that I&#8217;m quite proud of what this little thing can do.

## How it Works

When you type in a web address and hit &#8220;Go,&#8221; Screenfly builds an `<iframe>` and displays it on the screen. The frame contains the web document you specified, and once it has loaded, testing can ensue. While viewing your web document, you will see buttons near the top left corner of the browser window, allowing you to select different devices from which to view your web document. Most of the application is just a few lines of jQuery that affect the frame as it appears in the middle of the page.

## Why it&#8217;s Useful

What&#8217;s really cool about the application is that I use a proxy to request your web document. Basically, I send a request from my server, which allows me to &#8220;pretend&#8221; like I&#8217;m an iPhone, an iPad, or an Android tablet when I make the request. What comes back is the actual content that would display _if_ you were really browsing on that device. This works great on most websites, but you&#8217;ll find that some don&#8217;t play well with the proxy (things like JavaScript, Flash, Silverlight, and server configuration can break the proxy), so I also give you the option of disabling the proxy altogether. Unfortunately, this also disables the ability to &#8220;mimic&#8221; the devices you&#8217;ve selected, but it still gives you the opportunity to see your web layouts in different screen sizes.

## What it&#8217;s Not

Keep in mind that Screenfly does _not_ emulate the behavior or capabilities of the device it&#8217;s trying to mimic. That means that if you are running Screenfly on Internet Explorer 6, you&#8217;re only going to see the web document as if it were requested from the selected device, running on Internet Explorer 6.

Also, it&#8217;s important to note that I make no attempt to maintain a comprehensive list of devices for testing. The list of devices is intended to be representational of the actual devices available on today&#8217;s device market. For instance, I made sure to include both Android and Apple tablets, as well as Android and Apple mobile devices. The list will continue to evolve as the device landscape changes (as it always does), and any suggestions or additions are welcome.

## Try it Out

Without further adieu, try Screenfly for yourself by clicking on the following link. This is a &#8220;beta&#8221; version of the web app, so please let me know if you encounter any errors or issues while testing your own designs.

<http://quirktools.com/screenfly/>