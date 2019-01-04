---
id: 964
title: 'From “Developer” to “Designer”'
date: 2011-08-25T11:34:16+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=964
permalink: /from-developer-to-designer
redirect_from:
  - /user-experience/from-developer-to-designer/
categories:
  - User Experience
tags:
  - Design
  - Web Browsers
---
It’s easy to forget how a website really works. I mean _really works_. I’ve had the pleasure of working with many brilliant and talented developers (programmers) who could bend the functionality of any application or server-side platform at the drop of a hat. They are problem-solvers, as is everyone in this industry of the online.

With most developers, I’ve found that there can be a disconnect between how I understand websites, and how they’ve come to understand them. Not just _a_ disconnect: _The Disconnect_. If you work in a team environment, you know the feeling. I say “element,” and you say “control.” I say “script,” and you say “method.” Most developers are ultimately, completely, and entirely focused on the server-side application.

That’s okay. I need my developers, and they need me. It’s a good relationship for all of us, with our complimentary skills, tools, and techniques. They make it work, and I make it look good.

## How to Connect

Overcoming the _Disconnect_ is all about education, on both sides of the fence. Developers and designers alike would benefit from understanding how the technology that they use comes together. The grand finale of everything that we do online ends up in a single place, where it can be seen, read, clicked, and tested: the browser window.

As a designer, that’s where my beautiful designs will end up, and they somehow need to be translated from Photoshop into HTML and CSS that works well with the server-side application. Good designers understand the technology before they create the designs. Likewise, as developers, the controls and methods that you create are all somehow translated into HTML, whether you’ve recognized that or not. Understanding the output of what you do in the application is just as important as making the application work.

## Don’t Forget the Browser

This is where it all ends up. Everything that we do as designers, developers, project managers, or architects: it all comes together in the browser window. The browser is the tool that is used to present all of your hard work, everything that you’ve done throughout an entire project. With so much responsibility resting upon the shoulders of the browser, why is it that so many people ignore it completely?

Back in _The Day_, the browser is all there was. In 1989, Tim Berners-Lee created the world’s first web server. When requested, it _served_ up documents to be viewed inside the very first web browser. These documents were pure HTML, and the browser interpreted that language in order to create Hyper-Text documents that could be _linked_ together. As you probably know, this simple concept caught on, and by the mid 1990’s, the Internet had become arguably the most influential product of Man in the 20th century.

Everyone that works in the industry of the world wide web should pay their respects to the oft-neglected browser. It has so much power, and it is the tool that allows us to do what we do. The browser is everything. The W3C and WHATWG can make all the recommendations they want: nothing really happens until browsers support it. In the mid 2000’s, the W3C started working on a recommendation called XHTML 2.0. It failed. The browser manufacturers didn’t like it, and that’s why we’re now working with HTML5 instead of XHTML2. Similarly, Microsoft created something called the XMLHTTPRequest in the early- to mid-2000’s, and everyone loved it. The major browsers quickly adopted this technology, and AJAX was born.

The point is, the browser truly has the power in web application development. It doesn’t matter if you’re a programmer or a designer: you need to understand how technology works inside the confines of this little window. In all the amazing technology that surrounds the Internet, it’s really based on a few simple languages: HTML, CSS, and JavaScript.

## Making Requests

Web browsers are fairly simple applications. In essence, they do two things: make requests, and handle responses. A request might be something like “show me the document at KyleSchaeffer.com,” or “give me the image at /images/kittens.jpg.” The server that you’re requesting from then responds and the browser does something with the response. It all sounds very simple, but it’s so easy to forget this fundamental layer of web technology. I’ve helped troubleshoot dozens of web applications, and my first question is always “What request is the browser making?”

This entire process is called an **HTTP request**. HTTP requests are sent by your browser every time you type something into the address bar. The first requests is almost always an HTML document, and then the browser subsequently makes additional requests for things like CSS files, JavaScript, and images. Even if your web application is running on PHP or ASP.NET or SharePoint, the server is returning an HTML document, which subsequently loads additional resources. Simple, right?

### 1. The Request

Every HTTP request has a **URI**, or Uniform Resource Identifier. That’s a fancy way of saying the _address_ of the resource you’re requesting. The address can be both absolute (`https://kyleschaeffer.com/images/kittens.jpg`) or relative (`/images/kittens.jpg`). The browser sends this request to the “Internet,” which routes the request to the appropriate server, somewhere _out there_. The browser then waits for a response.

### 2. The Response

After sending a request, the server that you requested the document from will send back a _response_. Again, the browser handles the responses, and each resource that is requested is handled differently. First of all, the browser reads the HTTP **response code**, which is an indication of the status of your request. The most common HTTP response codes are:

  1. **200 OK** &mdash; The most common response; the resource you requested was found
  2. **301 Moved Permanently** &mdash; The resources has moved, and the browser will redirect the request to the new location
  3. **304 Not Modified** &mdash; The resource was found, and your browser already has the most recent version in the browser cache (yay!)
  4. **401 Unauthorized** &mdash; You need to sign in to see this resource
  5. **403 Forbidden** &mdash; You’re not allowed to see this
  6. **404 Not Found** &mdash; The resource you requested does not exist
  7. **408 Request Time-Out** &mdash; That took too long, sorry
  8. **500 Internal Server Error** &mdash; Something went wrong!

My descriptions of each response are less than technical, but you get the idea. If you’ve ever wondered what the “404” in “404 Not Found” meant, it’s the HTTP response code for “not found.” For a more comprehensive list of HTTP response codes, visit the [W3C’s documentation](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).

Another important element of the HTTP response is the **Content Type**. This tells your browser how to handle the requested resource when it’s downloaded. Unlike on your computer, your browser does not decide how to use a resource based on it’s file extension! It’s all about the content type. Some of the more clever server-side programmers can actually utilize this element of the HTTP response to create server-side scripts that actually disguise themselves as other types of content (like a PHP script pretending to be JSON or XML).

### 3. Execution

At this point, the browser now knows the HTTP response code, and the resource content type. Using this information, it’s time to make something happen. The browser downloads the resource, and presents it inside the browser window. Browsers can sometimes handle resource requests differently, so this is where you get into the nuances of browser testing. One browser might handle HTML and CSS requests slightly different from another, so testing your applications is merely a practice of testing how these HTTP responses are handled.

## From “Developer” to “Designer”

Bridging the divide between developers and designers is all about understanding how the different technologies of the web come together. The browser window is the one place where the user experience, the architecture, the design, the program, the database, and everything else that goes on behind the scenes comes to fruition and is finally presented. Clients pay for you to meet needs and requirements, but what they ultimately expect is something that appears inside the little box that they call the Internet. Embrace it, learn it, love it, know it inside and out, and you’ll find that disconnecting from _The Disconnect_ is not so difficult after all.
