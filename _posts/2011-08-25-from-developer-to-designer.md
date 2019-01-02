---
id: 964
title: 'From &#8220;Developer&#8221; to &#8220;Designer&#8221;'
date: 2011-08-25T11:34:16+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=964
permalink: /user-experience/from-developer-to-designer/
categories:
  - User Experience
tags:
  - Design
  - Web Browsers
---
It&#8217;s easy to forget how a website really works. I mean _really works_. I&#8217;ve had the pleasure of working with many brilliant and talented developers (programmers) who could bend the functionality of any application or server-side platform at the drop of a hat. They are problem-solvers, as is everyone in this industry of the online.<!--more-->

With most developers, I&#8217;ve found that there can be a disconnect between how I understand websites, and how they&#8217;ve come to understand them. Not just _a_ disconnect: _The Disconnect_. If you work in a team environment, you know the feeling. I say &#8220;element,&#8221; and you say &#8220;control.&#8221; I say &#8220;script,&#8221; and you say &#8220;method.&#8221; Most developers are ultimately, completely, and entirely focused on the server-side application.

That&#8217;s okay. I need my developers, and they need me. It&#8217;s a good relationship for all of us, with our complimentary skills, tools, and techniques. They make it work, and I make it look good.

## How to Connect

Overcoming the _Disconnect_ is all about education, on both sides of the fence. Developers and designers alike would benefit from understanding how the technology that they use comes together. The grand finale of everything that we do online ends up in a single place, where it can be seen, read, clicked, and tested: the browser window.

As a designer, that&#8217;s where my beautiful designs will end up, and they somehow need to be translated from Photoshop into HTML and CSS that works well with the server-side application. Good designers understand the technology before they create the designs. Likewise, as developers, the controls and methods that you create are all somehow translated into HTML, whether you&#8217;ve recognized that or not. Understanding the output of what you do in the application is just as important as making the application work.

## Don&#8217;t Forget the Browser

This is where it all ends up. Everything that we do as designers, developers, project managers, or architects: it all comes together in the browser window. The browser is the tool that is used to present all of your hard work, everything that you&#8217;ve done throughout an entire project. With so much responsibility resting upon the shoulders of the browser, why is it that so many people ignore it completely?

Back in _The Day_, the browser is all there was. In 1989, Tim Berners-Lee created the world&#8217;s first web server. When requested, it _served_ up documents to be viewed inside the very first web browser. These documents were pure HTML, and the browser interpreted that language in order to create Hyper-Text documents that could be _linked_ together. As you probably know, this simple concept caught on, and by the mid 1990&#8217;s, the Internet had become arguably the most influential product of Man in the 20th century.

Everyone that works in the industry of the world wide web should pay their respects to the oft-neglected browser. It has so much power, and it is the tool that allows us to do what we do. The browser is everything. The W3C and WHATWG can make all the recommendations they want: nothing really happens until browsers support it. In the mid 2000&#8217;s, the W3C started working on a recommendation called XHTML 2.0. It failed. The browser manufacturers didn&#8217;t like it, and that&#8217;s why we&#8217;re now working with HTML5 instead of XHTML2. Similarly, Microsoft created something called the XMLHTTPRequest in the early- to mid-2000&#8217;s, and everyone loved it. The major browsers quickly adopted this technology, and AJAX was born.

The point is, the browser truly has the power in web application development. It doesn&#8217;t matter if you&#8217;re a programmer or a designer: you need to understand how technology works inside the confines of this little window. In all the amazing technology that surrounds the Internet, it&#8217;s really based on a few simple languages: HTML, CSS, and JavaScript.

## Making Requests

Web browsers are fairly simple applications. In essence, they do two things: make requests, and handle responses. A request might be something like &#8220;show me the document at KyleSchaeffer.com,&#8221; or &#8220;give me the image at /images/kittens.jpg.&#8221; The server that you&#8217;re requesting from then responds and the browser does something with the response. It all sounds very simple, but it&#8217;s so easy to forget this fundamental layer of web technology. I&#8217;ve helped troubleshoot dozens of web applications, and my first question is always &#8220;What request is the browser making?&#8221;

This entire process is called an **HTTP request**. HTTP requests are sent by your browser every time you type something into the address bar. The first requests is almost always an HTML document, and then the browser subsequently makes additional requests for things like CSS files, JavaScript, and images. Even if your web application is running on PHP or ASP.NET or SharePoint, the server is returning an HTML document, which subsequently loads additional resources. Simple, right?

### 1. The Request

Every HTTP request has a **URI**, or Uniform Resource Identifier. That&#8217;s a fancy way of saying the _address_ of the resource you&#8217;re requesting. The address can be both absolute (`https://kyleschaeffer.com/images/kittens.jpg`) or relative (`/images/kittens.jpg`). The browser sends this request to the &#8220;Internet,&#8221; which routes the request to the appropriate server, somewhere _out there_. The browser then waits for a response.

### 2. The Response

After sending a request, the server that you requested the document from will send back a _response_. Again, the browser handles the responses, and each resource that is requested is handled differently. First of all, the browser reads the HTTP **response code**, which is an indication of the status of your request. The most common HTTP response codes are:

  1. **200 OK** &#8211; The most common response; the resource you requested was found
  2. **301 Moved Permanently** &#8211; The resources has moved, and the browser will redirect the request to the new location
  3. **304 Not Modified** &#8211; The resource was found, and your browser already has the most recent version in the browser cache (yay!)
  4. **401 Unauthorized** &#8211; You need to sign in to see this resource
  5. **403 Forbidden** &#8211; You&#8217;re not allowed to see this
  6. **404 Not Found** &#8211; The resource you requested does not exist
  7. **408 Request Time-Out** &#8211; That took too long, sorry
  8. **500 Internal Server Error** &#8211; Something went wrong!

My descriptions of each response are less than technical, but you get the idea. If you&#8217;ve ever wondered what the &#8220;404&#8221; in &#8220;404 Not Found&#8221; meant, it&#8217;s the HTTP response code for &#8220;not found.&#8221; For a more comprehensive list of HTTP response codes, visit the [W3C&#8217;s documentation](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).

Another important element of the HTTP response is the **Content Type**. This tells your browser how to handle the requested resource when it&#8217;s downloaded. Unlike on your computer, your browser does not decide how to use a resource based on it&#8217;s file extension! It&#8217;s all about the content type. Some of the more clever server-side programmers can actually utilize this element of the HTTP response to create server-side scripts that actually disguise themselves as other types of content (like a PHP script pretending to be JSON or XML).

### 3. Execution

At this point, the browser now knows the HTTP response code, and the resource content type. Using this information, it&#8217;s time to make something happen. The browser downloads the resource, and presents it inside the browser window. Browsers can sometimes handle resource requests differently, so this is where you get into the nuances of browser testing. One browser might handle HTML and CSS requests slightly different from another, so testing your applications is merely a practice of testing how these HTTP responses are handled.

## From &#8220;Developer&#8221; to &#8220;Designer&#8221;

Bridging the divide between developers and designers is all about understanding how the different technologies of the web come together. The browser window is the one place where the user experience, the architecture, the design, the program, the database, and everything else that goes on behind the scenes comes to fruition and is finally presented. Clients pay for you to meet needs and requirements, but what they ultimately expect is something that appears inside the little box that they call the Internet. Embrace it, learn it, love it, know it inside and out, and you&#8217;ll find that disconnecting from _The Disconnect_ is not so difficult after all.