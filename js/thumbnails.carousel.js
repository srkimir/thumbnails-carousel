// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {

	var conf = {
		carouselParent: '.carousel',
		center: true,
		backgroundControl: false,
		look: 'normal'
	};

	var cache = {
		$carouselContainer: $(conf.carouselParent),
		$thumbnailsContainer: $('.thumbnails-carousel'),
		$thumbnailsLi: $('.thumbnails-carousel li'),
		$carouselControls: $(conf.carouselParent + ' .carousel-control')
	};

	function init() {
		cache.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix');
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(conf.look == 'fancy') {
			cache.$thumbnailsContainer.addClass('scaled-thumbnails-carousel-fix');
			cache.$thumbnailsLi.first().addClass('scaled-active-thumbnail');
		}

		if(!conf.backgroundControl) {
			cache.$carouselControls.addClass('controls-background-reset');
		}

		if(conf.center) {
			cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
		}
	}

	function refreshOpacities(domEl) {
		cache.$thumbnailsLi.removeClass('active-thumbnail scaled-active-thumbnail');
		cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');

		if(conf.look == 'fancy') {
			cache.$thumbnailsLi.eq($(domEl).index()).addClass('scaled-active-thumbnail');
		}
	}	

	function bindUiActions() {
		cache.$carouselContainer.on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget);
		});

		cache.$thumbnailsLi.click(function(){
			cache.$carouselContainer.carousel($(this).index());
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);

		init();
		bindUiActions();

		return this;
	}


})(window, jQuery);

// Kick it
$('.thumbnails-carousel').thumbnailsCarousel({
	look: 'fancy'
});