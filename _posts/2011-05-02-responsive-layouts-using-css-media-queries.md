---
id: 898
title: Responsive Layouts Using CSS Media Queries
date: 2011-05-02T21:23:03+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=898
permalink: /responsive-layouts-using-css-media-queries
redirect_from:
  - /development/responsive-layouts-using-css-media-queries/
categories:
  - Development
  - Mobile
tags:
  - Columns
  - CSS3
  - Design
  - Layout
---
The days of the desktop are numbered. In the past, designing a web interface involved targeting a screen resolution in the vicinity of 960 pixels wide. For many years, this worked, and it worked well, because 99% of online users could easily read and scroll at that resolution, regardless of the browser, operating system, or machine they were using. _Times have changed._

The supreme rule of desktop design began to wane in the past couple of years. With the explosion of the mobile browser phenomenon (largely due to devices like the iPhone, Blackberry, and the Android operating system), online traffic began to show the first signs of diversification. With increasing numbers of users on these mobile devices, the distinction between _mobile_ and _desktop_ content was born. As you most likely have noticed, many online publishers have chosen to neatly dissect their content into two distinct applications that serve two distinct types of devices. You have “mobile” versions of many websites available today, which often offer similar or identical content to what can be found on the desktop version of that same website. Very simply, the web server detects the device that’s requesting the content, and serves up a different document (or redirects to a different location) depending on the device being used.

Today, this dichotomy between mobile and desktop content persists as the most popular strategy for serving up web content to a multitude of devices. The technical implementation of this strategy differs from site to site, but the end result is the same: a design and layout that targets a single device or resolution. This has been a great approach for many online publishers because it offers so much flexibility in the appearance of mobile content. By segregating a design into two entirely different implementations, the limits to what can be done on a mobile site are nearly limitless. As with every design, however, there are disadvantages to this approach that cannot be overlooked:

* **Increased effort** – it is more difficult to create and maintain two separate design layouts simultaneously.
* **Publishing concerns** – creating a division between mobile and desktop content begs the question: where does the content come from? Should all desktop content be available on the mobile site? Do you publish everything twice (once for desktop, once for mobile users), or do you dual-publish to both mediums simultaneously?
* **Planning for diversification** – is “mobile vs. desktop” really good enough?

The last disadvantage listed here is perhaps the most important point to consider. Recent history has shown that targeting a single device (i.e. the desktop) did not withstand the test of time. Is the simple distinction between “mobile” and “desktop” content really good enough?

### Mobile is important, but not end-all.

The truth of the matter is that mobile devices are taking off. According to [Mary Meeker of Morgan Stanley](http://www.businessinsider.com/mary-meekers-web-2010-11#-10), the sale of “smartphones” is expected to overtake PC sales (both desktops and notebooks) by next year. Browsing statistics are showing this trend as well. [StatCounter](http://gs.statcounter.com/) shows that about 6.5% of all users in North America are browsing on mobile devices. You can count on about one in twenty users experiencing your online content on a three inch screen – how does your content stack up in this scenario? If you haven’t thought about it yet, it’s time to start.

The growth of the smartphone landscape and the diversification of browsing statistics are the driving factor behind the explosion of mobile-friendly site design. Today, this practice is entirely acceptable, but don’t count on anything in this industry to stick for more than a few years. Mobile devices aren’t the only new kids on the block.

### Enter the tablet.

Tablet devices like the iPad and similar devices that utilize the Android operating system have been somewhat of a curveball in the industry of web design. They’re not quite mobile devices, and they’re not quite desktops, but rather somewhere in between. In the current design landscape, where everything has been neatly divided between mobile and desktop content, many designers are choosing to place tablets into the “mobile” category, serving up tablet content in like kind. This does not always go over well with tablet users, who justifiably feel that the tablet offers unique advantages of a desktop computer, namely a better browsing experience than what can be had on a smaller mobile device.

What, then, do we do with these users?

## Responsive Web Design

The ongoing problem is that as designers, we’ve set our minds on this idea that a web interface is going to be displayed on a screen that is 1024 pixels wide (or larger). It’s a desktop mindset; anything smaller than 1024 is a “mobile” device and generally gets a pixel value of about 320 pixels. All devices that access our online content must adhere to one of these two layouts – there are two numbers, and nothing in between.

The trouble for web designers is that internet connectivity is rapidly spreading to a vast array of devices and products that people use every day. Someone might access your online portal from a desktop, phone, notebook, netbook, tablet, or even some consumer appliances. The Nintendo Wii, for instance, comes loaded with an Opera browser that’s quite good, and is hindered only by the fact that many televisions only have a resolution that is 480 to 720 pixels wide. At this resolution, many website layouts simply don’t provide an enjoyable user experience due to poor formatting and display on smaller screens. Furthermore, there is no end in sight. Expect this diversification of internet-ready devices to increase in the coming years, and plan to change the way you design and create layouts for the web.

The great thing is, whether you recognize it or not, this is actually a very good thing. Web layouts have been too rigid and design-centric for a long time now, and forcing designers to apply layouts to a multitude of devices will encourage them to create content that can be consumed in a variety of mediums. In the end, this translates into a better experience for the user, who doesn’t have to worry about what device they are on, what resolution they’ve chosen, or what issues they may encounter. [Ethan Marcotte](http://ethanmarcotte.com/) sums it up best in his article, “[Responsive Web Design](http://www.alistapart.com/articles/responsive-web-design/)” from A List Apart:

> Rather than tailoring disconnected designs to each of an ever-increasing number of web devices, we can treat them as facets of the same experience. We can design for an optimal viewing experience, but embed standards-based technologies into our designs to make them not only more flexible, but more adaptive to the media that renders them. In short, we need to practice responsive web design.

**Responsive web design** is creating web layouts that can adapt to a multitude of displays and devices. Using this technique, you can eliminate the need to create device-centric designs (like a “mobile” site), and allow your content to be displayed from a single source, on an unlimited number of mediums.

## Techniques for Responsive Web Design

Responsive web design is not “one big thing.” It’s a collection of disciplines and techniques that you employ to ensure that your designs can appear fluidly on a multitude of display sizes. The fundamental change that you have to make to start creating responsive designs is to ask yourself with everything that you do: what happens with this content when the display shrinks? Plan for a multitude of resolutions from the very beginning. By mere acknowledgement and foresight, you’ll find that the challenge of creating a responsive layout is not so difficult to overcome.

### 1. Layout Width

The most important element of flexibility that must be employed in your responsive design is a fluid layout width. This is the condemning factor that breaks many designs when they are viewed on smaller display screens. Create wrapper, content, and column widths that can stretch display ideally in different resolutions. There is no “trick” to this technique, it’s merely a change in the way you create columns in your style sheets. Here’s an example:

{% highlight css %}
#wrapper {
  width: 80%;
  margin: auto;
  max-width: 1200px;
}
{% endhighlight %}

This is a simple example of a fluid design width. Setting a max-width on your design is a good idea to salvage any formatting issues for users on very large resolution monitors.

### 2. Responsive Design and Column Widths

In most designs, you might be working with multiple column widths to display content in a number of different ways. In your style sheet, you could simply apply a percentage width to each column, but this technique is generally not ideal. In many cases, a sidebar column may include fixed-width elements like advertisements, menus, or text that does not necessarily adapt in any beneficial way as the width of your layout grows. Instead, you may choose to adapt only a single column as the layout width changes. This is a common layout structure that can easily be created within your existing style sheet. Consider the following example:

{% highlight css %}
#wrapper {
  width: 80%;
  margin: auto;
  max-width: 1200px;
}

#column-main {
  margin-left: 200px;
}

#column-sidebar {
  width: 200px;
  float: left;
}
{% endhighlight %}

In this example, the “main” column will always fill the width of the layout area, and the sidebar column (in this example, on the left) will always remain exactly 200 pixels wide.

### 3. What about images?

A common concern when moving from a fixed-width to a fluid layout is HTML images (the <img> element). An image file, for the most part, is a fixed-size file that does not scale as your design width decreases. This results in some rather unsavory presentation bugs, like large images being drawn beyond the edge of the browser window. The solution is a simple addition to your design’s style sheet:

{% highlight css %}
img {
  max-width: 100%;
}
{% endhighlight %}

This simple addition causes any images in your design to display at full size by default. As the width of the design layout shrinks so that the image is too wide to display in the confines of it’s parent element, the image too, begins to shrink.

It’s worth noting that the image scaling ability of Internet Explorer is admittedly poor at best. Ethan Marcotte shares his very handy [Fluid Images](http://unstoppablerobotninja.com/entry/fluid-images/) script to help alleviate your scalable image woes.

### 4. No More Zoom

Many mobile devices and tablets utilize a “zoom” feature to display content that is too large to fit on smaller display screens. This is an important utility for mobile and tablet users, but it creates a detrimental experience for users, as they have to constantly zoom in, pan, and zoom out in order to browse your web document’s content. You can disable this zooming behavior by way of a simple `<meta>` element in your design’s header.

{% highlight html %}
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
{% endhighlight %}

This meta element is only interpreted by a number of browsing devices (namely smartphones and tablets). **You should only disable the zoom feature if it enhances users’ ability to consume content on your site**. If you’ve formatted your design layout so that users don’t need to pan or zoom, the zoom feature actually impairs the user from navigating your content (which only needs to scroll vertically). If you’ve incorrectly formatted your layout, however, disabling the zoom feature will only further infuriate your users, as you are removing a very important navigation capability of the browser.

### 5. CSS Media Queries

The final and most powerful technique that you can employ for responsive web design is a fairly new feature of CSS technology called the **media query**. Very simply, CSS media queries allow you to apply changes to your site’s design based on the viewing size and capability of the device on which your content is displayed. This is an extremely powerful tool for creating responsive designs, and it has garnered support across all major mobile browsers (including Safari, Chromium, Opera, and even the forthcoming Internet Explorer Mobile [Windows Phone 7]). Here’s a simple example of using a media query in your design’s style sheet:

{% highlight css %}
#wrapper {
  width: 80%;
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
}

@media screen and (max-width: 800px) {
  #wrapper {
    width: 90%;
    min-width: 0;
  }
}
{% endhighlight %}

In this example, we use the same fluid layout as before, but we’ve added a new minimum width (800 pixels) to the style sheet. If the width of the screen drops below 800 pixels, all of the styles defined in our media query will take effect, and the wrapper will be resized to 90% of the design width (with no minimum width).

The power of media queries becomes more apparent in a layout with columns. Consider the following example:

{% highlight css %}
#wrapper {
  width: 80%;
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
}

#column-main {
  margin-left: 200px;
}

#column-sidebar {
  width: 200px;
  float: left;
}

@media screen and (max-width: 800px) {
  #wrapper {
    width: 90%;
    min-width: 0;
  }

  #column-main {
    margin-left: 0;
  }

  #column-sidebar {
    width: auto;
    float: none;
  }
}
{% endhighlight %}

In this example, when the width of the device screen drops below 800 pixels, we completely reformat the appearance of the columns in our design. Rather than displaying a fixed-width sidebar column, at 800 pixels or less, this design switches to a stacked column layout (with the sidebar displaying on top or below the main column). This preserves space on smaller screens, and provides an easy way to display multiple columns on devices that aren’t suited for column-based layouts.

The great part about media queries is that you can define multiple queries in your style sheet. You can have a design layout for desktop machines, a new layout for tablets, and yet another new layout for smaller devices like mobile phones. The number of variations is limited only by what you can do within your style sheet. Furthermore, the latest versions of desktop browsers like Firefox, Safari, Chromium, and even Internet Explorer will recognize media queries as you resize the browser window, allowing you to test your variations on the fly. If you’re using said modern browser, simply resize this window to see how my design responds to new device sizes.

## Looking Forward

Responsive web design is an important next step in presentation on the web. Expect the device landscape to broaden and diversify, and expect your job as a designer to increasingly become the curator of a flexible and fluid online experience that is more focused on content and less on pixels or devices. The idea of “mobile vs. desktop” is fairly new and very strong, but the mobile distinction will likely become an element of features and convenience, rather than an element of presentation, as it is so largely viewed today.
