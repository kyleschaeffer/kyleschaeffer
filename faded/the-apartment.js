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

preload.push(
	'i/alphabet.png',
	'i/badge.png',
	'i/chapter-one-title.png',
	'i/cloud.png',
	'i/cypher.png',
	'i/lightbulb.png',
	'i/paper-link.png',
	'i/paper.png',
	'i/scrawl-chart.png',
	'i/scrawl-diagram.png',
	'i/scrawl-e-equals.png',
	'i/scrawl-mystery-of-man.png',
	'i/scrawl-ratio.png',
	'i/scrawl-sequence.png',
	'i/scrawl-villain.png',
	'i/window-sky.png',
	'i/window.png'
);
//audioFiles += 4;

soundManager.onready(function() {
	if(soundManager.supported()){
		var aSwitch = soundManager.createSound({
			id: 'aSwitch',
			url: 'audio/switch.mp3',
			onload: function(){
				//loadedAssets++;
				//loadingStatus();
			}
		});
		var aSwitchOff = soundManager.createSound({
			id: 'aSwitchOff',
			url: 'audio/switch-off.mp3',
			onload: function(){
				//loadedAssets++;
				//loadingStatus();
			}
		});
		var aPencil = soundManager.createSound({
			id: 'aPencil',
			url: 'audio/pencil.mp3',
			onload: function(){
				//loadedAssets++;
				//loadingStatus();
			}
		});
		var aDing = soundManager.createSound({
			id: 'aDing',
			url: 'audio/ding.mp3',
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

var allowedValues = "abcdefghijklmnopqrstuvwxyz";
var at = setTimeout('null', 0);

$(document).ready(function(){
	cypher();
	lights();
});

function cypher(){
	$('.c').each(function(i){
		$(this).attr('originalclass', $(this).attr('class'));
		$(this).attr('id', 'code-letter-' + i);
	});
	$('#cypher input').keyup(function(e){
		clearTimeout(at);
		$(this).val($(this).val().toLowerCase());
		if($(this).val() != '' && allowedValues.indexOf($(this).val()) != -1){
			var theVal = $(this).val();
			var className = $(this).attr('id').split('-')[1];
			$('.c.' + className).each(function(i){
				var t = setTimeout("$('#" + $(this).attr('id') + "').attr('class', '" + $(this).attr('originalclass') + "');$('#" + $(this).attr('id') + "').addClass('alpha');$('#" + $(this).attr('id') + "').addClass('a" + theVal + "');", 20 * i);
			});
			soundManager.play('aPencil');
		}
		else{
			$(this).val('');
			var className = $(this).attr('id').split('-')[1];
			$('.c.' + className).each(function(i){
				var t = setTimeout("$('#" + $(this).attr('id') + "').attr('class', '" + $(this).attr('originalclass') + "');", 20 * i);
			});
		}
		at = setTimeout('check();', 500);
	});
	$('#cypher input').keyup();
}

function lights(){
	$('#dark,#dark div').click(function(e){
		$('#dark,#dark div').fadeOut(200);
		soundManager.play('aSwitchOff');
	});
	$('#lightswitch').click(function(e){
		e.preventDefault();
		$('#dark').fadeIn(200, function(){
			$('#dark div').fadeIn(1500);
		});
		soundManager.play('aSwitch');
	});
}

function check(){
	var myAnswer = '';
	$('#cypher input').each(function(){
		myAnswer += $(this).val();
	});
	if(crypt(myAnswer) == "`opf|h{lmgn}zdbeajk~yq"){
		soundManager.play('aDing');
		$('#cypher input').attr('disabled', 'disabled');
		$('#letter').append(crypt("5h)jehzz4+yhyl{$e`gb)z}h}`j+)a{lo4+}al$ehk$h}$?81$ah{{`zfg'a}de+7]al)Ehk)h})?81)Ah{{`zfg5&h7"));
	}
}