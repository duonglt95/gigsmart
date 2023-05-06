jQuery(document).ready(function(){
	setHeaderHeight();
	setAnchorLinkHeight();
	setTopStickyBar();
	buttonGuideScroll();
});

jQuery(window).resize(function() {
	setHeaderHeight();
	setAnchorLinkHeight();
	setTopStickyBar();
});

function resetPostHeight() {
	jQuery('.post').each(function(){
		jQuery(this).find('.post-image').css("min-height", "0");
		jQuery(this).find('.post-content').css("min-height", "0");
	});
}

function setPostHeight() {
	var postImageMaxHeight = 0,
		postContentMaxHeight = 0;

	jQuery('.post').each(function(){
		jQuery(this).find('.post-image').css("min-height", "0");
		var postImageHeight = jQuery(this).find('.post-image img').outerHeight();
		if (postImageHeight > postImageMaxHeight) {
			postImageMaxHeight = postImageHeight;
		}

		jQuery(this).find('.post-content').css("min-height", "0");
		var postContentHeight = jQuery(this).find('.post-content').outerHeight();
		if (postContentHeight > postContentMaxHeight) {
			postContentMaxHeight = postContentHeight;
		}
	});

	jQuery('.post').each(function(){
		jQuery(this).find('.post-image img').css("min-height", postImageMaxHeight + "px");
		jQuery(this).find('.post-content').css("min-height", postContentMaxHeight + "px");
	});
}
jQuery(window).scroll(function(){
	var headerHeight = jQuery('.top-header-desktop').height();
	if (headerHeight == 0) {
		headerHeight = jQuery('.top-header').height();
	}
	if (jQuery('#wpadminbar').length > 0) {
		headerHeight += jQuery('#wpadminbar').height();
	}
	var windowScrollTop = jQuery(window).scrollTop();
	jQuery('.how-it-work-worker .guide-section').each(function(){
		var guideSectionOffset = jQuery(this).find('.content').offset();
		var limitScrollOffset = guideSectionOffset.top + jQuery(this).find('.content').height() - (600 + headerHeight);
		if (windowScrollTop > guideSectionOffset.top - headerHeight - 10 && windowScrollTop <= limitScrollOffset) {
			var top = windowScrollTop - guideSectionOffset.top  + headerHeight + 20;
			jQuery(this).find('.image-placeholder').css({ top: top + 'px' });;
		}
	});

	if (jQuery('.section-anchor-link').length > 0) {
		var sectionAnchorLinkOffset = jQuery('.section-anchor-link-placeholder').offset().top;
		var limitScrollOffset = sectionAnchorLinkOffset + jQuery('.list-guide-section').height();
		if(jQuery(window).width() >= 767) {
			if ((windowScrollTop > sectionAnchorLinkOffset - 50) && windowScrollTop < limitScrollOffset) {
				var sectionAnchorLink = jQuery('.section-anchor-link').height();
				jQuery('.section-anchor-link').addClass('pinned');
				jQuery('.section-anchor-link.pinned').css('padding-top', headerHeight +'px');
			} else {
				jQuery('.section-anchor-link').removeClass('pinned');
				jQuery('.section-anchor-link').css('padding-top', '0px');
			}
		} else {
			if ((windowScrollTop > sectionAnchorLinkOffset + 150) && windowScrollTop < limitScrollOffset) {
				var sectionAnchorLink = jQuery('.section-anchor-link').height();
				jQuery('.section-anchor-link').addClass('pinned');
			} else {
				jQuery('.section-anchor-link').removeClass('pinned');
			}
		}
	}
});

function buttonGuideScroll() {
    var adminbarHeight = 0;
    var anchorHeight = 0;
    if (jQuery('#wpadminbar').length > 0) {
        adminbarHeight = jQuery('#wpadminbar').height();
        anchorHeight = jQuery('#wpadminbar').height();
    }
    if(jQuery('.section-anchor-link').length > 0) {
    	anchorHeight += jQuery('.section-anchor-link').height();
    }
    jQuery(".guide-button-scroll").click(function() {
        var getId = jQuery(this).find('span').attr('content');
        var heightScroll = jQuery("#"+getId).offset().top - anchorHeight;
        if(jQuery(window).width() <= 767) {
            jQuery('html, body').animate({
                scrollTop: jQuery("#"+getId).offset().top - 145 - adminbarHeight
            }, 100);
        } else {
            jQuery('html, body').animate({
                scrollTop: heightScroll
            }, 100);
        }
    });
    jQuery(".button-scroll").click(function() {
        var getId = jQuery(this).find('span').attr('content');
        var heightScroll = jQuery("#"+getId).offset().top - anchorHeight;
        if(getId == 'how-to-hire') {
        	if(jQuery(window).width() <= 767) {
	            jQuery('html, body').animate({
	                scrollTop: jQuery("#"+getId).offset().top - 30 - adminbarHeight
	            }, 100);
	        } else {
	            jQuery('html, body').animate({
	                scrollTop: jQuery("#"+getId).offset().top - 100 - adminbarHeight
	            }, 100);
	        }
        } else {
        	if(jQuery(window).width() <= 767) {
	            jQuery('html, body').animate({
	                scrollTop: jQuery("#mobile-"+getId).offset().top - 145 - adminbarHeight
	            }, 100);
	        } else {
	            jQuery('html, body').animate({
	                scrollTop: heightScroll
	            }, 100);
	        }
        }
    });
}

jQuery(window).on('resize', function(){
    setHeaderHeight();
});

function setHeaderHeight(){
	if (jQuery(window).width() <= 991) {
		if (jQuery(window).width() > 600) {
			if (jQuery('#wpadminbar').length > 0) {
				adminbarHeight = jQuery('#wpadminbar').height();
				jQuery('.is-mobile .top-header').css('top', adminbarHeight + 'px');
			}
		} else {
			var headerPosition = 0;
			if (jQuery('#wpadminbar').length > 0) {
				adminbarHeight = jQuery('#wpadminbar').height();
				headerPosition = adminbarHeight;
			}
			jQuery('.is-mobile .top-header').css('top', headerPosition + 'px');
		}

		var headerHeight = jQuery('.is-mobile .top-header').height();
		jQuery('.is-mobile .top-header-holder').height(headerHeight);
	}
	// var headerHeightDesktop = jQuery('.main-header .top-header-desktop').height();
	// jQuery('.top-header-holder-desktop').height(headerHeightDesktop);
}

if (jQuery(window).width() <= 600) {
	var headerPosition = 0;
	adminbarHeight = 0;
	if (jQuery('#wpadminbar').length > 0) {
		adminbarHeight = jQuery('#wpadminbar').height();
		headerPosition = adminbarHeight;
	}
	jQuery(window).scroll(function(){
		var scrollTop = jQuery(window).scrollTop();
		headerPosition = adminbarHeight > scrollTop ? adminbarHeight - scrollTop : 0;
		jQuery('.is-mobile .top-header').css('top', headerPosition + 'px');
	});
}

function setAnchorLinkHeight(){
	var anchorLinkHeight = jQuery('.section-anchor-link').height();
	jQuery('.section-anchor-link-placeholder').height(anchorLinkHeight);
}

function setTopStickyBar(){
	if (jQuery('#wpadminbar').length > 0) {
		var adminBarHeight = jQuery('#wpadminbar').height();
		jQuery('.top-header-desktop').css('top', adminBarHeight + 'px');
	}
}

jQuery('.guide').click(function(){
	jQuery(this).parent().find('.guide').removeClass('active');
    jQuery(this).addClass('active');
});

if (jQuery(window).width() >= 768) {
	jQuery('.list-image-guide').carousel({
		interval: false
	});

	// jQuery('.guide .guide-wrap').hover(function(){
	// 	jQuery(this).trigger("click");
	// });
	jQuery('.guide').hover(function () {
        jQuery(this).find('.guide-wrap').trigger("click");
    });
	jQuery('.guide .guide-content a ').click(function(){
		var href = jQuery(this).attr('href');
		window.open(href, '_blank');
	});
};

if (jQuery(window).width() < 768) {
	jQuery('.worker-list-image-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		asNavFor: '.worker-list-guide',
	});
	jQuery('.worker-list-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.worker-list-image-guide',
		focusOnSelect: true,
	});

	jQuery('.business-guide-find-list-image-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		asNavFor: '.business-guide-find-list-guide'
	});
	jQuery('.business-guide-find-list-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.business-guide-find-list-image-guide',
		focusOnSelect: true,
	});

	jQuery('.business-guide-hire-list-image-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		asNavFor: '.business-guide-hire-list-guide'
	});
	jQuery('.business-guide-hire-list-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.business-guide-hire-list-image-guide',
		focusOnSelect: true,
	});

	jQuery('.business-guide-pay-list-image-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		asNavFor: '.business-guide-pay-list-guide'
	});
	jQuery('.business-guide-pay-list-guide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.business-guide-pay-list-image-guide',
		focusOnSelect: true,
	});
}

jQuery(document).ready(function () {
    jQuery('.popup-worker').on('hide.bs.modal', function() { 
    	var url = window.location.href;
    	var hash = window.location.hash;
    	var newUrl = url.replace(hash,"");
		if (typeof window.history.replaceState == 'function') {
		  history.replaceState(null, null, newUrl);
		}
    }) ;
    jQuery(".back-to-top-button").click(function () {
	   jQuery("html, body").animate({scrollTop: 0}, "fast");
	});
});
