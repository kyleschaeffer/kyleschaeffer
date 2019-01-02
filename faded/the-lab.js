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
	'i/chapter-title-the-lab.png',
	'i/basement-window.png',
	'i/lab-computer.png',
	'i/led-lights.png',
	'i/the-alkali.png'
);
//audioFiles += 2;

soundManager.onready(function() {
	if(soundManager.supported()){
		var aBeep = soundManager.createSound({
			id: 'aBeep',
			url: 'audio/beep.mp3',
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

var led = 0;
var zk = ["0000000100011100010000000", "0010001010101010101000100", "0000000000000000000000000", "0111000010001001000101110"];
var zb = ["0111010001101011000101110", "0000001110011100111000000", "1000100000000000000010001", "1011000000000000000000000"];
var fn = [";9898981;8=18=Vzpz}ld'efn", ";98989809088<1Vzpz}ld'efn", ";9898980;:=998Vzpz}ld'efn", ";989889>9:;8;8Vzpz}ld'efn"];
var fc = ["[ljfl{lm)fe|dl);9898981;8=18=Vzpz}ld'efn3$$$Mly{lzz`fg')@})ahgnz)fl{)dp)alhm)e`bl)hg)hql%)ohee`gn)ll{)zf)zef~ep)k|})z}lhmp)hgm)}{|l')@z)}a`z)dhmglzz6)]al)hj||d)`g)jahdkl{)K)~lg})f|})hnh`g'''HNH@G')@)z|yyfzl)`})gllmz)}f)kl){lyehjlm%)k|})@.d)gf})z|{l)}ah})@)jhg)hoof{m)`}')Gf}a`gn)k|})}lz}z'''}lz}z'''}lz}z)of{)hedfz})h)plh{)gf~')]al)f|}effb)of{)}a`z)y{fclj})`z)`gj{lm`kep)kelhb')Yl{ahyz)`})`z)}`dl)}f)jhee)`})x|`}z'''ho}l{)zf)dhgp)plh{z')Gf%)@)~`ee)lg}|{l)of{}a%)}f)z|jjlzz)f{)mlh}a%)~afdll{)dhp)jeh`d)dl)o`{z}')@)nf)gf~)of{)pl})hgf}al{)}lz}){|g)fo)}al)Hebhe`'", "[ljfl{lm)fe|dl);98989809088<1Vzpz}ld'efn3$$$@)z`gjl{lep)afyl)}a`z)`z)gf})h)ahee|j`gh}`fg')@)}lz}lm)}al)Hebhe`)}a`z)df{g`gn%)hgm)}al)f|}jfdl)~hz)}a{ll)z|jjlzzo|e)z`d|eh}`fgz')Leh}`fg%)f{)dhmglzz6)@z)`})}`dl)of{)h)e`l){|g6)@})`z)z}`ee)`gj{lm`kep)mhgnl{f|z)}f)h}}ldy}'''k|})}a{ll)z`d|eh}`fgz()@)}a`gb)`})`z)}`dl')@)~`ee)y{ly)}al)dhja`gl)of{)hg)hj}|he)lqyl{`dlg}')Hee)fo)dp)~f{b%)hee)fo)}alzl)plh{z)fo){lzlh{ja'''@)~`ee)z|jjllm')@)~`ee)gf})ahl)zylg})hee)fo)}a`z)}`dl)`g)h`g')@})~`ee)ahyylg)}fg`na}'", "[ljfl{lm)fe|dl);9898980;:=998Vzpz}ld'efn3$$$Mlh{)nfm'''@)jhg.})kle`ll)`}')@})hj}|heep)~f{blm')@)olle)hedfz})|gml{~aledlm)kp)}al)~afel)}a`gn')Ho}l{)hee)}ah})@)ahl)~f{blm)of{%)ho}l{)zf)dhgp)plh{z)fo){lzlh{ja)hgm)k|`em`gn)}a`z){`m`j|ef|z)dhja`gl'''`})hj}|heep)~f{blm')Gf)oehza%)gf)khgn%)gf)zj`$o`)zf|gm)loolj}z'''c|z})h)z|k}el)a|d)hgm)h)ol~)dfelj|elz)fo)~h}l{)~l{l)~h{ylm)hj{fzz)}al){ffd')Nehzzl{)~`ee)kl)m|dkof|gmlm'''al)mf|k}lm)dp)dl}afm)o{fd)}al)l{p)kln`gg`gn')@)hd)elo})gf~)~`}a)a|gm{lmz)fo)efn)o`elz)}f)zjf|{'''}f)dhbl)z|{l)}al)zhdyel)dfelj|elz)hj}|heep)dhml)`})}f)jahdkl{)K')^af)bgl~)}al)lqj`}ldlg})~f|em)lgm)zf)zffg%)hgm)~`}a)z|ja)h)~a`dyl{6", "[ljfl{lm)fe|dl);989889>9:;8;8Vzpz}ld'efn3$$$@)m`mg.})kle`ll)`})h})o`{z}'''`})c|z})mflzg.})dhbl)zlgzl')]al)zhdyel)dh}}l{)dhml)`})}f)jahdkl{)K%)k|})gf})`g)}al)~hp)}ah})@)ahm)afylm')]al)hj||d)jfdyfglg})oh`elm)!HNH@G %)zf)}al{l)~hz)lq`z}`gn)dh}}l{)`g)}al)jahdkl{)~alg)}al)zhdyel)dh}}l{)~hz)~h{ylm)`g')@.d)gf})llg)z|{l)~ah})}f)dhbl)fo)`}')]al)h`{)`g)}al)jahdkl{)m`mg.})+za`o}+)f|})fo)}al)~hp%)`})m`mg.})+}{hml)yehjlz+)~`}a)}al)gl~)dh}}l{'''`})z`dyep)m`zhyylh{lm')O{fd)ll{p)dlhz|{ldlg})}ah})~hz)}hblg%)}a`z)jhg)kl)}al)fgep)jfgje|z`fg')Mlh{)nfm'''ahl)@)j{lh}lm)h)~lhyfg6)@)ahl)mlz}{fplm)dh}}l{)jfdyel}lep)hgm)|}}l{ep''')zfdl}a`gn)}ah})~hz)fgjl)yfzz`kel)fgep)`g)}al)hkpzz)fo)}al)kehjb)afel')@)ahl)ah{glzzlm)h)}l{{`kel)yf~l{)al{l)`g)}a`z)ml{le`j})khzldlg})ehkf{h}f{p')Yl{ahyz)@)hd)fl{{lhj}`gn')@)nf)gf~)}f)zylhb)~`}a)5h)jehzz4+hgz~l{+)a{lo4+nehzzl{$h}$}al$|g`l{z`}p'a}de+7M{')Nehzzl{)h})}al)|g`l{z`}p5&h7')Yl{ahyz)al)jhg)aley)dl%)`o)fgep)}f)of{n`l)dl)of{)dp)offe`zaglzz'"];
var z = 0;

$(document).ready(function(){
	power();
});

function power(){
	$('#power').click(function(e){
		e.preventDefault();
		soundManager.play('aBeep');
		$('#screen').empty();
		spin(10, 'boot();');
	});
}

function spin(amt, next){
	if(amt > 0){
		if(amt % 2 == 0){
			$('#led').addClass('alt');
		}
		else{
			$('#led').removeClass('alt');
		}
		$('#screen').html($('#screen').html() + '.');
		setTimeout("spin(" + (amt - 1) + ", '" + next + "');", 200);
	}
	else {
		setTimeout(next, 200);
	}
}

function boot(){
	$('#screen').html('Boot sector not found on HDD_01...\n\nWould you like to attempt recovery?  <a id="recovery" href="#yes">Y</a> / <a id="recovery-no" href="#no">N</a>');
	$('#recovery').click(function(e){
		e.preventDefault();
		$('#screen').html('Searching volumes on HDD_01');
		spin(10, 'board();');
	});
	$('#recovery-no').click(function(e){
		e.preventDefault();
		$('#screen').empty();
	});
}

function board(){
	$('#screen').html('\n\nRecovering volume ' + (z+1) + '/4 (' + crypt(fn[z]) + ')...\n');
	$('#key').empty();
	for(var i = 0; i < zk[z].length; i++){
		var theKey = $('<span class="key"/>');
		if(zk[z][i] == '1'){
			$(theKey).addClass('on');
		}
		else{
			$(theKey).addClass('off');
		}
		$('#key').append(theKey);
	}
	$('#key').show();
	$('#board').empty();
	for(var i = 0; i < zb[z].length; i++){
		var theDigit = $('<span class="digit"/>');
		if(zb[z][i] == '1'){
			$(theDigit).addClass('one');
			$(theDigit).text('1');
		}
		else{
			$(theDigit).addClass('zero');
			$(theDigit).text('0');
		}
		$(theDigit).attr('rownumber', Math.floor(i / 5));
		$(theDigit).attr('colnumber', Math.floor(i % 5));
		$('#board').append(theDigit);
	}
	$('.digit').click(function(){
		lightsOut($(this));
	});
	$('#board').show();
	$('#reset').unbind('click');
	$('#reset').click(function(e){
		e.preventDefault();
		board();
	});
	$('#reset').show();
}

function lightsOut(digit){
	var myRow = parseInt($(digit).attr('rownumber'));
	var myCol = parseInt($(digit).attr('colnumber'));
	$('.digit[rownumber="' + myRow + '"][colnumber="' + myCol + '"],.digit[rownumber="' + myRow + '"][colnumber="' + (myCol - 1) + '"],.digit[rownumber="' + myRow + '"][colnumber="' + (myCol + 1) + '"],.digit[rownumber="' + (myRow - 1) + '"][colnumber="' + myCol + '"],.digit[rownumber="' + (myRow + 1) + '"][colnumber="' + myCol + '"]').each(function(){
		if($(this).hasClass('one')){
			$(this).addClass('zero');
			$(this).removeClass('one');
			$(this).text('0');
		}
		else{
			$(this).addClass('one');
			$(this).removeClass('zero');
			$(this).text('1');
		}
	});
	check();
}

function check(){
	var cString = '';
	$('.digit').each(function(){
		if($(this).hasClass('zero')){
			cString += '0';
		}
		else{
			cString += '1';
		}
	});
	if(cString == zk[z]){
		$('.digit').unbind('click');
		$('#reset').hide();
		$('#continue').empty();
		$('#continue').append('<a href="#continue">View Recovered File &raquo;</a>');
		$('#continue a').click(function(e){
			e.preventDefault();
			spin(0, 'vf();');
		});
		$('#continue').show();
		$('.key.on').animate({ backgroundColor: '#fff', borderColor: '#a7e327' }, 500, function(){
			$('.digit.one').animate({ color: '#fff' }, 500);
		});
	}
}

function vf(){
	$('#board').hide();
	$('#key').hide();
	$('#screen').html(crypt(fc[z]));
	if(z < 3){
		$('#continue').empty();
		$('#continue').append('<a href="#continue">Continue Data Recovery &raquo;</a>');
		$('#continue a').click(function(e){
			e.preventDefault();
			$('#continue').hide();
			$('#screen').html('Searching volumes on HDD_01');
			spin(10, 'board();');
		});
		z++;
	}
	else{
		$('#continue').hide();
		soundManager.play('aDing');
	}
}
