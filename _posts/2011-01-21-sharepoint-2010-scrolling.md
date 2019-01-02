---
id: 717
title: SharePoint 2010 Scrolling
date: 2011-01-21T11:52:57+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=717
permalink: /sharepoint-2010-scrolling
categories:
  - SharePoint
---
If I have one gripe about SharePoint 2010, it’s scrolling. It’s something I’ve bumped into in every 2010 project I’ve worked on thus far (which has been a lot). First, I’ll explain the problem, and we’ll subsequently look at some potential solutions (which have their drawbacks) for this highly visible and hotly debated element of the SharePoint interface.

First of all, I’d like to say that as a designer, there are a few things that you simply don’t touch. The interface of the browser window is really quite simple: an address bar, navigation buttons (back and forward), refresh, stop, and a big area where users can read, click, and scroll. This is the very essence of the web, and it’s something that, as a designer, you simply don’t undermine. _Ever_.

As I’m browsing a website, I expect these fundamental elements of the browser to function at all times. It drives me crazy if suddenly I decide to use the “Back” button and get an error message, as if I have done something “wrong” by using these common features of my browser window. Assume your users will utilize these features, and never, ever undermine the functionality of these exceedingly important user interactions. It’s up to you to handle the interface and the functionality of your website, not your users.

## The Problem

And thus, we reach my gripes about the SharePoint interface and issues I have had with scrolling. As an internet user, I expect to have the ability to scroll. That sounds so simple, so easy, but for some reason, the SharePoint 2010 interface undermines this scrolling behavior. The `v4.master` master page file includes a line of code that looks a little like this:

{% highlight html %}
<body scroll="no">
{% endhighlight %}

So as a user, when I first visit a page that is presented in the SharePoint 2010 interface, scrolling is disabled. As the content is loading, I am unable to view anything below the fold, and must wait for a JavaScript function to execute and allow me to view overflow content. Let’s just hope that there are no JavaScript errors that would disable scrolling completely!

Furthermore, this breaks the functionality of any anchors on your page. For instance, if you click on a link that includes `#comments` on the end of the URL, users will _not_ be able to see the comments section of the page that subsequently loads. Instead, pages are always displayed starting at the top of the page. This is definitely not a practice in progressive enhancement.

## The Reason

The purpose of disabling scrolling is entirely due to the new SharePoint 2010 “ribbon” control. This is a very handy element of the SharePoint interface that stays _fixed_ to the browser window, even as you scroll down the page. Microsoft’s approach to implementing this ribbon is to separate every SharePoint page into divisions that are subsequently sized to fit the browser window using JavaScript. Every time you load a page, resize your window, or interact with content, the `FixRibbonAndWorkspaceDimensions()` function will run to ensure that the ribbon and content divisions are appropriately docked within the browser window.

I can definitely understand the reason for wanting a fixed ribbon, but what I don’t understand is the manner in which it was implemented. Personally, I would have implemented this almost entirely using CSS (`position: fixed`), rather than relying on JavaScript and undermining the default behavior of the browser window.

**Update (1/27/2011):** I was able to figure out how to properly override SharePoint’s default behavior in order to create a CSS/JavaScript hybrid approach that is much more accessible. Read on for instructions on implementing this new work-around!

## The Solution

What’s done is done, and now that I’m done griping, let’s get constructive and look at some potential resolutions for this issue. Implementing this fix requires adding both CSS and JavaScript to your master page:

* Remove `scroll="no"` from the `<body>` tag (this fixes scrolling on older browsers like IE6).
* Inside a `<script>` block or in an attached JavaScript file, add the following script:

{% highlight js %}
function FixRibbonAndWorkspaceDimensions(){
  ULSxSy:;
  g_frl = true;
  var elmRibbon = GetCachedElement("s4-ribbonrow");
  var elmWorkspace = GetCachedElement("s4-workspace");
  var elmTitleArea = GetCachedElement("s4-titlerow");
  var elmBodyTable = GetCachedElement("s4-bodyContainer");
  if(!elmRibbon || !elmWorkspace || !elmBodyTable){
    return;
  }
  if (!g_setWidthInited){
    var setWidth = true;
    if (elmWorkspace.className.indexOf("s4-nosetwidth") > -1)
      setWidth = false;
    g_setWidth = setWidth;
    g_setWidthInited = true;
  }
  else{
    var setWidth = g_setWidth;
  }
  var baseRibbonHeight = RibbonIsMinimized() ? 44 : 135;
  var ribbonHeight = baseRibbonHeight + g_wpadderHeight;
  if(GetCurrentEltStyle(elmRibbon, "visibility") == "hidden"){
    ribbonHeight = 0;
  }

  // Override default resizing behavior
  // -- adds padding to the top of the "s4-workspace" <div> if the ribbon exists and has content
  // -- allows the ribbon to be positioned using CSS instead of JavaScript (more accessible)
  // -- checks to see if the page is inside a "no-ribbon" dialog
  if(elmRibbon.children.length > 0 && document.getElementsByTagName("html")[0].className.indexOf('ms-dialog-nr') == -1){
    elmWorkspace.style.paddingTop = ribbonHeight + 'px';
  }
}
{% endhighlight %}

* In a `<style>` block or in an attached CSS style sheet, add the following CSS rules to override the default overflow styles:

{% highlight css %}
body.v4master {
  overflow: visible;
  height: inherit;
  width: inherit;
}

body #s4-workspace {
  overflow: visible !important;
}

body #s4-ribbonrow {
  position: fixed;
  z-index: 1000;
}

#s4-ribbonrow .ms-MenuUIPopupBody,
#s4-ribbonrow .ms-popoutMenu,
.ms-cui-menu[id ^= "Ribbon."] {
  position: fixed !important;
}

.ms-dlgOverlay {
  width: 100% !important;
}
{% endhighlight %}

This solution does two things: first, it will override the default appearance and behavior of the SharePoint interface, enabling scrollbars on your pages by default (much rejoicing is in order). Second, it keeps the ribbon _fixed_ to your browser window using CSS (instead of JavaScript). Instead of resizing the `s4-ribbonrow` and `s4-workspace` divisions, I’m simply adding some padding to the top of the `s4-workspace` element. Every time the ribbon “resize” script runs, it bumps your content down a little to make sure you can still see your site header.

This should work on any master page that uses the “v4” SharePoint interface. I’ll be using this method on every SharePoint site I create from this point forward, so definitely keep this in mind in your own SharePoint design ventures! Best of luck, and please let me know if this helps you in any way.

**Update 1/28/2011:** Slightly modified script and CSS to resolve a couple minor bugs that I found in SharePoint dialogs.
