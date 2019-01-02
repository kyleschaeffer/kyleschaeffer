jQuery(document).ready(function(){
	
	// jump link
	var scrollElem = scrollableElement('html', 'body');
	jQuery('#jump-link').click(function(e){
		e.preventDefault();
		jQuery(scrollElem).animate({ scrollTop: 0 }, 500);
	});
	
	// fixed navigation
	if(!jQuery.browser.msie || (jQuery.browser.msie && jQuery.browser.version >= 8)){
		var nav = jQuery('#access');
		if(jQuery(window).height() > 500 && jQuery(window).width() > 800){
			jQuery(nav).css('position', 'fixed');
		}
		jQuery(window).resize(function(){
			if(jQuery(this).height() > 500 && jQuery(window).width() > 800){
				jQuery(nav).css('position', 'fixed');
			}
			else{
				jQuery(nav).css('position', 'static');
			}
		});
	}
	
	// portfolio
	if(jQuery('.portfolio-item').size() > 0){
		portfolio();
	}
		
	// image resize improvements
	imgSizer.collate();
});

function scrollableElement(els) {
	for (var i = 0, argLength = arguments.length; i <argLength; i++) {
	  var el = arguments[i],
	      $scrollElement = jQuery(el);
	  if ($scrollElement.scrollTop()> 0) {
	    return el;
	  } else {
	    $scrollElement.scrollTop(1);
	    var isScrollable = $scrollElement.scrollTop()> 0;
	    $scrollElement.scrollTop(0);
	    if (isScrollable) {
	      return el;
	    }
	  }
	}
	return [];
}

function portfolio(){
	jQuery('.portfolio-item').each(function(){
		var projectTitle = jQuery(this).find('h2');
		jQuery(projectTitle).hide();
		var projectDescription = jQuery(this).find('p');
		jQuery(projectDescription).hide();
		jQuery(this).find('.portfolio-image').css('margin', '0');
		jQuery(this).css('width', '260px').css('height', '234px').css('margin', '0 2em 2em 0').css('float', 'left').css('clear', 'none');
		jQuery('div.entry-content').append('<div class="clear" />');
		jQuery(this).find('a.portfolio-frame').click(function(e){
			e.preventDefault();
			portfolioLightbox(jQuery(this).attr('href'), jQuery(projectTitle).clone().show(), jQuery(projectDescription).clone().show());
		});
	});
}

function portfolioLightbox(imageUrl, theTitle, theDescription){
	var theShadow = jQuery('<div id="lightbox-shadow" style="position: fixed; width: 100%; height: 100%; top: 0; left: 0;" />');
	jQuery(theShadow).click(function(){
		jQuery('#lightbox-shadow,#lightbox').remove();
	});
	jQuery('body').append(theShadow);
	var theLightbox = jQuery('<div id="lightbox" style="position: absolute; top: ' + (jQuery(window).scrollTop() + 100) + 'px; left: 50%;" />');
	jQuery(theLightbox).append(theTitle).append(theDescription).append('<div id="lightbox-image" class="loading" />');
	var theCloseLink = jQuery('<div id="lightbox-close" />');
	jQuery(theCloseLink).click(function(){
		jQuery('#lightbox-shadow,#lightbox').remove();
	});
	jQuery(theLightbox).append(theCloseLink);
	jQuery('body').append(theLightbox);
	
	var theImage = jQuery('<img />');
	jQuery(theImage).attr('src', imageUrl);
	jQuery(theImage).load(function(){
		var theWidth = this.width;
		var theHeight = this.height;
		var leftMargin = '-' + (theWidth / 2);
		if(theWidth > jQuery(window).width()){
			leftMargin = '-' + (jQuery(window).width() / 2);
		}
		jQuery('#lightbox').animate({
			width: theWidth + 'px',
			height: (theHeight + jQuery('#lightbox').height() - 50) + 'px',
			marginLeft: leftMargin + 'px'
		}, 500, function(){
			jQuery('#lightbox-image').removeClass('loading').append(theImage);
		});
	});
}

var imgSizer = {
     Config : {
          imgCache : []
          ,spacer : "/wp-content/themes/nautical/images/spacer.gif"
     }
     ,collate : function(aScope) {
          var isOldIE = (document.all && !window.opera && !window.XDomainRequest) ? 1 : 0;
          if (isOldIE && document.getElementsByTagName) {
               var c = imgSizer;
               var imgCache = c.Config.imgCache;
               var images = (aScope && aScope.length) ? aScope : document.getElementsByTagName("img");
               for (var i = 0; i < images.length; i++) {
                    images.origWidth = images.offsetWidth;
                    images.origHeight = images.offsetHeight;
                    imgCache.push(images);
                    c.ieAlpha(images);
                    images.style.width = "100%";
               }
               if (imgCache.length) {
                    c.resize(function() {
                         for (var i = 0; i < imgCache.length; i++) {
                              var ratio = (imgCache.offsetWidth / imgCache.origWidth);
                              imgCache.style.height = (imgCache.origHeight * ratio) + "px";
                         }
                    });
               }
          }
     }
     ,ieAlpha : function(img) {
          var c = imgSizer;
          if (img.oldSrc) {
               img.src = img.oldSrc;
          }
          var src = img.src;
          img.style.width = img.offsetWidth + "px";
          img.style.height = img.offsetHeight + "px";
          img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')"
          img.oldSrc = src;
          img.src = c.Config.spacer;
     }
     // Ghettomodified version of Simon Willison's addLoadEvent() -- http://simonwillison.net/2004/May/26/addLoadEvent/
     ,resize : function(func) {
          var oldonresize = window.onresize;
          if (typeof window.onresize != 'function') {
               window.onresize = func;
          } else {
               window.onresize = function() {
                    if (oldonresize) {
                         oldonresize();
                    }
                    func();
               }
          }
     }
}