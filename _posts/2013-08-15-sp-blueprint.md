---
id: 1355
title: SP Blueprint
date: 2013-08-15T11:38:12+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=1355
permalink: /sharepoint/sp-blueprint/
categories:
  - SharePoint
tags:
  - Mobile
  - Responsive Design
  - SharePoint
---
In my previous post, [Minifying SharePoint 2013](https://kyleschaeffer.com/sharepoint/minifying-sharepoint-2013/ "Minifying SharePoint 2013"), I talked about the idea of minifying SharePoint&#8217;s CSS files in order to achieve better performance and better style cascading in CSS. Truly, this was the direct result of my work on a starter master page template I had been working on for SharePoint 2013, which is now [available on CodePlex](https://spblueprint.codeplex.com/).<!--more-->

__

_SP Blueprint_ is a responsive starter master page template for SharePoint 2013. Simply deploy the SP Blueprint design package and you will have a mobile-first responsive design that adapts to desktops, tablets, smart phones, televisions, and more. It isn&#8217;t a silver bullet for your mobile-friendly SharePoint site, but it can certainly help you optimize your content for today&#8217;s diverse and sometimes overwhelming plethora of screen sizes and characteristics. This is what it looks like in a few common viewport sizes:

**SP Blueprint (desktop size):
  
[<img class="alignnone  wp-image-1391" alt="sp-blueprint-desktop" src="https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-desktop.png" srcset="https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-desktop.png 1024w, https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-desktop-300x225.png 300w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-desktop.png)
  
** 

**SP Blueprint (smart phone portrait size):
  
[<img class="alignnone  wp-image-1390" alt="sp-blueprint-smartphone" src="https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-smartphone.png" srcset="https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-smartphone.png 320w, https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-smartphone-200x300.png 200w" sizes="(max-width: 320px) 100vw, 320px" />](https://kyleschaeffer.com/wp-content/uploads/2013/08/sp-blueprint-smartphone.png)
  
** 

As you can see, the template is designed to adapt to the screen size automatically.  Using this in conjunction with SharePoint publishing features like page layouts and web parts can really open the door for creating great SharePoint mobile experiences.

### Pattern Library Widgets

The template also includes design pattern widgets for more complex interface customization like tabs and slideshows. Simply drop a &#8220;tabify&#8221; web part into any web part zone, and it will transform that zone into tabs:

_[<img class="alignnone size-full wp-image-1410" alt="spblueprint-tabs" src="https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs.png" width="591" height="314" srcset="https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs.png 591w, https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs-300x159.png 300w" sizes="(max-width: 591px) 100vw, 591px" />](https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs.png)_

The tabs are responsive as well. If the viewport is too small for horizontal orientation, the tabs will automatically collapse into an accordion:

_[<img class="alignnone size-full wp-image-1412" alt="spblueprint-tabs-accordion" src="https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs-accordion.png" width="394" height="408" srcset="https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs-accordion.png 394w, https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs-accordion-290x300.png 290w" sizes="(max-width: 394px) 100vw, 394px" />](https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-tabs-accordion.png)_

The template also includes a script, styles, and instructions to configure a slideshow web part using a picture library to store slide data. The basic slideshow looks like this:

[<img class="alignnone size-full wp-image-1411" alt="spblueprint-slideshow" src="https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-slideshow.png" width="705" height="263" srcset="https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-slideshow.png 705w, https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-slideshow-300x112.png 300w" sizes="(max-width: 705px) 100vw, 705px" />](https://kyleschaeffer.com/wp-content/uploads/2013/08/spblueprint-slideshow.png)

The text on top of the slide image is list data stored along side the picture, so it&#8217;s easily maintained. The slideshow, too, is responsive. The images are completely flexible and will stretch or shrink to fit any width.  The slideshow includes options for different transition effects (pan and fade), or customizing the timing on the transitions.

### Get SP Blueprint

While the template is fairly bland, it provides a great starting point for building your responsive design in SharePoint 2013. Download the SP Blueprint design package and deploy it to your SharePoint 2013 environment in just a few minutes. To follow, contribute to, or download SP Blueprint, [visit the project page on CodePlex](https://spblueprint.codeplex.com/).

&nbsp;