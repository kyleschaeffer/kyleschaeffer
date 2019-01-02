---
id: 638
title: Taking it Down a Notch
date: 2010-09-12T18:50:12+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=638
permalink: /user-experience/taking-it-down-a-notch/
categories:
  - User Experience
tags:
  - CSS
  - XHTML
---
Bigger, better, and bolder. That&#8217;s the direction of things. The art of the interface is a little more complex than it was yesterday. We have new techniques, new technology (languages and libraries and acronyms, oh my), and even more bandwidth to back it all up. What to do with all this power? The possibilities are nearly limitless. I say, _take it down a notch_.<!--more-->

## Let me explain&#8230;

Now, don&#8217;t get me wrong. I&#8217;m not suggesting that we participate in an exercise of mediocrity; quite the opposite, in fact. I merely suggest that we take a step back and look at interface design on the web as a whole. There&#8217;s something so beautiful about it, isn&#8217;t there? Perhaps the beauty lies in the very nature of the web; a rare medium in which art and logic can collide. As you well know, the fusion of these two seemingly opposing forces can sometimes end in a gruesome battle between form and function. That simply shouldn&#8217;t be the case.

The form of an interface should support the application&#8217;s underlying function, and vice versa. The battle that undoubtedly ensues between these two elements is ultimately what damages the design, and any compromise by either party can result only in mediocrity. As the interface designer, it&#8217;s your job to cool the tempers on both sides of the development fence, and to facilitate a relationship that fosters that holy center ground, which at times can seem quite elusive and difficult to attain.

## A practice of simplicity

The battle is set. The warriors are ready to fight. In the blue corner, Logic eyes its formless opponent with a cold-hearted certainty. You are the mediator, and the time has come for you to tame your design into something everyone can be happy about. Logic is your first adversary. This is the underlying technology and function of your design. It is simple and unforgiving. Treat it as such.

In terms of design, this is the underlying <acronym title="HyperText Markup Language">HTML</acronym> and server-side functionality behind the pages. It needs to be simple, semantic, accessible, and structured in a way that makes sense to the logic of your application. Ask yourself with each snippet of markup that you type in, &#8220;What does this ultimately do?&#8221; Think about the data of what you&#8217;re marking up, and not the appearance of it. We&#8217;ll worry about the form of your design later.

### A simple example {#example-logo}

![Site header and logo concept](https://kyleschaeffer.com/wp-content/uploads/2010/09/taking-it-down-logo.png "Site header and logo concept")

How would you implement your site&#8217;s logo? Before you drop in an `<img/>` or a `<div/>`, think about what the logo _really_ is. What does it (logically) do? In fact, it&#8217;s a header – it is used to describe or encapsulate the content below it. Use the `<h1/>` tag – that&#8217;s what it&#8217;s for. I don&#8217;t care about your silly logo or designer font. My name is Logic, and I demand simplicity. Give me what I want:

<pre>&lt;h1 class="medazio-logo"&gt;Medazio: a completely made up word.&lt;/h1&gt;</pre>

The visual appearance of our site header is not entirely simplistic, but the <acronym title="HyperText Markup Language">HTML</acronym> markup for it certainly is.

### A little complexity, please {#example-comment}

![Site comments concept](https://kyleschaeffer.com/wp-content/uploads/2010/09/taking-it-down-comment.png "Site comments concept")

How would you implement a design for this comment? As soon as you look at this image, it&#8217;s easy to see the layout, the colors, or even the position of the data. Now, take a step back and remove the appearance of the image from your mind. We&#8217;re working with the logic of the data, remember? The position and orientation of the data simply doesn&#8217;t matter right now. Don&#8217;t create classes like **commentBottom** – you&#8217;ll probably kick yourself later when you decide to switch things around a bit. Use something more descriptive of the actual data contained in your markup, like **comment-description** or **comment-meta**. In our case, we&#8217;ll do something very similar:

<pre>&lt;ol class="comments"&gt;
  &lt;li class="comment <strong>hreview vcard item</strong>"&gt;
    &lt;p class="<strong>description</strong>"&gt;Lorem ipsum dolor...&lt;/p&gt;
    &lt;p class="comment-meta <strong>reviewer</strong>"&gt;
      &lt;img class="<strong>photo</strong>" src="/path/to/kyle.png" alt="Kyle" /&gt;
      &lt;a class="<strong>fn url</strong>" href="/profiles/kyle"&gt;Kyle&lt;/a&gt; @
      &lt;span class="<strong>dtreviewed</strong>" title="2010-02-18T21:49:38-07:00"&gt;
        Feb 18, 2010 9:49 pm
      &lt;/span&gt;
    &lt;/p&gt;
  &lt;/li&gt;
&lt;/ol&gt;</pre>

Notice that we&#8217;ve used self-describing class names for most of the data within the comment. The class names in **bold** are not required, but we&#8217;ve added them in order to adhere to the very useful [hreview microformat](http://microformats.org/wiki/hreview). This helps define your data beyond what can be done with <acronym title="HyperText Markup Language">HTML</acronym> tags and attributes. Additionally, we can append classes together to reduce the need to create extraneous style selectors later on. Logic is now appeased.

## And in the red corner&#8230;

Meet Art, an element of design not so easily defined as Logic. Logic suffers without Art, its disobedient and relentlessly unpredictable counterpart. It&#8217;s not &#8220;art&#8221; by any traditional sense of the word, no, but it is art nonetheless. It&#8217;s bold and daring and difficult. Art is what makes an interface attractive. I dare not attempt to encapsulate the process by which one creates attractive design (it&#8217;s a creative process, after all), but I will dabble in the application of it.

Our tool for artistic application is the style sheet. We will use <acronym title="Cascading Style Sheet">CSS</acronym> to infuse our structured <acronym title="HyperText Markup Language">HTML</acronym> with our creative ideas. Using the aforementioned examples, let&#8217;s see how we can bring our flat and unforgiving concept images into interactive life.

### Making the header happen

Remember the [logo](#example-logo)? Let&#8217;s take our cold-hearted <acronym title="HyperText Markup Language">HTML</acronym> and add some &#8220;fresh,&#8221; <acronym title="Cascading Style Sheet">CSS</acronym>-style.

<pre>.medazio-logo {
   width: 223px;
   height: 31px;
   background: url(medazio-logo.png);
   text-indent: -9999px;
}</pre>

We&#8217;re using image replacement to bump that pesky header text out of the way (make way, fabulous logo coming through). The human eye is appeased by the appearance of our logo, and likewise the eye of the machine (search crawlers, screen readers, etc.) is equally appeased by the semantic structure of our <acronym title="HyperText Markup Language">HTML</acronym> document. Even more exciting is the fact that our style sheet actually supports the logic of our design. We&#8217;re achieving the appearance that our design demands without compromising the integrity of its structure or function. Much rejoicing is in order.

### Adding style to our comments

Similarly, let&#8217;s take the same approach with our [comment <acronym title="HyperText Markup Language">HTML</acronym>](#example-comment):

<pre>ol.comments {
   margin: 0;
   padding: 0;
}
li.comment {
   list-style: none;
   margin: 0 0 20px 0;
}
li.comment p.description {
   background: #f8f8f8;
   border-bottom: 4px solid #eee;
   margin: 0;
   padding: 20px;
}
li.comment p.comment-meta {
   background: url(chat-arrow.png) no-repeat 37px 0;
   padding: 5px 0 0 0;
}</pre>

With a few simple lines of <acronym title="Cascading Style Sheet">CSS</acronym>, our sensationally semantic <acronym title="HyperText Markup Language">HTML</acronym> comment becomes exactly what we always dreamed it would be. The best part? Both the technology and the design of our application are meeting in the middle. Better that than we, the designers, having to force the union in a rather rude and unsightly manner.

## You, the negotiator

The cruel truth of the matter is that not every design element will be so simple or quite as easy to negotiate as this. These are simple examples of a much bigger concept that takes time and practice to master. You, as a designer, are the negotiator of both logic and art. You are forced into a difficult role in which you must understand both the creative aspirations and the technical limitations of your project. Most design professionals fall on either one side or the other of the art vs. technology skill-set. Forcing yourself into an impartial role between the two is a difficult, yet imperative step in your journey to design bliss.