---
id: 671
title: SharePoint 2010 Pop-Up Dialogs
date: 2010-11-18T13:58:30+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=671
permalink: /sharepoint/sharepoint-2010-pop-up-dialogs/
categories:
  - SharePoint
tags:
  - CSS
  - jQuery
  - SharePoint
---
SharePoint 2010 makes it incredibly easy to add dialog content to your website. Built-in functionality allows you to retrieve content from anywhere within your site and display it in a modal dialog that appears over the page. This is pretty standard stuff when it comes to modern web technology, but the ease of use is what makes SharePoint dialogs so amazing. In this article, we&#8217;ll explore the dialog functionality that comes with the SharePoint 2010 platform, and we&#8217;ll discover new ways to customize that content to create a uniquely fresh appearance for your SharePoint portal.<!--more-->

## Dialogs in SharePoint 2010

Even if you have chosen not to acknowledge dialogs in SharePoint 2010 just yet, they&#8217;re already being used throughout the SharePoint platform for things like pages, lists, and libraries. Every time you create a new page, for instance, you&#8217;ll see a dialog that appears on the page. It most likely looks something like this:
  
<img class="alignnone size-full wp-image-672" title="SharePoint 2010 Dialog" src="https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog.png" alt="SharePoint 2010 Dialog" width="394" height="207" srcset="https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog.png 394w, https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog-300x158.png 300w" sizes="(max-width: 394px) 100vw, 394px" />

You&#8217;ll see similar dialogs when you create and edit list items, as well as within any document libraries that you have created throughout your site collection. These pop-up forms and views are an integral part of the SharePoint 2010 platform.

## How it Works

SharePoint 2010 dialogs are fairly simple. They are basically a JavaScript pop-up dialog that include an `iframe` to request content from elsewhere on your site. This content can be anything inside SharePoint, even publishing pages or custom application pages that you&#8217;ve created yourself.

If you&#8217;ve ever created your own master page in SharePoint 2010, you may have been confused when you were prompted with two options when trying to apply your new master page to the site. SharePoint 2010 segregates your master page delegation between **site** master page and **system** master page. Basically, your _site_ master page will be applied to pages, lists, and libraries, where the _system_ master page is applied to everything else (settings, permissions, administration, and&#8230;dialogs). When you call a pop-up dialog in SharePoint, the content is requested and is displayed using **system** master page. If you want to start customizing the way your dialogs appear in SharePoint 2010, the first step is to format your custom master page to also work as a system master page.

## System Master Pages

The most important thing you&#8217;ll want to do in order to optimize your master page for dialog use is to designate which elements of the page will be hidden inside a dialog view. If you open Microsoft&#8217;s **v4.master** file, you may notice that `class="s4-notdlg"` appears in numerous places throughout the file. The **s4-notdlg** class name should be applied to anything you want to _hide_ in the dialog view. This means headers, footers, navigation, sidebars, etc. Basically, you&#8217;ll want to add this CSS class to everything except for the main content area of your design. When dialogs are displayed, anything with the **s4-notdlg** CSS class is automatically trimmed out.

### Dealing with Style

Your design most likely has a fixed width, or at the very least, a minimum width at which it can display. Dialogs are very small in size, so the width and size formatting that you&#8217;ve established for your design won&#8217;t necessarily work nicely within the dialog view. Fortunately, any time your master page is used to display dialog content, the `html` element gets a special CSS class name called **ms-dialog**. You can use this to override any styles that you&#8217;ve set for your design, making it appear correctly both in normal and in dialog views. For example, you might have a `div` element in your design with an ID of `wrapper`. In an attached CSS file, you can style this element as it appears both in normal and dialog views:

<pre>#wrapper {
  width: 960px;
  margin: auto;
}
<strong>html.ms-dialog</strong> #wrapper {
  width: 100%;
}</pre>

In the above example, the `wrapper` element will switch to fluid width when displayed inside a SharePoint 2010 dialog. You may have to utilize this technique with things like columns, background colors, and other design elements as they appear inside the dialog.

## Harness the Power

Now that your master page is optimized for dialog use, it&#8217;s time to start pulling some content from your SharePoint site. Creating a pop-up link is extremely easy. On any page or within a content editor web part, create a link to request a dialog page:

<pre>&lt;a href="<strong>javascript:OpenPopUpPage('/path/to/content.aspx');</strong>"&gt;Show Me the Pop-Up!&lt;/a&gt;</pre>

You can use the **OpenPopUpPage** function to view any content in dialog mode. There is also a more flexible function called **OpenWebPage** that allows you to specify things like dialog width and height. Using these function in conjunction with a custom system master page, the limits to what you can display within a dialog in SharePoint are really limitless.

## Progressive Enhancement

I&#8217;m all about accessibility, and I really don&#8217;t like it when someone asks me to put **javascript:** inside a link element. Users without JavaScript won&#8217;t be able to follow the link, and perhaps more importantly, search engines like Google or Bing won&#8217;t be able to track the content associations within your site. This can be a huge problem, and as such, I wouldn&#8217;t recommend using the above method for dialogs in your SharePoint site.

A better approach involves an exercise in progressive enhancement. Progressive enhancement demands that you create a solution that functions for users with the least functionality enabled within their web browsers. This means creating simple HTML links that point to real web page content. By creating simple links, you can guarantee that everyone (including search engines) can decipher and utilize the links in your site. For other users, such as JavaScript-enabled users, you can _enhance_ their experience with things like pop-up dialogs to display content more quickly.

This is easy enough to do in SharePoint 2010, simply because our custom master page is formatted to display content in both normal and dialog views already. We can easily direct users to the normal view of the content, and override that functionality for script-enabled users of our site.

## SharePop

In true progressive enhancement fashion, I have created a simple jQuery function that will turn any normal link in your SharePoint site into a pop-up dialog link, simply by associating a CSS class with that anchor tag. Add this functionality to your own SharePoint 2010 site:

  1. Ensure that the [jQuery script library](http://jquery.com/) is attached to the master page or page layout on which you will utilize my script
  2. Add the following jQuery function to an attached JavaScript file: 
    <pre>(function($){
  $.fn.sharePop = function(){
    if(typeof OpenPopUpPage == 'function'){
      return this.each(function(i){
        if($(this).attr('href') != null){
          $(this).click(function(e){
            e.preventDefault();
            OpenPopUpPage($(this).attr('href'));
          });
        }
      });
    }
    else{
      return false;
    }
  };
})(jQuery);</pre>

  3. Add a unique CSS class name to the links you wish to display in dialog view: 
    <pre>&lt;a href="/path/to/content.aspx" <strong>class="dialog-pop"</strong>&gt;View Content&lt;/a&gt;</pre>

  4. Run the script (add this to an attached JavaScript file): 
    <pre>$(document).ready(function(){
	$('<strong>.dialog-pop</strong>').sharePop();
});</pre>

My script will override the default functionality of these links, and force them to display inside the SharePoint 2010 dialog view instead. Accessibility prevails, as users and search engines which do not utilize JavaScript are still able to view the content (albeit in the normal view of the design).

## Dialog Style

The last thing you&#8217;ll want to consider when using SharePoint dialogs is the _style_ of the dialogs, themselves. The dialog HTML gives you numerous CSS classes that allow you to completely customize the appearance of the dialog window, and even the appearance of the shaded area behind the dialog. The following image shows the HTML of the SharePoint dialog, and I&#8217;ve also highlighted some important CSS classes you&#8217;ll use to change the appearance of the windows.
  
<img src="https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog-html.png" alt="SharePoint 2010 Dialog HTML" title="SharePoint 2010 Dialog HTML" width="540" height="202" class="alignnone size-full wp-image-675" srcset="https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog-html.png 540w, https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog-html-300x112.png 300w" sizes="(max-width: 540px) 100vw, 540px" />

Using these classes, you can create a unique appearance of the dialogs in short order. Here is an example of a &#8220;dark&#8221; theme dialog:

<pre>.ms-dlgOverlay {
  background-color: #333;
}
.ms-dlgContent {
  border: 0;
}
.ms-dlgBorder {
  border: 1px solid #333;
}
.ms-dlgTitle {
  background-color: #333;
}
.ms-dlgTitleText {
  display: block;
  font-weight: bold;
  font-size: 13px;
  padding: 7px;
}</pre>

After adding the CSS to an attached CSS style sheet, we get a completely custom dialog appearance, along with custom content that appears within the dialog box, itself.
  
<img src="https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog-custom.png" alt="Styled Dialog with Custom Content" title="Styled Dialog with Custom Content" width="520" height="183" class="alignnone size-full wp-image-676" srcset="https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog-custom.png 520w, https://kyleschaeffer.com/wp-content/uploads/2010/11/sp2010-dialog-custom-300x106.png 300w" sizes="(max-width: 520px) 100vw, 520px" />

There&#8217;s a lot of elements coming together in SharePoint 2010 dialogs, and it can take some practice and determination to get all the pieces fitting together quite right. If you can do it once, you&#8217;ll find that these custom dialogs are a simple, fast, and amazing tool to add to any SharePoint 2010 design.