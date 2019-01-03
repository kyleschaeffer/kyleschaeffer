---
id: 293
title: A Very Simple CSS Chat Bubble
date: 2009-09-14T09:38:19+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=293
permalink: /a-very-simple-css-chat-bubble
redirect_from:
  - /development/a-very-simple-css-chat-bubble
categories:
  - Development
tags:
  - CSS
  - Design
  - XHTML
---
Each time you implement a new design element into your site, there are a vast array of approaches you can take to achieve the same outcome. Often times, I feel that the [most simple of solutions](/the-wisdom-of-simplicity) is the best one. When implementing the “user comments” feature into [ThumbSticks.com](http://thumbsticks.com), I decided to wrap each user comment in a sort of “chat bubble box,” much like you would see in a comic book story. I experimented with various solutions that gave me different amounts of flexibility and performance, but I eventually settled on a very simple solution that resulted in what I think is an elegant CSS chat bubble.

## The Idea

First of all, I will say that **this approach only really works if you know the maximum size of your comment data**. On ThumbSticks.com, for instance, users can’t enter comments that are over 300 characters in length, so I have a good idea of how large each comment box could possibly get. Rather than splicing my comment box into multiple images (which is more flexible, but decreases page performance and increases download times), I decided to create a single image that is used to wrap each comment chat bubble:

### The Image

![Comment Chat Bubble](/assets/img/commentBg.png)

Basically, my chat bubble boxes can shrink to any size, but they can’t grow beyond the height of this image. If you know exactly how large your data can get, this is a really simple solution to implement. All that I need to show my chat bubbles is a bit of HTML and CSS.

## The Nitty-Gritty

### HTML:

{% highlight html %}
<div class="bubble">
  <div class="bubbleHeader"></div>
  <div class="bubbleInner">
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div>
{% endhighlight %}

### CSS:

{% highlight css %}
.bubble {
  width: 477px;
  background: url('/path/to/commentBg.png') no-repeat;
  background-position: 100% 100%;
}

.bubbleHeader {
  height: 20px;
  background: url('/path/to/commentBg.png') no-repeat;
  background-position: 100% 0;
}

.bubbleInner {
  padding: 0 20px 10px 37px;
}
{% endhighlight %}

Make sure you change “/path/to/comment.Bg.png” to reflect the actual path to the background image you’re using. Once you’ve dropped this into your design, you should see something that [looks a little like this](http://thumbsticks.com/games/xbox-360/call-of-duty-world-at-war).

Good luck, and happy styling!
