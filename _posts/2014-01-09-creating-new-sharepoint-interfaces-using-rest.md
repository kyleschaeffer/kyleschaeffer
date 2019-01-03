---
id: 1452
title: Creating New SharePoint Interfaces Using REST
date: 2014-01-09T12:18:21+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=1452
permalink: /creating-new-sharepoint-interfaces-using-rest
redirect_from:
  - /sharepoint/creating-new-sharepoint-interfaces-using-rest
categories:
  - SharePoint
---
Recently, [a friend and colleague](http://blog.helloitsliam.com/), much more savvy in the art of code than I, showed me how to do something that opened a door. I knew it was there, I was aware of the capabilities, but I never really understood the power of REST services until now. Very simply, SharePoint’s REST web services allow you to get SharePoint data from a number of data end-points like lists, libraries, navigation, or the search service. This may seem exceedingly obvious to any SharePoint developer, but for UX guys like me who are more focused on the interface and design, it’s new ground.

After toying with SharePoint’s REST web services, I quickly realized that by using a bit of JavaScript, HTML, and CSS, I could build nearly anything in any way I could imagine. I could build my own custom web parts, custom navigation menus, or even entirely new SharePoint interfaces using completely customized HTML and CSS. Keep in mind that I’m not recommending this be the standard approach for any SharePoint project. We should all give due consideration to things like search optimization and accessibility, which are major drawbacks of the REST approach. REST web services require JavaScript to operate, and if someone or something visits your SharePoint portal without executing JavaScript (like a search crawler), RESTful content won’t be indexed. RESTful navigation won’t be crawled. Nonetheless, it’s an exciting technology that I can’t help but explore.

## What is SharePoint REST?

REST, or Representational State Transfer, is a standardized technology used in a many web-based platforms to transfer data to your web browser. Microsoft has made available a number of REST web services within the SharePoint product. Using JavaScript, we can make a “call” to these web services, and in turn SharePoint sends information about SharePoint content. Let’s start by looking at a very basic REST JavaScript example.

{% highlight js %}
$.ajax({
  type: 'GET',
  headers: {
    'accept': 'application/json;odata=verbose'
  },
  url: '/_api/web/lists/getbytitle('Pages')/items',
  success: function(data){
    console.log(data);
  }
});
{% endhighlight %}

In this example, I’m using a [jQuery AJAX request](http://api.jquery.com/jquery.ajax/) to access SharePoint’s REST services. Note that this will require the jQuery library to be loaded on the page before the code will work. The most important element of this REST request is the `url` parameter. In this case, our request is being made to:

{% highlight text %}
/_api/web/lists/getbytitle('Pages')/items
{% endhighlight %}

This URL tells SharePoint that we are looking at a list or library called `Pages` located at the root of our site domain (`http://yourdomain.com/Pages`). To query a different URL or even a subsite, simply change the request URL. In the `success` function, we are using `console.log(data)` to show the results inside the console of the web browser. Almost every web browser has a console that you can view by turning on developer or inspection tools in the browser settings. After running our script on a SharePoint page, the console looks something like this (screenshot taken in Google Chrome):

![JavaScript Console Screenshot](/assets/img/rest-console.png)

While this may look like nonsense, it’s actually real SharePoint data representing the documents located in the Pages library of my SharePoint site. Exploring the console will reveal things like the page title, page content, author, modified or created dates, and more. SharePoint wraps all of this information up inside a JSON object called `d`. We can now use this information to do something more useful. Let’s change our script to utilize the `d` object:

{% highlight js %}
$.ajax({
  type: 'GET',
  headers: {
    'accept': 'application/json;odata=verbose'
  },
  url: '/_api/web/lists/getbytitle('Pages')/items',
  success: function(data){
    $(data.d.results).each(function(){
      $('#DeltaPlaceHolderMain').append('<h2>' + this.Title + '</h2><p>Modified on ' + this.Modified + '.</p>');
    });
  }
});
{% endhighlight %}

In this example, we’re taking each result returned by SharePoint’s REST services and appending it to the page. This is the true power of SharePoint REST services, in that we can actually create and modify content within the browser window using the information we’ve received from the web services. The result should look something like this, with one result for each page in the library:

![SharePoint Script Screenshot](/assets/img/rest-example.png)

## Building an entirely new interface

This simple example shows how we can both retrieve and manipulate SharePoint data using the REST web services. If we look at what we’ve done, however, we can start to see the power of this technology. We can essentially get any information within our SharePoint site and display it in any HTML format that we’d like. We can add our own CSS classes, style the elements with CSS, and make them interactive using JavaScript. Putting all of these things together makes for a powerful technique where we can build absolutely anything within the browser window.

As an example, I created a custom SharePoint list that contains data I will display using REST services. This is simple SharePoint list data, boring and uneventful. The normal SharePoint interface looks something like this:

![SharePoint List Screenshot](/assets/img/rest-list.png)

Using REST, however, we can display this data in any creative format we can imagine. Using the same technique outlined in this post, I have taken this list data and displayed it in a full screen PowerPoint-like format. Users can swipe, touch, click, or key their way from slide to slide, and each slide is enhanced with CSS3 transition effects and HTML5 optimizations. This is the result:

![SharePoint REST Slide Example 1](/assets/img/rest-slide1.png)

It’s an entirely new interface, and doesn’t even remotely resemble what we know as SharePoint. I’ve added multiple items to the list, and navigating to the next slide shows a completely new layout:

![SharePoint REST Slide Example 2](/assets/img/rest-slide2.png)

While we started out with a simple example of showing page titles within the SharePoint content area, in this example we’ve built an entirely new interface from the ground up. This is an interface that fills the screen and doesn’t even remotely resemble what we know as SharePoint. Using REST as our source of SharePoint data, the options for customization are nearly limitless.

A short video of this functionality perhaps better demonstrates the final product:

<div class="video-container">
  <iframe src="//www.youtube.com/embed/R96EA1vewys?rel=0" height="240" width="320" allowfullscreen="" frameborder="0"></iframe>
</div>

## The devil’s advocate

I want to reiterate that I’m not advocating for the abandonment of established techniques like master pages, page layouts, and CSS customization. This is merely another tool in our collective UX and customization toolbox, and should be used accordingly. The aforementioned concerns with search optimization and accessibility are likely the most prominent argument against using these techniques to present your SharePoint information, but that doesn’t mean we can’t utilize them to progressively enhance the experience for our users who can take advantage of the amazing new features of HTML5 and CSS3.

Additionally, I shan’t forget the amazing developers who have known about and have used this technology for years. It’s all new to me, and that has me excited, but in truth I’m merely following in the footsteps of people like [Marc Anderson](http://sympmarc.com/) and his [SPServices](https://spservices.codeplex.com/) library, which makes great use of SharePoint’s web services and has done so for years. Thanks to Marc and many others, we are perpetually pushing the limits of what we can do with the SharePoint interface.

This article was originally posted on the [Protiviti SharePoint Solutions blog](http://sharepoint.protiviti.com/blog/Lists/Posts/Post.aspx?ID=79).
