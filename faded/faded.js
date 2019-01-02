/*
	ATTENTION WOULD-BE CHEATERS:::::::::::::::::::::::::::::::::::::::::::::::
	
	Can you garner clues and answers to this game by deciphering my HTML, CSS, 
	and JavaScript? Yes. Of course. I have attempted to disguise the answers 
	so that they are at least opaque to the average passer-by, but those who 
	are quite intent on cheating can certainly do so.
	
	While part of this game is the challenge of solving puzzles and 
	deciphering clues, the only reward offered is the satisfaction of earning 
	your way to each new chapter of the story. By circumventing this process, 
	you are robbing yourself of the only reward you can possibly gain.
	
	That is my rant. Read on, if you must.
*/

var preload = [];
preload.push(
	'i/loading-bar.png',
	'i/copy.png',
	'i/dark.png',
	'i/icons.png',
	'i/menu-box.png',
	'i/menu-box-wide.png'
);
var loadedAssets = 0;
//var audioFiles = 1;
var audioFiles = 0;

var fr = 40; // framerate
var anim = setTimeout('null', 0); // animation timer

var jiggleTimer = setTimeout('null', 0); // jiggle timer

soundManager.onready(function() {
	if(soundManager.supported()){
		var aSwitch = soundManager.createSound({
			id: 'aPop',
			url: 'audio/pop.mp3',
			onload: function(){
				//loadedAssets++;
				//loadingStatus();
			}
		});
	}
	else{
		// audio player error
	}
});

$(document).ready(function(){
	if($.browser.msie){
		$('body').prepend('<div class="ie-warning"><strong>Warning:</strong> Your game experience may suffer because you have chosen to play using Internet Explorer. Consider an <a href="https://www.google.com/chrome/" target="_blank">upgrade</a>.</div>');
		$('.ie-warning').click(function(){
			$(this).slideUp();
		});
	}
	loading();
});

function loading(){
	if(preload.length > 0){
		for(var i = 0; i < preload.length; i++){
			$('body').append('<img class="hidden preload" id="img-preload-' + i + '" src="' + preload[i] + '" />');
			$('#img-preload-' + i).load(function(){
				loadedAssets++;
				loadingStatus();
			});
		}
	}
}

function loadingStatus(){
	$('#status-bar #bar').css('width', Math.round((loadedAssets / (preload.length + audioFiles)) * 100) + '%');
	if(loadedAssets == (preload.length + audioFiles)){
		$('img.preload').remove();
		$('#loading').fadeOut(500);
		smallWindows();
		animations();
		clickables();
		menu();
	}
}

function smallWindows(){
	if($(window).width() < 1300){
		$('.fade-on-small').animate({ opacity: 0.2 }, 500);
		$('.fade-on-small').mouseenter(function(){
			$(this).stop(true, true);
			$(this).animate({ opacity: 1 }, 500);
		});
		$('.fade-on-small').mouseleave(function(){
			$(this).stop(true, true);
			$(this).animate({ opacity: 0.2 }, 500);
		});
	}
}

function animations(){
	$('.animated').each(function(i){
		var w = $(this).width();
		$(this).css('background-position', '-' + w + 'px 0px');
	});
	anim = setTimeout('frame();', fr);
}

(function($) {
  jQuery.fn.backgroundPosition = function() {
    var p = $(this).css('background-position');
    if(typeof(p) === 'undefined') return $(this).css('background-position-x') + ' ' + $(this).css('background-position-y');
    else return p;
  };
})(jQuery);
function frame(){
	$('.animated').each(function(i){
		var w = $(this).width();
		var c = parseInt($(this).backgroundPosition().split(' ')[0]);
		if(c < w){
			c++;
		}
		else {
			c = (w * -1);
		}
		$(this).css('background-position', c + 'px' + ' 0px');
	});
	anim = setTimeout('frame();', fr);
}

function clickables(){
	$('#menu a,.clickable:not(.nojiggle)').each(function(i){
		if($(this).css('position') != 'absolute'){
			$(this).css('position', 'relative');
			$('#menu a,.clickable').css('top', '0px');
			$('#menu a,.clickable').css('left', '0px');
		}
		$(this).attr('originalx', $(this).css('left'));
		$(this).attr('originaly', $(this).css('top'));
	});
	$('#menu a,.clickable:not(.nojiggle)').mouseenter(function(i){
		$(this).attr('jiggle', 'true');
		jiggle();
	});
	$('#menu a,.clickable:not(.nojiggle)').mouseleave(function(i){
		clearTimeout(jiggleTimer);
		$(this).attr('jiggle', 'false');
		$(this).css('left', $(this).attr('originalx'));
		$(this).css('top', $(this).attr('originaly'));
	});
}

function jiggle(){
	$('*[jiggle=true]').each(function(i){
		var x = parseInt($(this).css('left')) + (Math.floor(Math.random() * 3) - 1);
		var y = parseInt($(this).css('right')) + (Math.floor(Math.random() * 3) - 1);
		if(x > parseInt($(this).attr('originalx')) + 1){
			x = parseInt($(this).attr('originalx'));
		}
		if(x < parseInt($(this).attr('originalx')) - 1){
			x = parseInt($(this).attr('originalx'));
		}
		if(y > parseInt($(this).attr('originaly')) + 1){
			y = parseInt($(this).attr('originaly'));
		}
		if(y < parseInt($(this).attr('originaly')) - 1){
			y = parseInt($(this).attr('originaly'));
		}
		$(this).css('left', x + 'px');
		$(this).css('top', y + 'px');
	});
	jiggleTimer = setTimeout('jiggle();', fr);
}

function crypt(str){
	var encoded = '';
	for(i = 0; i < str.length; i++){
		encoded += String.fromCharCode('9'^str.charCodeAt(i));
	}
	return encoded;
}

function menu(){
	$('#menu-bookmark a').click(function(e){
		e.preventDefault();
		if($('#bookmark').css('display') == 'none'){
			soundManager.play('aPop');
			$('.menu-pop').hide();
			$('#bookmark').show();
		}
		else{
			$('.menu-pop').hide();
		}
	});
	$('#menu-history a').click(function(e){
		e.preventDefault();
		if($('#history').css('display') == 'none'){
			soundManager.play('aPop');
			$('.menu-pop').hide();
			$('#history').show();
		}
		else{
			$('.menu-pop').hide();
		}
	});
	$('#menu-help a').click(function(e){
		e.preventDefault();
		if($('#help').css('display') == 'none'){
			soundManager.play('aPop');
			$('.menu-pop').hide();
			$('#help').show();
		}
		else{
			$('.menu-pop').hide();
		}
	});
	$('#menu-comments a').click(function(e){
		e.preventDefault();
		if($('#comments').css('display') == 'none'){
			soundManager.play('aPop');
			$('.menu-pop').hide();
			$('#comments').show();
		}
		else{
			$('.menu-pop').hide();
		}
	});
	$('#achieve').click(function(){
		$(this).focus();
		$(this).select();
	});
}

/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// https://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// https://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);