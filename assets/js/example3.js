// get the canvas
var canvas3 = document.getElementById('example3');
var context3 = canvas3.getContext('2d');
context3.fillStyle = '#ff7700';
var time3 = false;

// box position
var x = -100;

// animation loop
var loop3 = function(){
  
  // get time since last frame
  var now = new Date().getTime();
  var d = now - (time3 || now);
  time3 = now;
  
  // clear previously drawn rectangles
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  
  // draw new rectangle
  context3.fillRect(x, 100, 100, 100);
  
  // advance horizontal position
  x += 0.1 * d;
  
  // reset horizontal position
  if(x > canvas3.width){
    x = -100;
  }
  
  // request next frame
  requestAnimationFrame(loop3);
  
};

// first frame
loop3();