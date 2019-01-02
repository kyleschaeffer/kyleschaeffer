// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik MÃ¶ller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// merge objects
function merge(obj1, obj2){
    var obj3 = {};
    for(var attrname in obj1){ obj3[attrname] = obj1[attrname]; }
    for(var attrname in obj2){ obj3[attrname] = obj2[attrname]; }
    return obj3;
}

// game
function game(){
    
    // properties
    var game = this;
    game.canvas = document.getElementById('space');
    game.ctx = game.canvas.getContext('2d');
    game.width = 0;
    game.height = 0;
    game.view = { x: 0, y: 0 };
    game.resources = [];
    game.sprites = [];
    game.background = [];
    game.map = [];
    game.player = false;
    game.keys = [];
    game.time = false;
    game.DEBUG = false;
    
    // initialize
    game.init = function(){
        
        // listen
        window.addEventListener('resize', game.resize, false);
        window.addEventListener('orientationchange', game.resize, false);
        window.addEventListener('keydown', game.keydown, false);
        window.addEventListener('keyup', game.keyup, false);
        window.addEventListener('blur', game.blur, false);
        game.canvas.addEventListener('click', game.click, false);
        
        // resize
        game.resize();
        
        // main loop
        game.loop();
        
    };
    
    // load images
    game.load = function(images){
        
        // load image from url
        var loadFromUrl = function(url){
            var img = new Image();
            img.src = 'http://kyleschaeffer.com/wordpress/wp-content/uploads/2014/05/' + url + '.png';
            game.resources[url] = { image: img, loaded: false };
            img.onload = function(){
                game.resources[url].loaded = true;
            };
        };
        
        // accept array or single resource
        if(images instanceof Array){
            for(var i = 0; i < images.length; i++){
                loadFromUrl(images[i]);
            }
        }
        else{
            loadFromUrl(images);
        }
        
    };
    
    // sprites
    game.sprite = function(options){
        
        // settings
        var sprite = this;
        sprite.settings = {
            image: false,
            alpha: 1,
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            speed: 0.02, // .001 = 1 frame/second
            frames: [],
            index: 0,
            dir: 'horizontal',
            loop: true
        };
        sprite.settings = merge(sprite.settings, options);
        
        // update
        sprite.update = function(d){
            sprite.settings.index += sprite.settings.speed * d;
        };
        
        // draw
        sprite.draw = function(x, y, w, h){
            
            // determine which frame to draw
            var frame = 0;
            if(sprite.settings.speed > 0){
                var max = sprite.settings.frames.length;
                var idx = Math.floor(sprite.settings.index);
                frame = sprite.settings.frames[idx % max];
                if(!sprite.settings.loop && idx > max){
                    var frame = sprite.settings.frames[sprite.settings.frames.length - 1];
                }
            }
            
            // set new position
            if(sprite.settings.dir == 'vertical'){
                sprite.settings.y = frame * sprite.settings.h;
            }
            else{
                sprite.settings.x = frame * sprite.settings.w;
            }
            
            // render
            game.ctx.drawImage(sprite.settings.image, sprite.settings.x, sprite.settings.y, sprite.settings.w, sprite.settings.h, x, y, w, h);
            
        };
        
    };
    
    // resize canvas
    game.resize = function(){
        game.ctx.canvas.width = game.canvas.width;
        game.ctx.canvas.height = game.canvas.height;
        game.width = game.canvas.width;
        game.height = game.canvas.height;
    };
    
    // translate coordinates
    game.translate = function(x, y){
        
        return {
            x: (game.width / 2) - game.view.x + x,
            y: (game.height / 2) - game.view.y + y
        }
        
    };
    
    // click
    game.click = function(e){
        
        // get click coordinates
        var x = e.offsetX - Math.floor(game.width / 2) + game.view.x;
        var y = e.offsetY - Math.floor(game.height / 2) + game.view.y;
        
        // map entities
        for(var i = 0; i < game.map.length; i++){
            if(x >= game.map[i].settings.x - (game.map[i].settings.w / 2) && x <= game.map[i].settings.x + (game.map[i].settings.w / 2) && y >= game.map[i].settings.y - (game.map[i].settings.h / 2) && y <= game.map[i].settings.y + (game.map[i].settings.h / 2)){
                if(game.map[i].settings.selected){
                    game.map[i].settings.selected = false;
                }
                else{
                    game.map[i].settings.selected = true;
                }
            }
            else{
                game.map[i].settings.selected = false;
            }
        }
        
    };
    
    // keyboard
    game.keydown = function(e){
        if(e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 37 || e.keyCode == 39){
            e.preventDefault();
        }
        game.keys[e.keyCode] = true;
    };
    game.keyup = function(e){
        game.keys[e.keyCode] = false;
        
        // end thrust
        if(!game.keys[38] && !game.keys[40]){
            game.player.settings.status = 'rest';
        }
        
    };
    game.keypress = function(d){
        
        // boost
        var boost = 1;
        if(game.keys[16]){
            boost = 3;
        }
        
        // thrust
        if(game.keys[40]){
            game.player.settings.v.x += Math.cos((game.player.settings.o - 270) * Math.PI / 180) * 0.002 * game.player.settings.speed * d;
            game.player.settings.v.y += Math.sin((game.player.settings.o - 270) * Math.PI / 180) * 0.002 * game.player.settings.speed * d;
            game.player.settings.status = 'reverse';
        }
        else if(game.keys[38]){
            game.player.settings.v.x += Math.cos((game.player.settings.o - 90) * Math.PI / 180) * 0.004 * (game.player.settings.speed * boost) * d;
            game.player.settings.v.y += Math.sin((game.player.settings.o - 90) * Math.PI / 180) * 0.004 * (game.player.settings.speed * boost) * d;
            game.player.settings.status = 'forward';
            if(game.keys[16]){
                game.player.settings.status = 'boost';
            }
        }
        
        // rotate
        if(game.keys[37]){
            game.player.settings.o -= (0.15 / boost) * d;
            if(game.player.settings.o < 0){
                game.player.settings.o = 360 - game.player.settings.o;
            }
            else if(game.player.settings.o > 360){
                game.player.settings.o = 0 + game.player.settings.o;
            }
        }
        if(game.keys[39]){
            game.player.settings.o += (0.15 / boost) * d;
            if(game.player.settings.o < 0){
                game.player.settings.o = 360 - game.player.settings.o;
            }
            else if(game.player.settings.o > 360){
                game.player.settings.o = 0 + game.player.settings.o;
            }
        }
        
    };
    
    // blur
    game.blur = function(){
        for(var i = 0; i < game.keys.length; i++){
            game.keys[i] = false;
        }
    };
    
    // game loop
    game.loop = function(){
        
        // timing
        var now = new Date().getTime();
        var d = now - (game.time || now);
        game.time = now;
        
        // keyboard
        game.keypress(d);
        
        // update
        game.update(d);
        
        // render
        game.render(d);
        
        // request next frame
        requestAnimationFrame(game.loop);
        
    };
    
    // update
    game.update = function(d){
        
        // update player
        game.player.update(d);
        
        // update view
        game.view.x = game.player.settings.x;
        game.view.y = game.player.settings.y;
        
    };
    
    // render
    game.render = function(d){
        
        // clear
        game.ctx.clearRect(0, 0, game.width, game.height);
        
        // draw background
        for(var i = 0; i < game.background.length; i++){
            game.background[i].draw(d);
        }
        
        // draw map
        for(var i = 0; i < game.map.length; i++){
            game.map[i].draw(d);
        }
        
        // draw player
        game.player.draw(d);
        
    };
    
    // entity
    game.entity = function(options){
        
        // settings
        var entity = this;
        entity.settings = {
            x: 0, // x position
            y: 0, // y position
            w: 20, // width
            h: 20, // height
            o: 0, // orientation
            v: { x: 0, y: 0 }, // vector
            f: 0.0004, // friction
            speed: 1,
            color: { red: 0, green: 0, blue: 0, alpha: 0 },
            sprites: [],
            status: 'rest',
            selected: false
        };
        entity.settings = merge(entity.settings, options);
        
        // update
        entity.update = function(d){
            
            // update position
            entity.settings.x += (entity.settings.v.x / 10) * d;
            entity.settings.y += (entity.settings.v.y / 10) * d;
            
            // friction
            entity.settings.v.x -= entity.settings.v.x * entity.settings.f * d;
            entity.settings.v.y -= entity.settings.v.y * entity.settings.f * d;
            
        };
        
        // draw
        entity.draw = function(d){
            
            // only draw when in view
            if(entity.settings.x - (entity.settings.w / 2) <= game.view.x + (game.width / 2) && entity.settings.x + (entity.settings.w / 2) >= game.view.x - (game.width / 2) && entity.settings.y - (entity.settings.h / 2) <= game.view.y + (game.height / 2) && entity.settings.y + (entity.settings.h / 2) >= game.view.y - (game.height / 2)){
                
                // get translated coordinates
                var t = game.translate(entity.settings.x, entity.settings.y);
                
                // orientation
                game.ctx.save();
                game.ctx.translate(t.x, t.y);
                game.ctx.rotate(entity.settings.o * Math.PI / 180);
                
                // color
                game.ctx.fillStyle = 'rgba(' + entity.settings.color.red + ', ' + entity.settings.color.green + ', ' + entity.settings.color.blue + ', ' + entity.settings.color.alpha + ')';
                
                // draw entity
                game.ctx.beginPath();
                game.ctx.rect(0 - (entity.settings.w / 2), 0 - (entity.settings.h / 2), entity.settings.w, entity.settings.h);
                game.ctx.fill();
                
                // sprites
                if(entity.settings.sprites[entity.settings.status]){
                    entity.settings.sprites[entity.settings.status].update(d);
                    game.ctx.globalAlpha = entity.settings.sprites[entity.settings.status].settings.alpha;
                    entity.settings.sprites[entity.settings.status].draw(0 - (entity.settings.w / 2), 0 - (entity.settings.h / 2), entity.settings.w, entity.settings.h);
                    game.ctx.globalAlpha = 1;
                }
                
                // selected entities
                if(entity.settings.selected){
                    game.ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
                    game.ctx.lineWidth = 2;
                    game.ctx.lineCap = 'square';
                    game.ctx.stroke();
                }
                game.ctx.restore();
                
                // movement vector
                if(game.DEBUG && (Math.abs(entity.settings.v.x) > 0 || Math.abs(entity.settings.v.y) > 0)){
                    game.ctx.beginPath();
                    game.ctx.strokeStyle = 'rgba(255, 0, 255, 1)';
                    game.ctx.lineWidth = 1;
                    game.ctx.moveTo(t.x, t.y);
                    game.ctx.lineTo(t.x + (entity.settings.v.x * 20), t.y + (entity.settings.v.y * 20));
                    game.ctx.stroke();
                }
                
            }
            
        };
        
    };
    
}

// begin game
var space = new game();

// load images
space.load([
    'ship',
    'star-small',
    'star-large'
]);

// random map
for(var i = 0; i < 10; i++){
    var star = new space.entity({
        x: Math.floor(Math.random()*5000)*(Math.round(Math.random())*2-1),
        y: Math.floor(Math.random()*5000)*(Math.round(Math.random())*2-1),
        w: Math.floor(Math.random()*200)+50,
        h: Math.floor(Math.random()*200)+50,
        color: {
            red: Math.floor(Math.random()*255),
            green: Math.floor(Math.random()*255),
            blue: Math.floor(Math.random()*255),
            alpha: Math.random()+0.1
        }
    });
    space.map.push(star);
}

// random background
for(var i = 0; i < 2000; i++){
    var size = 5;
    if(Math.random() > 0.75){
        size = 10;
    }
    var star = new space.entity({
        x: Math.floor(Math.random()*5000)*(Math.round(Math.random())*2-1),
        y: Math.floor(Math.random()*5000)*(Math.round(Math.random())*2-1),
        w: size,
        h: size
    });
    if(size == 5){
        star.settings.sprites['rest'] = new space.sprite({
            image: space.resources['star-small'].image,
            w: 5,
            h: 5,
            frames: [0],
            speed: 0
        });
    }
    else{
        star.settings.sprites['rest'] = new space.sprite({
            image: space.resources['star-large'].image,
            w: 10,
            h: 10,
            frames: [0],
            speed: 0
        });
    }
    star.settings.sprites['rest'].settings.alpha = Math.random() + 0.1;
    space.background.push(star);
}

// player
var ship = new space.entity({
    x: 0,
    y: 0,
    w: 32,
    h: 40
});
ship.settings.sprites['rest'] = new space.sprite({
    image: space.resources['ship'].image,
    w: 32,
    h: 40,
    frames: [0],
    speed: 0
});
ship.settings.sprites['forward'] = new space.sprite({
    image: space.resources['ship'].image,
    w: 32,
    h: 40,
    frames: [1, 2]
});
ship.settings.sprites['reverse'] = new space.sprite({
    image: space.resources['ship'].image,
    w: 32,
    h: 40,
    frames: [3, 4]
});
ship.settings.sprites['boost'] = new space.sprite({
    image: space.resources['ship'].image,
    w: 32,
    h: 40,
    frames: [5, 6]
});
space.player = ship;

// begin
space.init();