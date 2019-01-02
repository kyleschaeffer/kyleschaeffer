---
id: 1067
title: v5, the Responsive HTML5 Master Page for SharePoint 2010
date: 2011-10-03T16:25:49+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=1067
permalink: /v5-responsive-html5-master-page
categories:
  - Mobile
  - SharePoint
---
“v5.master” is a simple HTML5 master page designed for SharePoint 2010. It makes good use of the amazing new features of both HTML5 and CSS3, including [CSS3 media queries](/responsive-layouts-using-css-media-queries). The master page is extremely simplistic in nature, and is truly meant to serve as a framework for building your own SharePoint 2010 customizations.

## SharePoint Gets Responsive

SharePoint has a knack for being rigid and difficult to customize. I’ve been working with responsive layouts for a while now, but the nature of SharePoint has thus far prevented me from making something that is as flexible as, say, this WordPress blog you’re reading right now. It’s easy-peasy to do this in WordPress, but SharePoint simply does _too much_. When you create a layout in SharePoint, you’re creating a layout that encompasses much more than just pages: you’ll have to contend with pages, web parts, lists, libraries, blogs, wikis, search, meeting workspaces, team sites, calendars, and the list goes on. With so much content to contend with, creating something that can contract to any width is a tall order to say the least.

To me, at least, the answer was simple: ignorance. I’m ignoring every part of SharePoint that I don’t care about. 90% of the sites that I create in SharePoint are publishing sites: public-facing with a focus on pages, navigation, and web parts. Now, that’s a list I can handle. The v5 master page uses a fluid layout that drops to a single column when the display size shrinks below 800 pixels in width.** **

## Features

* New HTML5 document type declaration
* Revised `<head>` content to adhere to new HTML5 standards and best practices
* New HTML5 semantic layout (`<header>`, `<footer>`, `<section>`, etc.)
* Uses [html5shim](http://code.google.com/p/html5shim/) for backwards-compatibility
* Responsive CSS3 media queries

## Download v5.master

* **[v5-masterpage.zip](/assets/downloads/v5-masterpage.zip)** (16kb)

The v5 master page is provided completely free, released under the [Creative Commons Attribution](http://creativecommons.org/licenses/by/3.0/) license 3.0.

**Update Oct 26, 2011:** Dércia Silva has been kind enough to create a deployable solution package, as well as a Visual Studio template, if you’d rather automate the deployment of this master page and related files. See Dércia’s post [here](http://www.broculos.net/en/article/sharepoint-2010-branding-responsive-html5-masterpage-sharepoint-2010).

## Installation

  1. Copy the **v5.master** file into the `/_catalogs/masterpage/` folder of your SharePoint 2010 site collection.
  2. Copy the entire **v5** folder into the `/Style Library/` document library, located at the root of your site collection.
  3. **Check in, publish, and approve** all copied files.
  4. Change your **site and system master page** to use the new file you created.
  5. Optionally change the **site logo** setting to use the new logo image located at `/Style Library/v5/i/v5.png`.

## Requirements & Assumptions

* This master page was designed for SharePoint 2010, Enterprise and Standard versions.
* This master page was designed and tested for SharePoint publishing and wiki sites. No other site templates have been tested.
* Keep in mind that some SharePoint content simply doesn’t work well at smaller screen resolutions (lists with many columns, calendars, etc.). The focus is on external-facing sites with a lot of text- and image-based content.
* The SharePoint front-end server must have internet connectivity to access Google’s hosted version of [html5shim](http://code.google.com/p/html5shim/). If you do not have internet connectivity in your environment, download and use a local copy of this file.

## Known Issues (Updated Jan 19, 2012)

A few people have encountered some issues with the v5 master page. Although I think the master page still works great (especially as a publishing master page), you may want to consider making these changes, depending on your SharePoint environment and how you choose to utilize the interface.

### Error on “Save” in SharePoint dialogs (IE9)

This is caused by an error in Microsoft’s internal JavaScript files. This easily remedied by simply not using v5 master page as your “system” master page. If use a lot of system pages in your SharePoint site, you may also try adding the following line of code to the `<head>` section of your master page:

{% highlight html %}
<meta http-equiv="x-ua-compatible" content="IE=8"/>
{% endhighlight %}

This _forces_ newer versions of Internet Explorer to display in compatibility mode. Note that you’ll also lose CSS3 and HTML5 functionality when you add this to the master page (everything works, but the site will look a little more bland in IE).

### Ribbon not appearing at the top of the browser window

I’ve had some mixed reports of this happening in Internet Explorer, but I think it’s actually an indication that the paths to the attached CSS and JavaScript files are incorrect. If you are deploying v5 master to any site other than the ROOT site collection, make sure you update all references to these files where appropriate.

### Scrollbars appearing in SharePoint dialogs (Chrome, Firefox, Safari)

This is actually a side-effect of my ribbon/scrolling fix for SharePoint. SharePoint dialogs are still entirely functional, but the positioning and sizing of them just gets a little weird in any non-IE browser. Again, the idea is that the master page is optimized for publishing sites, which don’t make much use of these dialogs (if at all). If you have a lot of trouble with this, consider using a different system master page.
