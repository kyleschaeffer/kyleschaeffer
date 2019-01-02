jQuery('#load-feed').click(function(){
	jQuery.ajax({
		type: 'GET',
    url: '/feed.xml',
    dataType: 'xml',
		beforeSend:function(){
			// this is where we append a loading image
			jQuery('#ajax-panel').html('<div class="loading"><img src="/assets/img/loading.gif" alt="Loading..." /></div>');
		},
		success:function(data){
      console.log(data);
			// successful request; do something with the data
			jQuery('#ajax-panel').empty();
			jQuery(data).find('entry').each(function(i){
				jQuery('#ajax-panel').append('<h4>' + jQuery(this).find('title').text() + '</h4><p>' + jQuery(this).find('link').attr('href') + '</p>');
			});
		},
		error:function(){
			// failed request; give feedback to user
			jQuery('#ajax-panel').html('<p class="error"><strong>Oops!</strong> Try that again in a few moments.</p>');
		}
	});
});
jQuery('#load-feed-fail').click(function(){
	jQuery.ajax({
		type: 'POST',
		url: '/blahlblalbhlabh',
		data: { postVar1: 'theValue1', postVar2: 'theValue2' },
		beforeSend:function(){
			// this is where we append a loading image
			jQuery('#ajax-panel').html('<div class="loading"><img src="/assets/img/loading.gif" alt="Loading..." /></div>');
		},
		success:function(data){
			// successful request; do something with the data
			jQuery('#ajax-panel').empty();
			jQuery(data).find('item').each(function(i){
				jQuery('#ajax-panel').append('<h4>' + jQuery(this).find('title').text() + '</h4><p>' + jQuery(this).find('link').text() + '</p>');
			});
		},
		error:function(){
			// failed request; give feedback to user
			jQuery('#ajax-panel').html('<p class="error"><strong>Oops!</strong> Try that again in a few moments.</p>');
		}
	});
});
