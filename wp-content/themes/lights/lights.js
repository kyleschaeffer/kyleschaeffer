/**
* @preserve HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
(function(k,m){var g="3.6.2";var d=k.html5||{};var h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var q;var i="_html5shiv";var a=0;var o={};var e;(function(){try{var t=m.createElement("a");t.innerHTML="<xyz></xyz>";q=("hidden" in t);e=t.childNodes.length==1||(function(){(m.createElement)("a");var v=m.createDocumentFragment();return(typeof v.cloneNode=="undefined"||typeof v.createDocumentFragment=="undefined"||typeof v.createElement=="undefined")}())}catch(u){q=true;e=true}}());function f(t,v){var w=t.createElement("p"),u=t.getElementsByTagName("head")[0]||t.documentElement;w.innerHTML="x<style>"+v+"</style>";return u.insertBefore(w.lastChild,u.firstChild)}function l(){var t=j.elements;return typeof t=="string"?t.split(" "):t}function p(t){var u=o[t[i]];if(!u){u={};a++;t[i]=a;o[a]=u}return u}function n(w,t,v){if(!t){t=m}if(e){return t.createElement(w)}if(!v){v=p(t)}var u;if(v.cache[w]){u=v.cache[w].cloneNode()}else{if(c.test(w)){u=(v.cache[w]=v.createElem(w)).cloneNode()}else{u=v.createElem(w)}}return u.canHaveChildren&&!h.test(w)?v.frag.appendChild(u):u}function r(v,x){if(!v){v=m}if(e){return v.createDocumentFragment()}x=x||p(v);var y=x.frag.cloneNode(),w=0,u=l(),t=u.length;for(;w<t;w++){y.createElement(u[w])}return y}function s(t,u){if(!u.cache){u.cache={};u.createElem=t.createElement;u.createFrag=t.createDocumentFragment;u.frag=u.createFrag()}t.createElement=function(v){if(!j.shivMethods){return u.createElem(v)}return n(v,t,u)};t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(v){u.createElem(v);u.frag.createElement(v);return'c("'+v+'")'})+");return n}")(j,u.frag)}function b(t){if(!t){t=m}var u=p(t);if(j.shivCSS&&!q&&!u.hasCSS){u.hasCSS=!!f(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")}if(!e){s(t,u)}return t}var j={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:g,shivCSS:(d.shivCSS!==false),supportsUnknownElements:e,shivMethods:(d.shivMethods!==false),type:"default",shivDocument:b,createElement:n,createDocumentFragment:r};k.html5=j;b(m)}(this,document));

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);

// https://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik M�ller
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

// nav
$(window).on('scroll', function(){
    var t = $(window).scrollTop();
    if(t > 200){
        $('#nav').addClass('fixed');
    }
    else{
        $('#nav').removeClass('fixed');
    }
});

// contact
$('#contact-toggle').on('click', function(e){
    e.preventDefault();
    $('#contact-form').toggle();
});
$(document).on('click', function(e){
    if($('#contact-form').is(':visible') && !$(e.target).is('#contact-toggle,#contact-form,#contact-form *')){
        $('#contact-form').hide();
    }
});

// resize
function screen(){
    
    // mobile
    if($(window).width() <= 943 && $('#nav-toggle').size() == 0){
            
        // mobile menu
        $('#nav').addClass('menu').hide();
        
        // button
        $('#nav').before('<a id="nav-toggle" href="#nav"><span class="line1"></span><span class="line2"></span><span class="line3"></span></a>');
        $('#nav-toggle').on('click', function(e){
            e.preventDefault();
            $('#nav').slideToggle(150);
        });
        
    }
    
    // desktop
    else if($(window).width() > 943 && $('#nav-toggle').size() > 0){
        
        // desktop menu
        $('#nav').removeClass('menu').show();
        $('#nav-toggle').remove();
        
    }
    
}
$(window).on('resize', function(){
    screen();
});
screen();

// portfolio
$('.portfolio a').on('click', function(e){
    e.preventDefault();
    
    // lightbox
    $('body').append('<div id="shadow" class="fadein"><div id="lightbox" class="dropin" style="display:none;" /><div class="loading spin">&orarr;</div></div>');
    $('#shadow').on('click', function(e){
        if($(this).is('#shadow')){
            e.preventDefault();
            $('#shadow').remove();
        }
    });
    
    // image
    var href = $(this).attr('href');
    var alt = $(this).children('img').attr('alt');
    var img = $('<img src="' + href + '" alt="' + alt + '" style="max-width: none;" />');
    $(img).on('load', function(e){
        $('#lightbox').css('width', '100%').show().append(img);
        var w = $(img).width();
        var h = $(img).height();
        var left = w / 2 * -1;
        if(left < ($(window).width() / 2) * -1){
            left = ($(window).width() / 2) * -1;
        }
        $('#lightbox').css('width', w + 'px').css('height', h + 'px').css('margin-left', left + 'px');
        if(h < $(window).height()){
            $('#lightbox').css('top', (($(window).height() / 2) - (h / 2)) + 'px');
        }
        else {
            $('#lightbox').css('top', '0px');
        }
    });
    
});
