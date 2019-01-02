---
id: 1491
title: 'Making &lt;canvas&gt; Art'
date: 2014-04-30T15:00:22+00:00
author: Kyle
layout: post
guid: https://kyleschaeffer.com/?p=1491
permalink: /development/making-canvas-art/
categories:
  - Development
tags:
  - JavaScript
---
Got `<canvas>`? Focus your attention, if you will, to the top of this web document. The header area of my website includes animated &#8220;northern lights&#8221; of a sort, generated using HTML5&#8217;s new JavaScript rendering engine called `<canvas>`. Click anywhere on the page to generate new lights, each with randomized colors and trajectories that alter the appearance of the site header as they slowly move across the page.<!--more-->

If you&#8217;re not familiar with `<canvas>`, the best way to learn it is to see a simple example. The following HTML and JavaScript will generate an orange rectangle within the `<canvas>` area.

<pre>&lt;canvas id="example1" width="400" height="300"&gt;&lt;/canvas&gt;</pre>

<pre>// get the canvas
var canvas = document.getElementById('example1');

// get the "2d" context
var context = canvas.getContext('2d');

// change fill style to orange
context.fillStyle = '#ff7700';

// draw an orange rectangle
context.fillRect(0, 0, 400, 300);
</pre>

You always start a canvas drawing by finding the element in the web document and then selecting a &#8220;context.&#8221; In this case, the context is `2d`, because we want to make two-dimensional shapes within our canvas. After selecting a context, the [canvas API](http://www.w3schools.com/tags/ref_canvas.asp) contains tons of useful drawing features like fill styles, shapes, strokes, shadows, and a plethora of other features that allow us to make fancy alterations to our image area. The result of our script looks something like this:
  
<canvas id="example1" width="400" height="300"></canvas>
  
The great thing about `<canvas>` is that it&#8217;s a JavaScript API, meaning we can take advantage of all the great features of JavaScript like variables, events, loops, and the like. Let&#8217;s adapt our script to create a grid of smaller squares across our canvas area using a simple JavaScript loop.

<pre>&lt;canvas id="example2" width="400" height="300"&gt;&lt;/canvas&gt;</pre>

<pre>// get the canvas and context
var canvas = document.getElementById('example2');
var context = canvas.getContext('2d');

// orange fill style
context.fillStyle = '#ff7700';

// create squares in a loop
for(var x = 0; x &lt; canvas.width; x += 25){
  for(var y = 0; y &lt; canvas.height; y += 25){
    context.fillRect(x, y, 20, 20);
  }
}
</pre>

<canvas id="example2" width="400" height="300"></canvas>
  
In just a few lines of JavaScript, we were able to generate 192 squares in our canvas. This, in my opinion, is the true value of `<canvas>`. It allows us to leverage the processing power of the web browser to generate math-based geometry and drawings. With a bit of work and a lot of creativity, we can even harness this power for artistic effect.

### Animation

We&#8217;ll need to understand how to create an animation using `<canvas>` before we can continue. This is a little more difficult to do. First of all, please understand that it&#8217;s very easy to use the canvas API in a way that hinders the performance of your web browser. Drawing in a canvas is very processor-intensive, especially if you are constantly updating the drawing for things like animation. To help alleviate any performance issues, I&#8217;m going to use a new feature called `requestAnimationFrame`, that allows our web browser to decide how often to update the canvas, while maintaining optimal performance in our web document. This isn&#8217;t available in every browser, but fortunately Paul Irish has written an excellent poly-fill to add this capability to older web browsers. He writes about his script and this feature of the web browser [in his blog post, here](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/).

For the sake of brevity, I&#8217;m not going to include Paul&#8217;s script in my code examples, but you should use it in your own code. Using `requestAnimationFrame`, we can create a basic &#8220;animation loop&#8221; in our script. It looks something like this:

<pre>&lt;canvas id="example3" width="400" height="300"&gt;&lt;/canvas&gt;</pre>

<pre>// get the canvas
var canvas = document.getElementById('example3');
var context = canvas.getContext('2d');
context.fillStyle = '#ff7700';
var time = false;

// box position
var x = -100;

// animation loop
var loop = function(){
  
  // get time since last frame
  var now = new Date().getTime();
  var d = now - (time || now);
  time = now;
  
  // clear previously drawn rectangles
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // draw new rectangle
  context.fillRect(x, 100, 100, 100);
  
  // advance horizontal position
  x += 0.1 * d;
  
  // reset horizontal position
  if(x &gt; canvas.width){
    x = -100;
  }
  
  // request next frame
  requestAnimationFrame(loop);
  
};

// first frame
loop();
</pre>

<canvas id="example3" width="400" height="300"></canvas>
  
When using animations in your canvas element, all drawing should be performed by a repeatable function. In our example, we&#8217;re using the `loop()` function to draw a square in our canvas. The `requestAnimationFrame` function tells the browser to automatically choose when to next draw the frame, based on the available processing power. The result is our `loop()` running over and over, advancing our orange box from left to right. Notice that we use the `d` variable (delta) to determine the time between frames in milliseconds. This is an important addition to normalize the speed of our animation. Without it, our animation would play much faster on computers with better processors, and in a few years when computers gain even more processing power, our animation could be so fast as to confuse or disorient users. Using the delta variable, we can specify a speed per millisecond. In our example, the position of the square advances by `0.1*d`, or 0.1 pixels every millisecond, which translates into 100 pixels per second. No matter the speed of your processor, the animation will always take the same amount of time to complete. 

### The artistic element

Now that we understand the canvas element and how to animate it, we can put this together with some artistic creativity to create something more intriguing. In this next example, we&#8217;ll randomly generate colored circles and give them random trajectories within our canvas. By drawing the circles using a gradient rather than a solid color, our &#8220;northern lights&#8221; script will come to life.

<pre>&lt;canvas id="example4" width="400" height="300" style="background-color: #<span style="color: #222222;">0e74a2;"</span>&gt;&lt;/canvas&gt;</pre>

<pre>// get the canvas
var canvas = document.getElementById('example4');
var context = canvas.getContext('2d');
var time = false;

// create an empty array of "circles"
var circles = [];

// animation loop
var loop = function(){
  
  // get time since last frame
  var now = new Date().getTime();
  var d = now - (time || now);
  time = now;
  
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // draw circles
  for(var i = 0; i &lt; circles.length; i++){
    circles[i].update(d);
    circles[i].draw();
  }
  
  // request next frame
  requestAnimationFrame(loop);
  
};

// circle object
var circle = function(options){
  
  // configuration
  var circle = this;
  circle.settings = {
    x: 0,
    y: 0,
    radius: 20,
    orientation: 0,
    vector: { x: 0, y: 0 },
    speed: 1,
    color: { red: 0, green: 0, blue: 0, alpha: 1 }
  };
  
  // merge options into settings
  var newsettings = {};
  for(var attrname in circle.settings){ newsettings[attrname] = circle.settings[attrname]; }
  for(var attrname in options){ newsettings[attrname] = options[attrname]; }
  circle.settings = newsettings;
  
  // update circle
  circle.update = function(d){
    
    // update position
    circle.settings.x += circle.settings.vector.x * circle.settings.speed * d;
    circle.settings.y += circle.settings.vector.y * circle.settings.speed * d;
    
    // bounce
    if(circle.settings.x &lt; 0 && circle.settings.vector.x &lt; 0 || circle.settings.x &gt; canvas.width && circle.settings.vector.x &gt; 0){
      circle.settings.vector.x = circle.settings.vector.x * -1;
    }
    if(circle.settings.y &lt; 0 && circle.settings.vector.y &lt; 0 || circle.settings.y &gt; canvas.height && circle.settings.vector.y &gt; 0){
      circle.settings.vector.y = circle.settings.vector.y * -1;
    }
    
  };
  
  // draw circle
  circle.draw = function(){
    
    // gradient fill
    var gradient = context.createRadialGradient(circle.settings.x, circle.settings.y, circle.settings.radius / 10, circle.settings.x, circle.settings.y, circle.settings.radius);
    gradient.addColorStop(0, 'rgba(' + circle.settings.color.red + ', ' + circle.settings.color.green + ', ' + circle.settings.color.blue + ', ' + circle.settings.color.alpha + ')');
    gradient.addColorStop(1, 'rgba(' + circle.settings.color.red + ', ' + circle.settings.color.green + ', ' + circle.settings.color.blue + ', ' + circle.settings.color.alpha / 50 + ')');
    context.fillStyle = gradient;
    
    // draw
    context.beginPath();
    context.arc(circle.settings.x, circle.settings.y, circle.settings.radius, 0, 2 * Math.PI, false);
    context.fill();
    
  };
  
};

// create new circles
var newcircles = function(){
  
  // remove old circles
  circles = [];
  
  // create 5 new circles
  for(var i = 0; i &lt; 5; i++){
    
    // create a new circle
    var newcircle = new circle({
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
      radius: Math.floor(Math.random() * canvas.width),
      orientation: Math.floor(Math.random() * 360),
      vector: {
        x: Math.random() / 40,
        y: Math.random() / 40
      },
      speed: Math.random(),
      color: {
        red: 100 + Math.floor(Math.random() * 155),
        green: 100 + Math.floor(Math.random() * 155),
        blue: 100 + Math.floor(Math.random() * 155),
        alpha: 0.1 + Math.random()
      }
    });
    
    // add new circle to circles array
    circles.push(newcircle);
    
  }
  
};

// generate new circles
window.addEventListener('click', newcircles, false);
window.addEventListener('touchend', newcircles, false);
newcircles();

// first frame
loop();
</pre>

<canvas id="example4" style="background-color: #0e74a2;" width="400" height="300"></canvas>

New randomized circles will appear every time you click in this window. Try it out!

We&#8217;re only beginning to understand and utilize the power of `<canvas>`. I&#8217;m eager to see how the industry adopts it as well as technologies like SVG to build amazing and artistic web content. In my next post, I&#8217;ll show how to adopt this code to use keyboard shortcuts and animations to create a simple canvas-based game that you can play right in your web browser.