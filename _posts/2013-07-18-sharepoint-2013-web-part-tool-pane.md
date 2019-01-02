---
id: 1324
title: SharePoint 2013 Web Part Tool Pane
date: 2013-07-18T12:27:21+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=1324
permalink: /sharepoint/sharepoint-2013-web-part-tool-pane/
categories:
  - SharePoint
tags:
  - CSS
  - SharePoint
---
This is going to be a short one. The &#8220;tool pane&#8221; in SharePoint 2013 has been causing me some headaches. In this version of SharePoint, the tool pane often appears inside your site&#8217;s design layout, instead of off to the side of the entire document. In a fixed-width layout, this definitely causes some issues due to a lack of space for web part zones, sidebars, and other content to fit into the space that is available.<!--more-->

This fix is rather simple. Instead of displaying the tool pane within your site&#8217;s layout, a few lines of CSS can fix the tool pane to the top-right corner of your browser window. Simply drop this into an attached style sheet and you&#8217;re good to go:

## The Style:

<pre>#MSOTlPn_MainTD {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  height: 100% !important;
  width: auto !important;
  overflow-y: auto;
  background: #fff;
}
#MSOTlPn_MainTD > table{
  margin-right: 19px;
  position: static;
  width: 100%;
}
.ms-TPBorder {
  width: 100%;
}</pre>