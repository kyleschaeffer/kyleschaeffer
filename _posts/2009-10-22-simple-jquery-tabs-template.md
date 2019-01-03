---
id: 348
title: A Simple jQuery Tabs Template
date: 2009-10-22T10:47:28+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=348
permalink: /simple-jquery-tabs-template
redirect_from:
  - /development/simple-jquery-tabs-template
categories:
  - Development
tags:
  - CSS
  - DHTML
  - JavaScript
  - jQuery
  - Tabs
  - XHTML
---
I love [jQuery](https://jquery.com/); I use it all the time. I also love the great UI controls that come with the [jQuery UI](https://jqueryui.com/) library. Unfortunately, I’ve found that a lot of these controls can be a little heavy in terms of required JS/CSS files that your clients will have to download in order to use these controls. Being the minimalist that I am, I really want to drop a small amount of CSS and HTML into my site and quickly get myself up and running with a tab structure that’s both flexible and accessible.

## Adding jQuery is Easy

You’ll need to include a few JavaScript libraries in order to use jQuery tabs at all. These libraries can be somewhat cumbersome for users on slower connections to download, and it’s definitely the major disadvantage of using a library like jQuery to add this sort of functionality to your site. The best things we can do in this case is try to minimize the effect of serving this JS library to our clients. First of all, I would recommend always using the “minified” version of the jQuery script. It’s much smaller in size than the standard version, which obviously will reduce the amount of time needed to load your site when users first visit it. The only difference between the minified and the standard library is that the good folks at jQuery have removed all sorts of characters in the document, which makes it less readable, but makes the file size much smaller. If you want to delve into the depths of the jQuery library, you can download the standard version and take a gander offline, but don’t force your users to download the full version if you don’t have to.

Additionally, Google ([here](https://code.google.com/apis/ajaxlibs/documentation/#jquery)) and Microsoft ([here](https://www.asp.net/ajax/CDN/)) have both set up distribution networks to serve these libraries to your users. Don’t waste bandwidth and your clients’ time by forcing users to download these libraries from your servers! Chances are, Google/Microsoft have the resources to serve these files to you users faster and more reliably than you can, so please utilize these free services. Additionally, users have a much greater chance of already having a cached version of these files when you used the shared location. Sweet!

Add the library references to your `<head/>` to get started.

{% highlight html %}
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://jqueryui.com/latest/ui/ui.tabs.js"></script>
{% endhighlight %}

## The Tabs Markup

What’s so wonderfully beautiful about jQuery tabs is the simplicity of the HTML. Even more, users who aren’t using JavaScript will visit your site and see a perfectly formatted and functioning page. Use this as a template for your tabs HTML:

{% highlight html %}
<div class="ui-tabs">
  <ul class="ui-tabs-nav">
    <li><a href="#tabs-1">Tab One</a></li>
    <li><a href="#tabs-2">Tab Two</a></li>
    <li><a href="#tabs-3">Tab Three</a></li>
  </ul>
  <div id="tabs-1" class="ui-tabs-panel">
    <p>Content one.</p>
  </div>
  <div id="tabs-2" class="ui-tabs-panel">
    <p>Content two.</p>
  </div>
  <div id="tabs-3" class="ui-tabs-panel">
    <p>Content three.</p>
  </div>
</div>
{% endhighlight %}

## Add Some Style

This is where my template really starts to differ from jQuery’s version. The CSS jQuery would have you use is not simple enough for me, so I created my own version of the CSS that will give you a very basic frame onto which you can apply your own design. Here’s what I like to start with:

{% highlight css %}
.ui-tabs {
  zoom: 1;
}

.ui-tabs .ui-tabs-nav {
  list-style: none;
  position: relative;
  padding: 0;
  margin: 0;
}

.ui-tabs .ui-tabs-nav li {
  position: relative;
  float: left;
  margin: 0 3px -2px 0;
  padding: 0;
}

.ui-tabs .ui-tabs-nav li a {
  display: block;
  padding: 10px 20px;
  background: #f0f0f0;
  border: 2px #ccc solid;
  border-bottom-color: #ccc;
  outline: none;
}

.ui-tabs .ui-tabs-nav li.ui-tabs-selected a {
  padding: 10px 20px 12px 20px;
  background: #fff;
  border-bottom-style: none;
}

.ui-tabs .ui-tabs-nav li.ui-tabs-selected a,
.ui-tabs .ui-tabs-nav li.ui-state-disabled a,
.ui-tabs .ui-tabs-nav li.ui-state-processing a {
  cursor: default;
}

.ui-tabs .ui-tabs-nav li a,
.ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a {
  cursor: pointer;
}

.ui-tabs .ui-tabs-panel {
  display: block;
  clear: both;
  border: 2px #ccc solid;
  padding: 10px;
}

.ui-tabs .ui-tabs-hide {
  display: none;
}
{% endhighlight %}

## Now Make it Do Something

Now that you have your tabs there, you’ll have to initialize them with a simple jQuery statement in order for them to work. Just add this line of JavaScript anywhere on your page.

{% highlight html %}
<script type="text/javascript">
  $(document).ready(function(){
    $(".ui-tabs").tabs();
  });
</script>
{% endhighlight %}

## The Result

Once you’ve added each of these elements to your page, you should get a very simple tab structure that awaits your styling genius. Just modify the CSS to apply your own design!

<div class="ui-tabs">
  <ul class="ui-tabs-nav">
    <li><a href="#tabs-1">Tab One</a></li>
    <li><a href="#tabs-2">Tab Two</a></li>
    <li><a href="#tabs-3">Tab Three</a></li>
  </ul>
  <div id="tabs-1" class="ui-tabs-panel">
    <p>Content one.</p>
  </div>
  <div id="tabs-2" class="ui-tabs-panel">
    <p>Content two.</p>
  </div>
  <div id="tabs-3" class="ui-tabs-panel">
    <p>Content three.</p>
  </div>
</div>

<style type="text/css">
.ui-tabs { zoom: 1; margin: 0 0 1.5em 0; }
.ui-tabs .ui-tabs-nav { list-style: none; position: relative; padding: 0; margin: 0; }
.ui-tabs .ui-tabs-nav li { list-style: none; position: relative; float: left; margin: 0 3px -2px 0; padding: 0; }
.ui-tabs .ui-tabs-nav li a { display: block; padding: 10px 20px; background: #f0f0f0; border: 2px #ccc solid; border-bottom-color: #ccc; outline: none; }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected a { padding: 10px 20px 12px 20px; background: #fff; border-bottom-style: none; }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected a, .ui-tabs .ui-tabs-nav li.ui-state-disabled a, .ui-tabs .ui-tabs-nav li.ui-state-processing a { cursor: default; }
.ui-tabs .ui-tabs-nav li a, .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a { cursor: pointer; }
.ui-tabs .ui-tabs-panel { display: block; clear: both; border: 2px #ccc solid; padding: 10px; }
.ui-tabs .ui-tabs-hide { display: none; }
</style>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
<script type="text/javascript">$(document).ready(function(){$(".ui-tabs").tabs();});</script>

Now you’ve got it. Good luck, and happy styling.
