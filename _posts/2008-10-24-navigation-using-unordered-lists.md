---
id: 74
title: Navigation Using Unordered Lists
date: 2008-10-24T17:21:07+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=74
permalink: /navigation-using-unordered-lists
redirect_from:
  - /development/navigation-using-unordered-lists/
categories:
  - Development
tags:
  - CSS
  - Navigation
  - XHTML
---
An unordered list (the `<ul/>` tag in HTML) is a great way to easily organize your site navigation with a minimal use of HTML, but how is it done? This is a simple tutorial showing you exactly how to create a simple list-based navigation menu in your site.

## Vertical Menus

Vertical menus are the easiest list-based menus to create; basically all you have to do is hide the bullets and padding for your list using CSS. In the example below, we have a very simple two-level vertical navigation menu.

### The HTML:

{% highlight html %}
<ul class="navigation">
  <li><a href="http://www.google.com">Google</a></li>
  <li><a href="http://www.yahoo.com">Yahoo!</a>
    <ul>
      <li><a href="http://www.yahoo.com/shopping">Yahoo! Shopping</a></li>
      <li><a href="http://www.yahoo.com/sports">Yahoo! Sports</a></li>
      <li><a href="http://www.yahoo.com/weather">Yahoo! Weather</a></li>
    </ul>
  </li>
  <li><a href="http://www.amazon.com">Amazon</a></li>
  <li><a href="http://www.ebay.com">eBay</a></li>
</ul>
{% endhighlight %}

### The CSS:

{% highlight css %}
ul.navigation,
ul.navigation ul {
  margin: 0;
}

ul.navigation li {
  list-style-type: none;
  padding: 0 0 0 20px;
}
{% endhighlight %}

### The Result:

![](/assets/img/navigation1.gif)

## Horizontal Menus

Horizontal menus are slightly more complex than the vertical variety, but they aren’t so far removed. As you can see in the example below, the HTML remains largely the same; we’ll modify the CSS to allow the navigation list items to appear in left-to-right orientation.

### The HTML:

{% highlight html %}
<ul class="navigation">
  <li><a href="http://www.google.com">Google</a></li>
  <li><a href="http://www.yahoo.com">Yahoo!</a></li>
  <li><a href="http://www.amazon.com">Amazon</a></li>
  <li><a href="http://www.ebay.com">eBay</a></li>
</ul>
{% endhighlight %}

### The CSS:

{% highlight css %}
ul.navigation,
ul.navigation ul {
  margin: 0;
}

ul.navigation li {
  list-style-type: none;
  float: left;
}
{% endhighlight %}

### The Result:

![](/assets/img/navigation2.gif)

The basic structure (as shown in the examples above) can be used for your site menus, but you’ll undoubtedly want to add some style and color to match the design of your site. Here are a few examples to get you started and to perhaps give you some ideas of your own.

## Vertical Navigation

Click on the image below to see the demo. On the demo page, right-click and view source to see the code.

[![](/assets/img/navigation3.gif)](/assets/img/verticalmenu.htm)

## Horizontal Navigation

Click on the image below to see the demo. On the demo page, right-click and view source to see the code.

[![](/assets/img/navigation4.gif)](/assets/img/horizontalmenu.htm)

As you can see, we’re using CSS to add rollover effects and sub-menu background colors. You can add images and other navigation elements to take your design even further.
