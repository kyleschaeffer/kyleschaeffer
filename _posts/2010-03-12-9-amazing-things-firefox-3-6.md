---
id: 480
title: 9 Amazing Things You Can Do in Firefox 3.6
date: 2010-03-12T11:43:32+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=480
permalink: /9-amazing-things-firefox-3-6
redirect_from:
  - /development/9-amazing-things-firefox-3-6/
categories:
  - Development
tags:
  - CSS
  - Web Browsers
---
The latest update to Mozilla’s wonderful web browser, Firefox 3.6, includes support for some fantastic [CSS version 3 recommendations](http://www.w3.org/Style/CSS/current-work#CSS3) that you may or may not be aware of. Obviously, these tricks won’t work in Internet Explorer just yet, but look for widespread support coming in the (hopefully) very near future.

Most of the new features revolve around background image and color management. This has been a definite pain point for designers in the past, as we’ve had to create extraneous `<div/>` tags and other silly markup hacks to implement our favorite visual elements. Fear not, for all browsers will soon support these great features! If you’ve already installed Firefox 3.6, you should plainly see all the great features in my examples below. If you haven’t installed the latest update, head on over to [Mozilla’s website](http://www.mozilla.com/firefox/) now to download the latest version.

<style type="text/css">

.box {
	margin: 0 0 20px 0;
	padding: 20px;
	border: 1px #ddd solid;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	-o-border-radius: 15px;
	border-radius: 15px;
	text-align: justify;
}
.shiny-box {
	background: -moz-linear-gradient(top, #fff, #e9e9e9);
}
.slide {
	background: -moz-linear-gradient(top -45deg, violet, blue);
	color: #fff;
}
.rainbow {
	background: -moz-linear-gradient(left 20deg, violet, red, orange, yellow, green, teal, blue, purple);
	color: white;
}
.alpha {
	background: -moz-linear-gradient(left, rgba(255,255,255,1), rgba(255,255,255,0)), #4aceff url(http://thepeev.com/wp-content/themes/thepeev/images/plant.png) bottom no-repeat;
}
.radial {
	background: -moz-radial-gradient(top left, white 20%, orange);
}
.slasher {
	background: -moz-repeating-linear-gradient(left -45deg, #fff, #f5f5f5 1px, #fff 5px, #fff 1px);
}
.burst {
	background: -moz-repeating-radial-gradient(-5px -5px, circle, #bfeeff, #bfeeff 15px, #fff 15px, #fff 30px, #bfeeff 30px, #bfeeff 40px);
	border: 5px #bfeeff solid;
}
.layers {
	background: url(http://demos.hacks.mozilla.org/openweb/resources/images/logos/firefox-48.png), -moz-linear-gradient(left, rgba(255, 255, 255, 0),  rgba(255, 255, 255, 0.8)), url(http://demos.hacks.mozilla.org/openweb/resources/images/patterns/flowers-pattern.jpg);
	background-repeat: no-repeat, no-repeat, repeat;
	background-position: bottom right, left, right;
	color: #fff;
}
.layers strong {
	color: #fff;
}
.sizer {
	background: #f5f5f5 url(http://demos.hacks.mozilla.org/openweb/resources/images/logos/firefox-48.png) bottom right no-repeat;
	-moz-background-size: 120px;
	-webkit-background-size: 120px;
	-o-background-size: 120px;
}
</style>

## The Linear Gradient

You can now add linear gradients to your HTML elements with a handy CSS attribute called `-moz-linear-gradient`. Here are a few examples to get you started.

### A simple example:

<p class="box shiny-box">
  <strong>Are you using <a href="http://www.mozilla.com/firefox/">Firefox 3.6</a>? Check out my linear gradient background.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor odio ac elit faucibus vel rhoncus purus hendrerit. Pellentesque imperdiet fermentum lacinia.
</p>

### The CSS:

{% highlight css %}
.shiny-box {
  background: -moz-linear-gradient(top, #fff, #e9e9e9);
}
{% endhighlight %}

### Drawing gradients at an angle:

<p class="box slide">
  <strong>Gradient backgrounds can be drawn at an angle.</strong> Quisque mollis, dui quis hendrerit accumsan, dui lorem congue nibh, et scelerisque neque tortor ac magna. Quisque faucibus lectus tellus. Cras sodales, nulla in suscipit ultricies, mi neque pulvinar augue, a congue lacus tellus eu lorem. Donec varius posuere ligula, adipiscing adipiscing nibh eleifend eu. Nulla sagittis porttitor placerat. Praesent non pretium nisl. Curabitur tempor ante sed orci commodo placerat. Curabitur faucibus ornare augue. Duis adipiscing libero sed ante venenatis posuere. Etiam sodales felis ac est ultricies volutpat. Pellentesque varius iaculis dui, in interdum turpis porta ac. Ut rutrum consequat lectus sit amet euismod. Proin suscipit metus vitae magna condimentum eget blandit ante blandit. Duis lorem magna, luctus sed rutrum non, dictum a erat. In egestas libero a nisl faucibus lobortis. Duis aliquam erat vitae ipsum placerat quis dignissim elit pretium. Sed dictum interdum feugiat. Praesent feugiat libero a enim vulputate ut viverra tortor ornare. Donec vel diam mi. Morbi porttitor porttitor mattis.
</p>

### The CSS:

{% highlight css %}
.slide {
  background: -moz-linear-gradient(top -45deg, violet, blue);
  color: #fff;
}
{% endhighlight %}

### Stringing colors together:

<p class="box rainbow">
  <strong>Specify multiple colors in your gradients.</strong> In fermentum ipsum eget quam pharetra sagittis. Phasellus mollis, nulla nec sagittis pharetra, magna tortor commodo felis, eget dictum sem ipsum gravida ligula. Aliquam pharetra libero quis ligula sollicitudin condimentum. Sed sed diam nulla. Fusce malesuada gravida felis, id porttitor lacus porttitor sed. Maecenas mollis feugiat ultrices. In ac viverra ligula. Maecenas suscipit tempor nibh ac mattis. Morbi ac metus velit. Morbi enim purus, adipiscing at consectetur eget, blandit id nibh.
</p>

### The CSS:

{% highlight css %}
.rainbow {
  background: -moz-linear-gradient(left 20deg, violet, red, orange, yellow, green, teal, blue, purple);
  color: white;
}
{% endhighlight %}

## Alpha Gradients

Alpha gradients allow you to specify an RGBA transparency for background images and colors. This allows you to “fade” your background on a gradient, so it gets slightly more opaque as you near the edge of your element. It works a lot like the linear gradients shown above.

### Let’s try it out:

<p class="box alpha">
  <strong>Apply alpha gradients to background colors and images.</strong> Mauris id mauris diam, vel hendrerit tortor. Pellentesque leo erat, ullamcorper et consectetur eget, elementum id ipsum. Vestibulum et diam mi, quis commodo velit. Maecenas bibendum purus id sapien sodales ut dapibus est consectetur. Donec vel elementum quam. Suspendisse quis risus nulla. Cras imperdiet, est sit amet rhoncus tincidunt, elit turpis consectetur enim, sit amet gravida erat magna id urna. Cras feugiat, orci nec hendrerit pulvinar, tortor mi dapibus neque, in varius massa velit vitae mi. Fusce dignissim malesuada felis in tincidunt. Donec lacus magna, blandit quis ullamcorper consectetur, interdum in nisl. Curabitur luctus lorem in leo aliquam vestibulum. Ut tempus ornare augue non aliquet. Sed id elit eget sem condimentum tempus et non libero. Proin at nisi quis dolor dignissim varius. Nam fermentum mauris eget justo laoreet vitae tristique quam varius. Praesent sodales sem sed dolor aliquet sagittis. Vestibulum fringilla ultricies nunc. In lacus nisl, mollis blandit aliquam ut, tristique in libero. Suspendisse lacinia aliquet aliquet.
</p>

{% highlight css %}
.alpha {
  background: -moz-linear-gradient(left, rgba(255,255,255,1),
  rgba(255,255,255,0)),
  #4aceff url(http://thepeev.com/wp-content/themes/thepeev/images/plant.png) bottom no-repeat;
}
{% endhighlight %}

## Radial Gradients

Radial gradients allow for some really cool effects like gradient “shine” and other neat things you’d otherwise have to create in Photoshop.

### The example:

<p class="box radial">
  <strong>You can even draw radial gradients. See how I shine!</strong> Donec malesuada, augue in pulvinar tincidunt, tellus lectus iaculis mi, vel facilisis ante mauris et sem. Nunc pretium orci in lacus sollicitudin rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin risus eu libero vestibulum vel mattis diam sagittis. Duis vel dui non erat eleifend dignissim vitae vitae dui. Curabitur dictum imperdiet diam euismod viverra.
</p>

### The CSS:

{% highlight css %}
.radial {
  background: -moz-radial-gradient(top left, white 20%, orange);
}
{% endhighlight %}

## Repeating Gradients

As if this wasn’t enough, you’ll also have support for repeating gradients, which allows you to do some really cool stuff.

### Check it out:

<p class="box slasher">
  <strong>Repeating gradients make it easy to add slash-boxes.</strong> Vestibulum at fringilla dolor. Pellentesque id consectetur enim. Suspendisse vel nibh magna, et imperdiet mi. Aliquam erat volutpat. Maecenas dui quam, volutpat vitae cursus et, suscipit sit amet lorem. Duis congue, nisi eu aliquet ultricies, ipsum ligula rutrum libero, quis rhoncus nisi mauris lacinia nunc. Nam iaculis, nibh et faucibus tempor, massa magna eleifend urna, sit amet pulvinar arcu velit et lacus.
</p>

### The CSS:

{% highlight css %}
.slasher {
  background: -moz-repeating-linear-gradient(left -45deg, #fff, #f5f5f5 1px, #fff 5px, #fff 1px);
}
{% endhighlight %}

### Use it with radial gradients:

<p class="box burst">
  <strong>Repeating radial gradients make it easy to add special effects to your design.</strong> Aliquam tempor tempor nunc, ut dapibus nisl vehicula et. Nullam felis metus, consectetur eu pretium eu, iaculis eu tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut quis ligula orci, id molestie orci.
</p>

### The CSS:

{% highlight css %}
.burst {
  background: -moz-repeating-radial-gradient(-5px -5px, circle, #bfeeff, #bfeeff 15px, #fff 15px, #fff 30px, #bfeeff 30px, #bfeeff 40px);
  border: 5px #bfeeff solid;
}
{% endhighlight %}

## Background Images

This is one that I’m really excited about. You can apply multiple background images to a single layer. Here’s how it works:

### Multiple background layers:

<p class="box layers">
  <strong>You can layer multiple background images on a single element. This example was taken direclty from Mozilla’s demonstration page.</strong> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque imperdiet elit dignissim libero sollicitudin tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis mattis, leo at rhoncus varius, leo eros tempus ligula, eget blandit mi tortor vitae ante. Nulla varius aliquet massa ac varius. Vestibulum a ipsum vitae ante lobortis facilisis vitae eu risus.
</p>

### The CSS:

{% highlight css %}
.layers {
  background: url(http://demos.hacks.mozilla.org/openweb/resources/images/logos/firefox-48.png),
  -moz-linear-gradient(left, rgba(255, 255, 255, 0),  rgba(255, 255, 255, 0.8)),
  url(http://demos.hacks.mozilla.org/openweb/resources/images/patterns/flowers-pattern.jpg);
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: bottom right, left, right;
  color: #fff;
}
{% endhighlight %}

### You can also resize background images!

<p class="box sizer">
  <strong>You can scale a background image to any size. It’s so ugly!</strong> Morbi sapien urna, convallis quis accumsan mattis, congue non ante. Phasellus bibendum nibh id orci consequat hendrerit rhoncus in leo. Ut a mauris eu nisl accumsan pulvinar sit amet at leo. Aenean sit amet enim sit amet tellus pellentesque tempus. Vivamus lobortis dui sed arcu venenatis vel vehicula felis vestibulum. Fusce vel ipsum eu nulla fermentum gravida. Suspendisse tincidunt euismod consectetur.
</p>

### The CSS:

{% highlight css %}
.sizer {
  background: #f5f5f5 url(http://demos.hacks.mozilla.org/openweb/resources/images/logos/firefox-48.png) bottom right no-repeat;
  -moz-background-size: 120px;
  -webkit-background-size: 120px;
  -o-background-size: 120px;
}
{% endhighlight %}

## Other Additions

Mozilla has included some other great new features, such as the highly anticipated CSS attribute `@font-face`, which allows you to embed WOFF downloadable fonts into your web design. Type is finally coming to the web! For details on this and the many other great new features in Firefox 3.6, visit Mozilla’s [update details for developers](https://developer.mozilla.org/En/Firefox_3.6_for_developers) page.
