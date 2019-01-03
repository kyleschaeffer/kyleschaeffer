---
id: 612
title: Designing Body Type
date: 2010-07-15T17:26:55+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=612
permalink: /designing-body-type
redirect_from:
  - /user-experience/designing-body-type
categories:
  - User Experience
tags:
  - CSS
  - Design
  - Text
---
Header text gets all the love, doesn’t it? From Photoshop to the browser window, the focus seems to be on design elements like logos, navigation, and of course, header type. It’s great fun to use tools like [Typekit](http://typekit.com) to make your header text something a little less than ordinary. It defines your site, gives you a unique look and feel, and gives readers that oh-so-scannable sensation they know and love. When you really think about it, however, readers aren’t there for the header text. The headers serve as an essential tool to quickly find what you’re looking for, but the real prize here is the body text, isn’t it? This is where your information is, this is where you write and communicate to readers, and this is an area of design that cannot be neglected. Sadly, it often is.

Body text is often an after-thought in design. We have all been guilty of this at some point in our careers. When you implement your CSS, you might simply throw a `body { font-family: blah, blah blah; }` into the CSS, and after that you move on. You’ve probably figured out the whole base font size _thing_ too, which can help, but there’s so much more you can do. Let’s look at a number of things to help your body type become something a bit more visually appealing and readable.

## Text Color

Hopefully you’ve already figured this one out, but I dare not exclude it for the sake of accuracy. Probably the single most important thing you can do to your body text is change both the color of the text as well as the background color of the area shown behind the text. Here’s a few pointers:

* Readers generally prefer dark text on a light background. There are a few impressive exceptions to this rule, but for the most part, it’s best to stick with the old “dark on light” tried-and-true formula.
* While contrast is important, don’t take it too far. Black text (`#000000`) on a white background (`#ffffff`) is perhaps a bit too much contrast. Opting for a slightly lighter shade of text can make it easier on your readers’ eyes. If I’m working on a white background, I generally choose a font color that is at or in the general vicinity of `#666666` (don’t be afraid to add a subtle hue of color too, but keep it dark).
* Add some variety by slightly changing the color of elements in your body text like darker `<strong>` text or lighter `<li>` items. You don’t have to stick with a single color for all text in the entire design.
* Keep the focus on your article or body text. If you have a sidebar or widgets that appear to the side of your actual body text, try lightening their text color (or reducing contrast with a different background color) to make sure that users focus on the real content of the page.

## Font Size

Another obvious and quite important element of your body text style is the font size. There are [a number of different ways](/css-font-size-em-vs-px-vs-pt-vs-percent) to establish a default font size for your text. While the method of setting your font sizes is a matter of debate, there are a few best practices you should be aware of.

* It’s easiest on your users to set the `body` font size at `62.5%`, and use `ems` to size your fonts from there (`.wrapper { font-size: 1.3em; }` would set the font size to 13 pixels in height).
* Choose a base font size of at least 12 pixels in height. There are exceptions to every rule, but you’ll find that users are frustrated by tiny font sizes, and are apt to leave a site even before using the handy browser zoom feature.
* Deviate from the base font size only where it makes sense in the overall theme of the design. Consistency is key. Set default CSS styles for things like the `<small>` tag and headers.

## Font Family

Fonts are a bit tricky in web design, basically because you’re forced to choose one of about ten fonts that are used on every other website in the world. [Typekit](http://typekit.com) is great for header text, but you’re better off using regular web-friendly fonts for your body text. Here’s a few pointers:

* **Serif vs. Sans-Serif:** First choose the font style you’ll be working with. Choose something that fits with your design’s overall theme or concept. Serif fonts like Times and Georgia give your site a vintage and book-like feel. They are flowing, artistic, and regal in theme. Sans-serif fonts like Arial or Helvetica can be used to portray a clean, professional, and strong atmosphere in your design.
* Choose a [common font](http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html) for your body text that is available on both Mac and PC platforms. There are some great fonts on the Mac, but you’ll want to design your site so that it looks good no matter what device is accessing it.
* It’s completely acceptable to add a “nice to have” font into your design, such as Helvetica or Myriad Pro. These fonts can gracefully degrade to Arial without jarring the layout of your page too much.
* Georgia and Times are not the only serif fonts available! Try experimenting with fonts like Book Antiqua or Platino Linotype, which have a more book-like and artistic feel.
* Courier New is a great fixed-width font best used for displaying CSS, HTML, or some kind of code to your readers.
* Don’t forget other elements in your design! By default, text boxes, buttons, and select menus will not use the body font family and/or size, so make sure to set a consistent font on all elements in your design.
* Don’t use Comic Sans.

## Margin, Spacing, and Line Height

This is probably the most overlooked element of body type design. After you’ve developed the **character** design of your body type, take a step back and examine the **paragraph** style.

* Unless you specify otherwise, the lines of text in your design are drawn very close together, and it can be difficult for readers to follow as they read down the page. Add a bit of CSS such as `p { line-height: 1.5em; }` to make this text easier on the eyes.
* Likewise, paragraphs of text have default margins applied to them that may make them appear too close together or too far away from the headers that appear above them. Try adding some CSS such as `p { margin: 0 0 1.5em 0; }` to standardize the spacing around paragraphs.
* Paragraph text is not the only thing you’ll see in a page. Don’t forget to style other HTML elements like lists (`<ul>` or `<ol>`), the horizontal rule (`<hr />`), and block quotes or call-out boxes.

## Be Creative

Following these rules isn’t a guaranteed way to make your body type look amazing, and breaking any or all of these rules certainly doesn’t guarantee that your design will be ugly and fail. In the end, it’s all about being creative and paying attention to all the tiny details that go into making a website look amazing. The difference between a good design and a bad one can be very subtle. Create something fun, stick to a theme, and take note of every visual detail that appears on the page, body type included.
