---
id: 243
title: A Whole New Web?
date: 2009-06-25T12:16:32+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=243
permalink: /user-experience/a-whole-new-web/
categories:
  - User Experience
tags:
  - Corners
  - CSS
  - Events
---
Should we abandon rounded corner techniques that require additional HTML markup in favor of emerging CSS techniques that are not yet supported on all browsers? Apparently, the answer is an overwhelming YES.<!--more-->

I&#8217;m very fortunate for having attended [An Event Apart](http://www.aneventapart.com) in Boston this week. I talked to thought leaders, design experts, tech gurus, and many more interesting and successful people during the event. I&#8217;m accustomed to being the only &#8220;UI guy&#8221; in the small organizations that I&#8217;ve worked for, so it was nice to meet other people who do what I do. One of the most interesting things that I took away from the event was the fact that design leaders are strongly pushing for web design to move in a new direction (well, I&#8217;m not sure if it&#8217;s fair to call it &#8220;new,&#8221; but the push is stronger than ever before).

What I mean when I say this is that many designers are asking you to stop using rounded corner techniques that require extraneous HTML (use the CSS property `border-radius` instead).  Stop using semi-transparent PNG images for background colors (use `rgba` instead).  Stop doing all those little extra things that you do in order to make sure your site is pixel-perfect on every single browser and operating system. Like I said, it&#8217;s certainly not a new subject to bring up, but I was surprised at the ferverous support behind it at the conference. I had briefly touched on this subject in my post about [CSS rounded corners](http://www.kyleschaeffer.com/best-practices/rounded-corners-in-mozilla-and-safari/), where I seem to have agreed with these experts on a number of levels. My opinion is that you should never choose to increase page load times for everyone just simply to ensure that IE users can see rounded corners.

I think [Dan Cederholm](http://www.simplebits.com/) said it best when he referred to these little design touches (such as rounded corners) as &#8220;design rewards&#8221; for users who are using the most common OS/browser combinations. Don&#8217;t think them as design features, but rather as rewards for users who can utilize them. This makes your site faster, more flexible, and easier to develop. Dan is so passionate about this concept that he created a website to convey his feelings:

[Do websites need to look exactly the same in every browser?](http://dowebsitesneedtolookexactlythesameineverybrowser.com/)

I&#8217;m not saying we should do away with rounded corner techniques entirely. In fact, I use my own [Karate Corners](http://www.kyleschaeffer.com/tutorials/karate-corners-easy-rounded-corners-xhtml-no-script/) all the time, but I do it when it&#8217;s necessary and appropriate.  If I&#8217;m working on my own project (where I am the primary stakeholder), I will most certainly go the pure CSS route, but as designers, we know that our clients don&#8217;t always agree. The most prominent argument against this concept is that our clients don&#8217;t really understand the benefits of using pure CSS to create corners and other design &#8220;rewards.&#8221; The only thing the client can understand is that Mr. CIO uses IE6 on his Windows 2000 desktop and he wants to see the rounded corners that were shown to him in the design concept.

It&#8217;s a difficult thing to manage client expectations, and sometimes it&#8217;s necessary to bite the bullet and give the client exactly what they want, even if you disagree with them. The best thing we can do is to make the benefits of this technique clear to the client, and hope that they can let go of the aging concept that your website has to be identical on all possible combinations of platform and browser.

There&#8217;s certainly a discussion to be had, and I&#8217;d love to hear your thoughts on the subject. Let the debate begin&#8230;