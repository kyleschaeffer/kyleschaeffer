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
	'i/chapter-title-the-university.png'
);
audioFiles += 1;

soundManager.onready(function() {
	if(soundManager.supported()){
		var aDing = soundManager.createSound({
			id: 'aDing',
			url: 'audio/ding.mp3',
			onload: function(){
				loadedAssets++;
				loadingStatus();
			}
		});
	}
	else{
		// audio player error
	}
});

$(document).ready(function(){
});
