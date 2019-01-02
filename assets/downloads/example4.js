// get the canvas
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
  for(var i = 0; i < circles.length; i++){
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
    if(circle.settings.x < 0 && circle.settings.vector.x < 0 || circle.settings.x > canvas.width && circle.settings.vector.x > 0){
      circle.settings.vector.x = circle.settings.vector.x * -1;
    }
    if(circle.settings.y < 0 && circle.settings.vector.y < 0 || circle.settings.y > canvas.height && circle.settings.vector.y > 0){
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
  for(var i = 0; i < 5; i++){
    
    // create a new circle
    var size = Math.floor(Math.random() * canvas.width);
    var newcircle = new circle({
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
      radius: Math.floor(Math.random() * 400),
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