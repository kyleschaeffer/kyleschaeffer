---
---

// merge objects
function merge(obj1, obj2){
    var obj3 = {};
    for(var attrname in obj1){ obj3[attrname] = obj1[attrname]; }
    for(var attrname in obj2){ obj3[attrname] = obj2[attrname]; }
    return obj3;
}

// splash
function splash(){
	// properties
	var splash = this;
	splash.canvas = document.getElementById('lights');
	splash.ctx = splash.canvas.getContext('2d');
	splash.ctx.canvas.width = 400;
	splash.ctx.canvas.height = 100;
	splash.width = 400;
	splash.height = 100;
	splash.time = false;
	splash.lights = [];

	// initialize
	splash.init = function(){
		// listen
		window.addEventListener('click', splash.click, false);
		window.addEventListener('touchend', splash.click, false);

		// new lights
		splash.newLights();

		// main loop
		splash.loop();
	};

	// click
	splash.click = function(e){
		// new lights
		if(!e.target.hasAttribute('href') && !e.target.parentNode.hasAttribute('href')){
			splash.newLights();
		}
	};

	// splash loop
	splash.loop = function(){
		// timing
		var now = new Date().getTime();
		var d = now - (splash.time || now);
		splash.time = now;

		// update
		splash.update(d);

		// render
		splash.render(d);

		// request next frame
		requestAnimationFrame(splash.loop);
	};

	// update
	splash.update = function(d){
		// update lights
		for(var i = 0; i < splash.lights.length; i++){
      splash.lights[i].update(d);
    }
	};

	// render
	splash.render = function(d){
		// clear
		splash.ctx.clearRect(0, 0, splash.width, splash.height);

		// draw lights
		for(var i = 0; i < splash.lights.length; i++){
      splash.lights[i].draw(d);
    }
	};

	// light
	splash.light = function(options){
		// settings
		var light = this;
		light.settings = {
			x: 0, // x position
			y: 0, // y position
			r: 20, // radius
			o: 0, // orientation
			v: { x: 0, y: 0 }, // vector
			speed: 1,
			color: { red: 0, green: 0, blue: 0, alpha: 0 }
		};
		light.settings = merge(light.settings, options);

		// update
		light.update = function(d){
			// update position
			light.settings.x += light.settings.v.x * light.settings.speed * d;
			light.settings.y += light.settings.v.y * light.settings.speed * d;

			// bounce
			if(light.settings.x < 0 && light.settings.v.x < 0 || light.settings.x > splash.width && light.settings.v.x > 0){
				light.settings.v.x *= -1;
			}
			if(light.settings.y < 0 && light.settings.v.y < 0 || light.settings.y > splash.height && light.settings.v.y > 0){
				light.settings.v.y *= -1;
			}
		};

		// draw
		light.draw = function(d){
			// color
			var gradient = splash.ctx.createRadialGradient(light.settings.x, light.settings.y, light.settings.r / 10, light.settings.x, light.settings.y, light.settings.r);
			gradient.addColorStop(0, 'rgba(' + light.settings.color.red + ', ' + light.settings.color.green + ', ' + light.settings.color.blue + ', ' + light.settings.color.alpha + ')');
			gradient.addColorStop(1, 'rgba(' + light.settings.color.red + ', ' + light.settings.color.green + ', ' + light.settings.color.blue + ', ' + light.settings.color.alpha / 50 + ')');
			splash.ctx.fillStyle = gradient;

			// draw light
			splash.ctx.beginPath();
			splash.ctx.arc(light.settings.x, light.settings.y, light.settings.r, 0, 2 * Math.PI, false);
			splash.ctx.fill();
		};
	};

	// new lights
	splash.newLights = function(){
		splash.lights = [];
		var longPixels = shiny.width;
		if(shiny.height > longPixels){
			longPixels = shiny.height;
		}
		for(var i = 0; i < 5; i++){
      var light = new splash.light({
        x: Math.floor(Math.random()*shiny.width),
        y: Math.floor(Math.random()*shiny.height),
        r: Math.floor(Math.random()*(longPixels/3))+(longPixels/3),
        o: Math.floor(Math.random()*360),
        v: {
          x: Math.random() / 40,
          y: Math.random() / 40
        },
        speed: Math.random(),
        color: {
          red: 100 + Math.floor(Math.random()*155),
          green: 100 + Math.floor(Math.random()*155),
          blue: 100 + Math.floor(Math.random()*155),
          alpha: Math.random()+0.1
        }
      });
      splash.lights.push(light);
		}
	};
}

// create shiny new splash screens
var shiny = new splash();
shiny.init();
