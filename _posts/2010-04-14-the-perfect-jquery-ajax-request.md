---
id: 538
title: The Perfect jQuery AJAX Request
date: 2010-04-14T09:10:41+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=538
permalink: /the-perfect-jquery-ajax-request
categories:
  - Development
tags:
  - JavaScript
  - jQuery
---
If you’re into client-scripting, then [jQuery AJAX](https://api.jquery.com/category/ajax/) is probably _your thing_ (if it’s not, perhaps it should be!). jQuery has some fantastic support for AJAX, and implementing it into your web application is so easy it’s stupid. The AJAX functionality in the AJAX library is so flexible, sometimes it’s easy to get lost when you’re trying to do something very simple. I’ve come up with a very basic jQuery AJAX template that I use for just about everything I do, and I thought it might be useful to share.

## The Old Way

Did you work with AJAX _way back when_, when it first came out? You might remember that an AJAX request looked a little like this.

{% highlight js %}
var xmlhttp;
xmlhttp = GetXmlHttpObject();
if(xmlhttp == null){
  alert("Boo! Your browser doesn't support AJAX!");
  return;
}
xmlhttp.onreadystatechange = stateChanged;
xmlhttp.open("GET", "https://www.google.com", true);
xmlhttp.send(null);

function stateChanged(){
  if(xmlhttp.readyState == 4){
    // do something with the response text
    alert(xmlhttp.responseText);
  }
}
function GetXmlHttpObject(){
  // IE7+, Firefox, Chrome, Opera, Safari
  if(window.XMLHttpRequest){
    return new XMLHttpRequest();
  }

  //IE5, IE6
  if(window.ActiveXObject){
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  return null;
}
{% endhighlight %}

In a nutshell, that sucks! All of that code to simply request the contents of Google’s home page, and then alert in the window. That’s not very helpful at all. Alternatively, here is the exact same function written in jQuery:

{% highlight js %}
$.ajax({
  url: 'https://www.google.com',
  success:function(data){
    alert(data);
  }
});
{% endhighlight %}

As you can plainly see, the jQuery AJAX method is much easier to wrap your mind around. You give it a URL to request, and then you give it a set of instructions if a successful request is made. Easy!

I understand that it’s not very useful to request the contents of a web page and alert it to your users (in fact, that’s probably pretty annoying), so let’s take it up a notch. jQuery AJAX features a ridiculous amount of customization options, events, and the like to give you a huge amount of flexibility, and it can be hard to find a good place to start. I’ll help you find the starting line, and you can take it from there.

## The Perfect AJAX Request

I’m fairly positive that by using the term _perfect_, I’m going to get a good amount of nay-sayers telling me why jQuery AJAX sucks, but that’s not what I’m getting at. This jQuery function is _perfect_ in the sense that it handles 99% of all the AJAX requests you’ll ever need to make, it includes a success and failure function to ensure that users get the proper feedback they need, and you’ll get a spinning loading image while the request is being processed to boot. Throw on top of that the fact that it’s extremely easy to use, and I’d say you have something that’s pretty damned close to perfect, at least in my book. Here is the template:

{% highlight js %}
$.ajax({
  type: 'POST',
  url: 'https://kyleschaeffer.com/feed/',
  data: { postVar1: 'theValue1', postVar2: 'theValue2' },
  beforeSend:function(){
    // this is where we append a loading image
    $('#ajax-panel').html('<div class="loading"><img src="/images/loading.gif" alt="Loading..." /></div>');
  },
  success:function(data){
    // successful request; do something with the data
    $('#ajax-panel').empty();
    $(data).find('item').each(function(i){
      $('#ajax-panel').append('<h4>' + $(this).find('title').text() + '</h4><p>' + $(this).find('link').text() + '</p>');
    });
  },
  error:function(){
    // failed request; give feedback to user
    $('#ajax-panel').html('<p class="error"><strong>Oops!</strong> Try that again in a few moments.</p>');
  }
});
{% endhighlight %}

In this case, I’m loading my site’s RSS feed into a `<div/>` with an ID of `ajax-panel`. What does it look like exactly, you ask? Let’s try it out.

<div id="ajax-panel"></div>
<div class="ajax-panel-actions">
  <input id="load-feed" type="button" value="Load the RSS feed now!" /> <input id="load-feed-fail" type="button" value="Try a FAILED AJAX Request" />
</div>

<style type="text/css">
#ajax-panel { background: #f5f5f5; border: 1px #ddd solid; padding: 20px; margin: 0 0 5px 0; } .loading { padding: 50px 0; text-align: center; }
</style>
<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js?ver=1.10.2'></script>
<script type="text/javascript" src="/assets/js/the-perfect-ajax.js"></script>

### Data Types

We’re loading an RSS feed in this example, so the AJAX function is designed to interpret XML data. jQuery AJAX also understands a number of other data formats, such as HTML, plain text, and even JSON. Find out more about data types at the [jQuery AJAX documentation page](https://api.jquery.com/jQuery.ajax/).

### Loading Image

Did you notice the spinning loading image? In the `beforeSend` function, we’re appending a loading image to our AJAX panel, and we’re then taking it out when a request has completed. If you’re not already aware, be sure to check out the very handy website, [Ajaxload](https://www.ajaxload.info/). This site allows you to quickly create _spinner_ images of any size and color. They have an impressive array of bars, circles, flowers, and the like, so all your design needs should be satiated by the array of options they provide. It’s always a good idea to include a loading image when working with AJAX requests &mdash; depending on the client’s connection speed and a number of other variables, the time it takes to complete a request can vary. Don’t assume it will be lickity-split and lightning fast every time. Give your users some feedback to let them know that you’re working on it.

### POST Data

You may have noticed that we’re using `POST` as the request type. `POST` requests works just like `GET` requests, except you get the added flexibility to also send data and other variables along with your request. We sent some dummy data that isn’t used by the RSS feed (`data: { postVar1: 'theValue1', postVar2: 'theValue2' }`), so feel free to change or omit this line of code in order to customize your AJAX request function. As an example, you could send a variable like `userId: '45'` to a custom PHP script that in return sends you information about a particular user. The possibilities are endless!

## Remember the Search

Take what you’ve learned and venture into the wide world of web development armed with the knowledge you now possess. Destroy post-backs wherever they may live, and always remember that Google hates AJAX and won’t interpret anything on your page that’s loaded via script! Good luck, and happy styling.
