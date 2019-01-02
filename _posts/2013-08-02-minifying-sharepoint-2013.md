---
id: 1336
title: Minifying SharePoint 2013
date: 2013-08-02T11:01:56+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=1336
permalink: /sharepoint/minifying-sharepoint-2013/
categories:
  - SharePoint
tags:
  - CSS
  - JavaScript
  - SharePoint
---
The SharePoint interface is huge. Really quite huge. When I first laid eyes upon Microsoft&#8217;s latest rendition in the SharePoint legacy, I immediately turned my attention to the man behind the curtain. I delved into the interface and started looking at the goings-on behind the scenes. My first stop? `corev15.css`. This is a file that I have known well in previous versions of the product. To my initial delight, the interface in SharePoint 2013 seemed so simple, so elegant and clean. Surely, the CSS files that support this interface would reflect that, right?<!--more-->

To my surprise, I found quite the opposite when opening this file: 13,662 lines of code, 2,730 style rules, 6,967 selectors, and 6,766 style declarations. Those are very big numbers for an interface that is so simple and flat. To Microsoft&#8217;s credit, part of this is due to the fact that SharePoint does so much. The 2013 edition of the product has almost every feature you used in SharePoint 2010, and piles on a plethora of new features as well. This makes for a busy and diverse interface. We have everything from blogs to wikis, surveys to calendars, timelines, news feeds, teams, communities, projects, and more. After familiarizing myself with all of it&#8217;s features, I realize that while some areas of the interface have gotten a much-needed update, others linger with an outdated and untouched version of its SharePoint 2010 counterpart. The HTML is the same. Yes, that means `<tables>` galore! The CSS classes are the same. That is understandable, I can accept that, I have dealt with this interface before, and I will deal with it again. The one monumental drawback of this design, however, is that we now have a segregated interface. We have, on one hand, the redesigned 2013 version of list views (yay, it looks great!). On the other hand, we have the 2010 version of list views that randomly appear in various areas of the interface: surveys and the master page gallery, for example. This means that your `corev15.css` file contains not only the new SharePoint 2013 interface, but also the lion&#8217;s share of the 2010 interface as well. No wonder it&#8217;s so damned big.

I digress. That&#8217;s quite enough griping on my part. It&#8217;s time to end my sob story and to do something about it. As with the last version of this product, my first task is to break it down, analyze it, and build it back up from the ground up. I&#8217;m talking about minifying the interface so that I can abandon SharePoint&#8217;s theme framework, their composed looks, their device channels, and all the features that SharePoint gives us to customize the interface. Don&#8217;t get me wrong: I think the ability to import an HTML file and convert it to a master page is a great idea. It certainly makes for a great demo. This opens the door for a lot of people who otherwise may have been intimidated by the daunting task of branding a SharePoint site. The problem is that these features only get you 75% of the way there. Importing an HTML file and converting it to a master page really only gives you a wrapper around your SharePoint site. You get a nice branded header and footer, but everything in between still looks like SharePoint. If you&#8217;re really trying to brand and customize your portal, this isn&#8217;t acceptable. You need to go further. Unfortunately, SharePoint abandons you woefully short of your goal, and you are armed only with a new feature called the &#8220;snippet editor.&#8221; If you really want to tackle the interface, if you really want to take complete control over the design, then you&#8217;ll have to use the true technology of the web to do it. I&#8217;m talking HTML, JavaScript, and most importantly CSS.

### The challenge

The SharePoint interface challenges even the most avid front-end developer. You don&#8217;t know CSS until you&#8217;ve known SharePoint. It can be an arduous task, but if you can get the hang of using your browser&#8217;s developer tools to identify SharePoint CSS classes and styles, you can eventually figure out how to change just about anything in the interface. Once you&#8217;ve done this, it feels great. Don&#8217;t like that link color? Bam! Changed. Thanks, CSS. Easy, right?

The problem is that every time you do this, you&#8217;re adding page weight. Take navigation links, for example. Microsoft has a default style for these links. These styles are downloaded to the web browser and applied to those links. Subsequently, your own custom CSS file is downloaded to the web browser, and you override these styles. One at a time, every little customization that you make is actually made twice, once by SharePoint&#8217;s CSS files, and then again in your own CSS files. This is a huge performance concern, especially considering the already bloated size of our friend, `corev15.css`. If you do a lot of mobile or responsive work (as most of us do, now a&#8217; days), this is a huge concern.

### Back in my day&hellip;

In the past, I&#8217;ve addressed this concern with custom development. In SharePoint 2010, our team created a custom web control that replaces Microsoft&#8217;s CSS files with our own custom version of these files. In our &#8220;minified&#8221; version of these CSS files, we removed a lot of instances where Microsoft specified colors, fonts, font sizes, etc. We wanted to re-introduce the idea of &#8220;cascading&#8221; into cascading style sheets, so that when we set a default link color, it cascaded throughout the entire interface. This made it a lot easier to brand our SharePoint 2010 sites, because we only had to set up a few default styles to apply fonts and style universally.

### Enter the cloud

This is no longer an option with the rapid expansion of SharePoint in the cloud. You simply cannot create web controls that duplicate this functionality in Office 365/SharePoint Online. Instead, all of this logic needs to happen client-side, meaning within your own web browser, after the document has been delivered to your web browser. This is a tricky proposition, because the last thing I want is to make users download _two_ copies of `corev15.css`.

### Minifying SharePoint 2013

First, a word of warning: this is not intended to be a tutorial or walk-through. This is merely a demonstration of a technique. Stop now if you&#8217;re looking to copy and paste something into your website and immediately have a minified SharePoint interface. I would highly recommend a good knowledge of JavaScript and CSS before attempting this yourself.

The first step is to stop Microsoft&#8217;s default CSS files from being loaded. This is simple enough: in your custom master page, simply place a comment around the `<SharePoint:CssLink>` control. This control handles all the CSS file associations for your SharePoint site. It&#8217;s contextual, meaning that if you&#8217;re looking at a survey, this control will link to a file called `survey.css`. If you&#8217;re looking at search results, it will link to a file called `searchv15.css`. Placing HTML comments around this control prevents any of these files from being downloaded:

<pre>&lt;!--[minisp] &lt;SharePoint:CssLink runat="server" Version="15" /&gt; [/minisp]--&gt;</pre>

If you saved your master page, you might be thinking to yourself, &#8220;Holy crap, Kyle. What the hell? My site looks terrible!&#8221; Alright, settle down. We&#8217;re working on it. We&#8217;re going to load these files using a proxy script called `minisp.js`. In my example, I&#8217;m going to place this file in the master page gallery, located at `/_catalogs/masterpage/starter/minisp.js`. The file looks like this:

<pre>/* MiniSP v1.0 by Kyle Schaeffer */
function minisp(path){
  <strong>var files = [
    'corev15.css',
    'controls15.css',
    'portal.css'
  ];</strong>
  var head = document.getElementsByTagName('head')[0].innerHTML;
  if(head.indexOf('[minisp]') &gt; -1 && head.indexOf('[/minisp]') &gt; -1){
    var links = head.substring(head.indexOf('[minisp]')+8, head.indexOf('[/minisp]')).split('n');
    for(var i = 0; i &lt; links.length; i++){
      var match = false;
      for(var j = 0; j &lt; files.length; j++){
        if(links[i].toLowerCase().indexOf('/' + files[j]) &gt; -1){
          document.write('&lt;link rel="stylesheet" type="text/css" href="' + path + files[j] + '" /&gt;');
          match = true;
          break;
        }
      }
      if(!match){
        document.write(links[i]);
      }
    }
  }
}</pre>

Once you have created this JavaScript file, you can attach and run it _immediately after_ the `<SharePoint:CssLink>` control. Our master page code now looks like this:

<pre>&lt;!--[minisp] &lt;SharePoint:CssLink runat="server" Version="15" /&gt; [/minisp]--&gt;
&lt;script src="/_catalogs/masterpage/starter/minisp.js"&gt;&lt;/script&gt;
&lt;script&gt;minisp('<strong>/_catalogs/masterpage/starter/core-styles/</strong>');&lt;/script&gt;</pre>

The purpose of this script is to replace SharePoint&#8217;s CSS files without having to edit them directly. This allows you to create minified and modified copies of files like `corev15.css`. It&#8217;s important to run the script immediately after our HTML comment, because we don&#8217;t want users to ever see unstyled SharePoint content. Once this is in place, the script will go through every line that the `<SharePoint:CssLink>` generates. For each line, it tries to replace the default SharePoint CSS file with a custom one we&#8217;ve created. If it can&#8217;t find a valid replacement, it will output the CSS link without any changes.

In our example, we&#8217;ve specified three CSS files available for replacement: `corev15.css`, `controls15.css`, and `portal.css`. Normally, SharePoint would output a path like the following, but you can see how our script will modify that behavior.

<pre>&lt;strike>&lt;link rel="stylesheet" type="text/css" href="/_layouts/15/1033/styles/Themable/corev15.css" /&gt;&lt;/strike>
<strong>&lt;link rel="stylesheet" type="text/css" href="/_catalogs/masterpage/starter/core-styles/corev15.css" /&gt;</strong></pre>

After copying and minifying the `corev15.css` file, we now have our own copy of this file where we are free to make changes without interfering with the default SharePoint interface. Remember how large and unruly this file was before? Here are the new stats.

  * <strike>13,662</strike> **2,624** lines of code
  * <strike>2,730</strike> **2,622** style rules
  * <strike>6,967</strike> **3,850** selectors
  * <strike>6,766</strike> **6,374** style declarations
  * <strike>297</strike> **219** KB file size</ul> 
    In reality, you would probably want to change much more than just a few CSS files. In our own starter template, we have 16 minified versions of SharePoint&#8217;s CSS files. The size of these files have been greatly reduced, and we have removed almost every instance of color, font, and font size style declarations, making it much easier to apply universal style to an entire SharePoint 2013 site collection. <strike>I&#8217;d love to provide these files so you can download them, but it&#8217;s not an option at the moment. I will certainly post them here if they do become available.</strike> I hope you find this technique viable and useful, please feel free to let me know how it works.
    
    **Update Aug 13, 2013:** This technique and all 16 minified CSS files are now publicly available in [SP Blueprint](https://spblueprint.codeplex.com/), a new starter master page hosted on CodePlex.