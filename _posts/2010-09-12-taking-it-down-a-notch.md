---
id: 638
title: Taking it Down a Notch
date: 2010-09-12T18:50:12+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=638
permalink: /taking-it-down-a-notch
redirect_from:
  - /user-experience/taking-it-down-a-notch/
categories:
  - User Experience
tags:
  - CSS
  - XHTML
---
Bigger, better, and bolder. That’s the direction of things. The art of the interface is a little more complex than it was yesterday. We have new techniques, new technology (languages and libraries and acronyms, oh my), and even more bandwidth to back it all up. What to do with all this power? The possibilities are nearly limitless. I say, _take it down a notch_.

## Let me explain&hellip;

Now, don’t get me wrong. I’m not suggesting that we participate in an exercise of mediocrity; quite the opposite, in fact. I merely suggest that we take a step back and look at interface design on the web as a whole. There’s something so beautiful about it, isn’t there? Perhaps the beauty lies in the very nature of the web; a rare medium in which art and logic can collide. As you well know, the fusion of these two seemingly opposing forces can sometimes end in a gruesome battle between form and function. That simply shouldn’t be the case.

The form of an interface should support the application’s underlying function, and vice versa. The battle that undoubtedly ensues between these two elements is ultimately what damages the design, and any compromise by either party can result only in mediocrity. As the interface designer, it’s your job to cool the tempers on both sides of the development fence, and to facilitate a relationship that fosters that holy center ground, which at times can seem quite elusive and difficult to attain.

## A practice of simplicity

The battle is set. The warriors are ready to fight. In the blue corner, Logic eyes its formless opponent with a cold-hearted certainty. You are the mediator, and the time has come for you to tame your design into something everyone can be happy about. Logic is your first adversary. This is the underlying technology and function of your design. It is simple and unforgiving. Treat it as such.

In terms of design, this is the underlying HTML and server-side functionality behind the pages. It needs to be simple, semantic, accessible, and structured in a way that makes sense to the logic of your application. Ask yourself with each snippet of markup that you type in, “What does this ultimately do?” Think about the data of what you’re marking up, and not the appearance of it. We’ll worry about the form of your design later.

### A simple example {#example-logo}

![Site header and logo concept](/assets/img/taking-it-down-logo.png)

How would you implement your site’s logo? Before you drop in an `<img/>` or a `<div/>`, think about what the logo _really_ is. What does it (logically) do? In fact, it’s a header – it is used to describe or encapsulate the content below it. Use the `<h1/>` tag – that’s what it’s for. I don’t care about your silly logo or designer font. My name is Logic, and I demand simplicity. Give me what I want:

{% highlight html %}
<h1 class="medazio-logo">Medazio: a completely made up word.</h1>
{% endhighlight %}

The visual appearance of our site header is not entirely simplistic, but the HTML markup for it certainly is.

### A little complexity, please {#example-comment}

![Site comments concept](/assets/img/taking-it-down-comment.png)

How would you implement a design for this comment? As soon as you look at this image, it’s easy to see the layout, the colors, or even the position of the data. Now, take a step back and remove the appearance of the image from your mind. We’re working with the logic of the data, remember? The position and orientation of the data simply doesn’t matter right now. Don’t create classes like **commentBottom** – you’ll probably kick yourself later when you decide to switch things around a bit. Use something more descriptive of the actual data contained in your markup, like **comment-description** or **comment-meta**. In our case, we’ll do something very similar:

{% highlight html %}
<ol class="comments">
  <li class="comment <strong>hreview vcard item</strong>">
    <p class="<strong>description</strong>">Lorem ipsum dolor...</p>
    <p class="comment-meta <strong>reviewer</strong>">
      <img class="<strong>photo</strong>" src="/path/to/kyle.png" alt="Kyle" />
      <a class="<strong>fn url</strong>" href="/profiles/kyle">Kyle</a> @
      <span class="<strong>dtreviewed</strong>" title="2010-02-18T21:49:38-07:00">
        Feb 18, 2010 9:49 pm
      </span>
    </p>
  </li>
</ol>
{% endhighlight %}

Notice that we’ve used self-describing class names for most of the data within the comment. The class names in **bold** are not required, but we’ve added them in order to adhere to the very useful [hreview microformat](http://microformats.org/wiki/hreview). This helps define your data beyond what can be done with HTML tags and attributes. Additionally, we can append classes together to reduce the need to create extraneous style selectors later on. Logic is now appeased.

## And in the red corner&hellip;

Meet Art, an element of design not so easily defined as Logic. Logic suffers without Art, its disobedient and relentlessly unpredictable counterpart. It’s not “art” by any traditional sense of the word, no, but it is art nonetheless. It’s bold and daring and difficult. Art is what makes an interface attractive. I dare not attempt to encapsulate the process by which one creates attractive design (it’s a creative process, after all), but I will dabble in the application of it.

Our tool for artistic application is the style sheet. We will use CSS to infuse our structured HTML with our creative ideas. Using the aforementioned examples, let’s see how we can bring our flat and unforgiving concept images into interactive life.

### Making the header happen

Remember the [logo](#example-logo)? Let’s take our cold-hearted HTML and add some “fresh,” CSS-style.

{% highlight css %}
.medazio-logo {
  width: 223px;
  height: 31px;
  background: url(medazio-logo.png);
  text-indent: -9999px;
}
{% endhighlight %}

We’re using image replacement to bump that pesky header text out of the way (make way, fabulous logo coming through). The human eye is appeased by the appearance of our logo, and likewise the eye of the machine (search crawlers, screen readers, etc.) is equally appeased by the semantic structure of our HTML document. Even more exciting is the fact that our style sheet actually supports the logic of our design. We’re achieving the appearance that our design demands without compromising the integrity of its structure or function. Much rejoicing is in order.

### Adding style to our comments

Similarly, let’s take the same approach with our [comment HTML](#example-comment):

{% highlight css %}
ol.comments {
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
}
{% endhighlight %}

With a few simple lines of CSS, our sensationally semantic HTML comment becomes exactly what we always dreamed it would be. The best part? Both the technology and the design of our application are meeting in the middle. Better that than we, the designers, having to force the union in a rather rude and unsightly manner.

## You, the negotiator

The cruel truth of the matter is that not every design element will be so simple or quite as easy to negotiate as this. These are simple examples of a much bigger concept that takes time and practice to master. You, as a designer, are the negotiator of both logic and art. You are forced into a difficult role in which you must understand both the creative aspirations and the technical limitations of your project. Most design professionals fall on either one side or the other of the art vs. technology skill-set. Forcing yourself into an impartial role between the two is a difficult, yet imperative step in your journey to design bliss.
