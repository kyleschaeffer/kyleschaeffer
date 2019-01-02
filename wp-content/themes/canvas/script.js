function lightbox(insertContent, ajaxContentUrl){
	if($('#lightbox').size() == 0){
		var theLightbox = $('<div id="lightbox"/>');
		var theShadow = $('<div id="lightbox-shadow"/>');
		$(theShadow).click(function(e){
			closeLightbox();
		});
		$('body').append(theShadow);
		$('body').append(theLightbox);
	}
	$('#lightbox').empty();
	if(insertContent != null){
		$('#lightbox').append(insertContent);
	}
	if(ajaxContentUrl != null){
		$('#lightbox').append('<p class="loading">Loading...</p>');
		$.ajax({
			type: 'GET',
			url: ajaxContentUrl,
			success:function(data){
				$('#lightbox').empty();
				$('#lightbox').append(data);
			},
			error:function(){
				alert('AJAX Failure!');
			}
		});
	}
	$('#lightbox').css('top', $(window).scrollTop() + ($(window).height() / 3) + 'px');
	$('#lightbox').show();
	$('#lightbox-shadow').show();
}

function closeLightbox(){
	$('#lightbox').hide();
	$('#lightbox-shadow').hide();
	$('#lightbox').empty();
	$('#lightbox').css('width', '500px');
	$('#lightbox').css('margin-left', '-260px');
	$('#lightbox').css('height', 'auto');
}

$(document).ready(function(){
	$('a.portfolio-frame').click(function(e){
		e.preventDefault();
		var theImg = $('<img id="lightboxImg" style="display: none;" src="' + $(this).attr('href') + '" />');
		$('body').append(theImg);
		lightbox('<div class="close-lightbox"><a href="javascript:closeLightbox();">Close</a></div><div class="loading">Loading...</div>');
		$('#lightboxImg').load(function(){
			var topChange = $(window).scrollTop() + ($(window).height() / 2) - (($('#lightboxImg').height() + 20) / 2);
			if(topChange < $(window).scrollTop()){
				topChange = $(window).scrollTop();
			}
			$('#lightbox').animate({
				width: $('#lightboxImg').width(),
				marginLeft: (($('#lightboxImg').width() / 2) * -1),
				height: ($('#lightboxImg').height() + 20),
				top: topChange
			}, 500, function(){
				var me = $('#lightboxImg').detach();
				$(me).show();
				$(me).attr('id', 'lightboxImg-active');
				$(me).click(function(){
					closeLightbox();
				});
				$('#lightbox .loading').remove();
				$('#lightbox').append('<div class="lightbox-img" />');
				$('#lightbox .lightbox-img').append(me);
			});
		});
	});
});