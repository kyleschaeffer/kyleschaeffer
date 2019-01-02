---
id: 994
title: 10 Things a Website Should Never, Ever Do
date: 2011-09-22T16:19:15+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=994
permalink: /user-experience/10-things-a-website-should-never-ever-do/
categories:
  - User Experience
tags:
  - CSS
  - CSS3
  - Images
  - JavaScript
  - jQuery
  - SharePoint
  - Web Browsers
---
As a designer of the world wide web, you are armed with the power to amaze, enlighten, entice, and captivate. The web is an easel for your creative aspirations, and the content you design for is the foundation of your creativity. With so much power at the tips of your fingers, you also possess the ability to deter, annoy, anger, and infuriate. Your users are yours to command, their emotions yours to pluck like the strings of a harp.<!--more-->

It&#8217;s the latter of these powers that we discuss today: your ability to destroy the desire for users to stay on your site. We&#8217;ll examine the causes of user strife on the web, and see clear examples of common mistakes that designers and developers all-too-often seem to make.

## 1. Never interfere with the ability to scroll

The browser window is a fairly simple application: an address/search bar, a few buttons, and a big window where users read, scroll, and click. Sure, most browsers have other bells and whistles, but it really boils down to these essential elements of the browsing experience. Rule number one: never, ever (ever, ever) interfere with these most basic features of the browser window.

### Example: Microsoft SharePoint 2010

<img class="alignright" title="Microsoft SharePoint 2010" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/sharepoint-2010.jpg" alt="Microsoft SharePoint 2010" width="300" height="175" />One of the most preposterous features of an interface that I&#8217;ve seen is SharePoint 2010&#8217;s new ribbon interface. The default SharePoint 2010 interface includes a simple CSS style that disables the scrollbar on the `<body>` element. Microsoft chooses to remedy this by adding a scrollbar to other division elements in the interface instead. This results in a fairly impressive &#8220;fixed&#8221; ribbon, but it has some infuriating side-effects.

  * When a SharePoint 2010 page loads, users will not be able to scroll until all JavaScript has loaded.  On slow servers or on large pages, this can take up to 2-3 seconds, which can be quite infuriating.
  * Some devices don&#8217;t execute the JavaScript in the expected fashion, resulting in the complete inability to scroll on mobile devices and tablets.

### An easy solution

The truth is, creating a &#8220;fixed&#8221; element is a fairly simple CSS technique that has become extremely popular in the last few months. The complexity of Microsoft&#8217;s interface is it&#8217;s downfall. Always practice in simplicity, because fewer things can go wrong in the end. Build simple interfaces, and _never_ disable the scroll bar. Do this, and you&#8217;ll know at least one person who doesn&#8217;t hate your guts.

## 2. Never allow form resubmissions

Forms are a fairly standard feature of the web. Users see them and use them all the time: to sign up, sign in, order, update, and the like. With so much familiarity, it&#8217;s a wonder that forms are one of the largest sources of frustration to users. Between data, validation, formatting, handling errors, and all the auxiliary things that seem to surround web forms, things can get pretty complex for designers and developers. All the while, you try to keep it simple for your users. It&#8217;s a tall order, to be sure, but there is at least one thing that you can do to help users stay calm.

### Example: The Form Resubmission Prompt

<img class="alignnone size-medium wp-image-1008" title="Form Resubmission" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/form-resubmission.jpg" alt="Form Resubmission" srcset="https://kyleschaeffer.com/wp-content/uploads/2011/09/form-resubmission.jpg 421w, https://kyleschaeffer.com/wp-content/uploads/2011/09/form-resubmission-300x106.jpg 300w" sizes="(max-width: 421px) 100vw, 421px" />

This is Google Chrome&#8217;s form resubmission prompt. Most browsers have something very similar. This appears when users click on the &#8220;Back&#8221; and &#8220;Forward&#8221; buttons in the browser, or when they &#8220;Refresh&#8221; a page on which they have submitted a form. As web junkies, we might know what this means, but it has a more elusive meaning to your every-day internet users. Most of the time, you&#8217;ll find that users simply click the default option (in this case, &#8220;Continue&#8221;), which can lead to duplication of orders, data, requests, and all sorts of things that would be better off if avoided. Also, it&#8217;s just another annoying prompt that users encounter while they&#8217;re using your site.

### A Simple Solution

The solution to form resubmissions really depends on the platform your website runs on. In most cases, a simple fix is to separate the script that submits the form data, and the script that receives and processes that data. For example, if you&#8217;re using a PHP-based platform, you might have a form that looks like this:

<pre>&lt;form action="submit.php"&gt;
  &lt;input type="text" name="user" required /&gt;
  &lt;input type="password" name="pass" required /&gt;
  &lt;input type="submit" value="Log in" /&gt;
&lt;/form&gt;</pre>

To avoid the resubmission prompt, your `submit.php` script would **forward** to another page, rather than displaying a page in the browser.

<pre>if(isset($_POST['user']) && isset($_POST['pass'])){
  // do something with the form data
  <strong>header('Location:/login/form.php?success=true');</strong>
}</pre>

This receiving script never actually displays anything in the browser window. Instead, it receives the form data, does something with it, and then forwards the user somewhere else. Using this technique, when users click on the &#8220;Back&#8221; or &#8220;Forward&#8221; button, the browser will skip the `submit.php` page completely, and never see the annoying form resubmission prompt.

## 3. Never disable keyboard support

<img class="alignright size-full wp-image-1009" title="Sprint Sign-In" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/sprint-sign-in.jpg" alt="Sprint Sign-In" width="179" height="357" srcset="https://kyleschaeffer.com/wp-content/uploads/2011/09/sprint-sign-in.jpg 179w, https://kyleschaeffer.com/wp-content/uploads/2011/09/sprint-sign-in-150x300.jpg 150w" sizes="(max-width: 179px) 100vw, 179px" />While we&#8217;re on the topic of forms, let&#8217;s look at another deviation from web standards you&#8217;ll want to avoid. To the right, you&#8217;ll see a screenshot of the login form at [mysprint.sprint.com](http://mysprint.sprint.com). I have a Sprint mobile phone, and I occasionally use this login form to sign in and review my account, see my bill, or (more commonly) daydream about all the fancy new mobile phones that I don&#8217;t have.

### What went wrong

The font sizes are a little small for my taste, but the appearance of this form is not the worst I&#8217;ve seen (yes, that was a compliment). Design and aesthetics aside, there&#8217;s one feature of this form that drives me absolutely crazy. It&#8217;s an extremely simple form, one that I&#8217;ve encountered on countless other websites before. As usual, I would expect to enter my username and password to sign in without a fuss.

Unfortunately, this is not the case. While focusing in either the username or password textbox, pressing the ENTER key does absolutely nothing. I&#8217;m not the type of user that wastes time after filling out a form by lifting my hand from the keyboard and finding the submit button with my mouse cursor. I&#8217;m all about speed: on most websites, it&#8217;s type, type, ENTER, and the form has been submitted. On Sprint&#8217;s website, however, they&#8217;ve removed this behavior, and thus they&#8217;ve earned a place on my list of don&#8217;t-do&#8217;s.

## 4. Never fail to give feedback

<img class="alignright size-full wp-image-1016" title="Facebook - Add Favorite" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/facebook-add-favorites.jpg" alt="Facebook - Add Favorite" width="201" height="344" srcset="https://kyleschaeffer.com/wp-content/uploads/2011/09/facebook-add-favorites.jpg 201w, https://kyleschaeffer.com/wp-content/uploads/2011/09/facebook-add-favorites-175x300.jpg 175w" sizes="(max-width: 201px) 100vw, 201px" />Feedback is important, especially if you&#8217;re working with the awesomeness of AJAX. Traditionally, you knew what was going on in a web page, because any time you clicked on something, you had to wait while the next page loaded. There was a very apparent interaction period, and very obvious feedback from that interaction. With the introduction of new technology like AJAX, however, that feedback is not always so obvious. Today&#8217;s websites are much more interactive, and the result of those interactions (whether successful or not) needs to be communicated to the user.

### Example: Facebook

There&#8217;s an easy way to test this: visit a web page, turn off your wireless adapter, and then click on things and see what happens. Obviously, because you&#8217;re not online, anything you do should be very obviously followed by a &#8220;no connection&#8221; message or some sort of indication that you&#8217;ve failed to do something. Facebook, a website that makes gratuitous use of AJAX for interaction, is not so good about warning users when things have failed.

**Editor&#8217;s note:** yes, I am using pirate Facebook.

One particular example is the new &#8220;lists&#8221; feature that allows you to mark a list as &#8220;favorite.&#8221; Even when you&#8217;re offline, Facebook gives you no indication that the action has failed. Never assume that users will have a fast connection, or that AJAX requests will complete. You should always provide feedback if something fails, especially when no page loads are involved.

## 5. Never disable keyboard navigation

Different strokes for different folks. That&#8217;s a saying that I like to spew off at random times, usually in a failed attempt at humor, but the lesson of this silly quip is tried and true: everyone has their own way of doing things. This can also be applied to navigation on the internet. Some people prefer to use their cursor for absolutely everything, and only resort to keyboard use when absolutely necessary. Others use the keyboard almost entirely, tabbing, backspacing, and scrolling their way through the world of the world wide web. Others, still, use gestures and touch screens to flick and fly their way through the internet. As a crafter of the interactive, you must adhere to all of these people. Never detract from your users&#8217; ability to navigate in whatever way they damn well please.

### Example: No, I don&#8217;t want to search

<img class="alignright size-full wp-image-1027" title="eBay Auto-focus" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/ebay-search.jpg" alt="eBay Auto-focus" width="202" height="101" />I&#8217;m going to use eBay as an example, just because they&#8217;re so big, but many websites _out there_ are guilty of this annoyance. Upon arriving at eBay&#8217;s website, they use JavaScript to auto-focus on the search bar. I guess they&#8217;ve already decided, before you even visit, that you want to search their website. For some users, however, this can be incredibly annoying. A common and simple way to scroll down the page, in all browsers, is to press the space key. Pressing this key will advance the screen about one page, so you can continue reading without having to worry about scroll bars and the like. If you&#8217;re auto-focused on a search box, however, it disables your ability to do this. Even if it&#8217;s only a minor annoyance, it can be incredibly frustrating to users who like to navigate in this fashion. Likewise, I often use the backspace key instead of the back button to go back when I didn&#8217;t find what I was looking for. With the focus on a search field, backspace navigation simply doesn&#8217;t work.

The fix for this one is easy: don&#8217;t do it. It&#8217;s annoying.

## 6. Never move content without user interaction

Websites can be so damn sneaky. I guess they need to make a buck, but who doesn&#8217;t? One thing that will drive your users bonkers is anything that moves without a prompt from the user. Yes, I&#8217;m talking about you, &#8220;auto-expanding-advertisement-that-plays-a-stupid-video-of-a-guy-who-walks-across-my-screen-when-I-just-want-to-read-the-damn-article&#8221; guy. I also dislike anything that happens on hover (including drop-down menus). Hover is so 2000&#8217;s, get with the times, people. The only time your website should &#8220;move&#8221; or &#8220;do something&#8221; is when users tell it to. Most simply, any time they click, drag, or scroll. That sounds simple and obvious, but not everyone adheres to this most basic of principles.

### Example: Digg.com

<img class="alignnone size-full wp-image-1028" title="Digg Advertisement" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/digg-advertisement.jpg" alt="Digg Advertisement" width="600" height="300" srcset="https://kyleschaeffer.com/wp-content/uploads/2011/09/digg-advertisement.jpg 600w, https://kyleschaeffer.com/wp-content/uploads/2011/09/digg-advertisement-300x150.jpg 300w" sizes="(max-width: 600px) 100vw, 600px" />

While the quality of Digg&#8217;s content is another concern, one thing that does drive me crazy is the sponsored links that appear in the rollup. Notice the promotion from NewEgg.com. This link does not actually appear on page load, but rather when users hover their mouse cursor into the rollup of popular stories. This means that if you&#8217;re a fast clicker (aren&#8217;t we all?), you will often accidentally click on the advertisement instead of the story you&#8217;re interested in. Good for Digg, bad for users. Stop being so shifty, internet.

## 7. Never use fixed position without a fallback

A &#8220;fixed&#8221; element in the browser window is one that stays on the screen, even as you scroll down the page. It&#8217;s a simple CSS technique, but it&#8217;s been amazingly popular in recent months. One thing I&#8217;ve noticed in all these fixed designs is the failure to provide a fallback for users who are on smaller screens. The truth of the matter is that the web isn&#8217;t just for desktops any more. Internet connectivity is coming in all sorts of shapes and sizes: desktops, laptops, mobiles, tablets, e-readers, gaming consoles, and even refrigerators (yes, even refrigerators). The future promises only more diversity in internet-connected devices, and that means you can&#8217;t assume users will have a large viewing area on which to see your website.

### Example: Pandora.com

<img class="alignright size-full wp-image-1035" title="Pandora Fixed" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/pandora-fixed-nav.jpg" alt="Pandora Fixed" width="403" height="269" srcset="https://kyleschaeffer.com/wp-content/uploads/2011/09/pandora-fixed-nav.jpg 403w, https://kyleschaeffer.com/wp-content/uploads/2011/09/pandora-fixed-nav-300x200.jpg 300w" sizes="(max-width: 403px) 100vw, 403px" />This is a screenshot of Pandora&#8217;s fancy new HTML5/CSS3 design. First of all, I&#8217;ll say that I love Pandora.  Maybe too much. It&#8217;s pretty awesome, and it even lets me give all of my radio stations quirky little names like &#8220;Harmonizatorasaurous&#8221; (eat that, spell-check).

Pandora&#8217;s new design includes a fixed header, like many new designs, but it seems the header does not provide a fallback for users on a smaller screen. When reducing the window width, it clips the player controls off the edge of the screen. If a fixed element is clipped, users can&#8217;t see it, even if they try to scroll to see more, which can be a huge problem.

### A simple solution

An easy solution to this problem is to make the default behavior of your site&#8217;s header to maintain a static position, but when users have a large enough screen, you can make things fixed for a more impressive presentation.  The following jQuery snippet does the trick quite nicely:

<pre>$(window).resize(function(){
  resizeUI();
}); 
$(document).ready(function(){
  resizeUI();
});

<strong>// resize on page load AND window resize</strong>
<strong>function resizeUI(){</strong>
<strong> if($(window).width() &gt; 500){</strong>
<strong> $('#header').css('position', 'fixed');</strong>
<strong> }</strong>
<strong> else{</strong>
<strong> $('#header').css('position', 'static');</strong>
<strong> }</strong>
<strong>} </strong></pre>

This script runs both on page load AND as users resize the window, so no matter what happens, you can decide whether or not to use fixed elements. You&#8217;ll have to mess with the values that the script looks at (width and height) to determine what works best for your site&#8217;s design, but it&#8217;s a useful technique to use.

## 8. Never use pop-up windows

Do I really even have to mention this one? I thought that pop-ups were notorious for the infuriating behavior that have on users, but I still see them &#8220;pop up&#8221; from time to time (pun _intended_).

### Example: TinyMCE

<img class="alignright size-full wp-image-1036" title="TinyMCE" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/tinymce.jpg" alt="TinyMCE" width="185" height="98" />I never use pop-ups. I always recommend against them. A common excuse is that _your_ site should stay open, in it&#8217;s own tab, even if users click a link that takes them away from your site. I&#8217;ve got a simple response to that: wrong! Don&#8217;t let your head grow so big that you think your website is god&#8217;s gift to the internet. Users have gotten pretty comfortable with the idea of tabbed browsing, and they know how to manage their windows. Unless you&#8217;re Google, you&#8217;re not allowed to use pop-ups. It&#8217;s that simple.

Imagine my surprise when I attempted to implement the TinyMCE JavaScript editor into a web application I was building, and realized it still used pop-up windows for things like links and images. I am building a PHP application, and I have had stars in my eyes for WordPress the entire time, so TinyMCE was the obvious choice. I was so taken aback by this behavior that I ended up switching to CKEditor, another popular editor that has recognized the need to rid the world of these annoying little boxes, and I&#8217;m all the happier for it.

## 9. Never get quirky (well, not _too_ quirky)

I love websites that are different, but not _too_ different. There&#8217;s a fine balance to be made between adhering to expectations, and getting so weird that users have no idea what&#8217;s going on. As with most users, if I visit a website and am prompted to &#8220;explore this insanely huge image of nonsense to learn how to navigate our site,&#8221; I&#8217;m going to leave and never return. I&#8217;ve never been a proponent of Flash, for this very reason, but I also recognize that it has it&#8217;s place. Flash can enhance a website&#8217;s content with some awesome features, but it should never be used to present content in its entirety.

### Example: Sony.com

<img class="alignright size-full wp-image-1038" title="Sony" src="https://kyleschaeffer.com/wp-content/uploads/2011/09/sony.jpg" alt="Sony" width="305" height="133" srcset="https://kyleschaeffer.com/wp-content/uploads/2011/09/sony.jpg 305w, https://kyleschaeffer.com/wp-content/uploads/2011/09/sony-300x131.jpg 300w" sizes="(max-width: 305px) 100vw, 305px" />Check out [Sony.com](http://www.sony.com), and you&#8217;ll realize that a full 5-8 seconds will go by before you actually see anything on the screen that you can click on. Almost the entire site is in Flash, and it breaks about five of the ten &#8220;don&#8217;t do&#8217;s&#8221; that I&#8217;ve described in this article. All that aside, Sony has provided a non-Flash version of their site, which also subsequently presents a loading spinner for about 2-3 seconds that covers all of the content on the page. I&#8217;m not entirely sure why the designer who created the Sony website was so fond of things that come between users and consuming the content they came to read, but I do know this: it&#8217;s annoying. Don&#8217;t do it.

## 10. Never do THIS&#8230;

Okay, this last one is really just for fun, but never do THIS&#8230;

<pre>body * {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
body *:hover {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}</pre>

Try it out by clicking on this button (you&#8217;ve been warned):

<input id="crazy-button" type="button" value="Let's get crazy" />