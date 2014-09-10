// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {

	var conf = {
		carouselParent: '.carousel',
		center: true,
		backgroundControl: false
	};

	var cache = {
		$thumbnailsContainer: $('.thumbnails-carousel'),
		$thumbnailsLi: $('.thumbnails-carousel li'),
		$carouselControls: $(conf.carouselParent + ' .carousel-control')
	};

	console.log($(conf.carouselParent + ' .carousel-control'));

	function styles() {
		cache.$thumbnailsContainer.width($(conf.carouselParent).width());
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(!conf.backgroundControl) cache.$carouselControls.addClass('controls-background-reset');
		if(conf.center) centerThumbnails();
	}

	function centerThumbnails() {
		cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
	}

	function refreshOpacities(domEl) {
		cache.$thumbnailsLi.removeClass('active-thumbnail');

		activeIndex = $(domEl).index();
		
		cache.$thumbnailsLi.each(function() {
			if(activeIndex + 1 == $(this).data('thumbnail-id')) {
				$(this).addClass('active-thumbnail');
			}
		});
	}

	function bindUiActions() {
		$(conf.carouselParent).on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget);
		});

		cache.$thumbnailsLi.click(function(){
			$(conf.carouselParent).carousel($(this).data('thumbnail-id') - 1);
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);

		styles();
		bindUiActions();

		return this;
	}

})(window, jQuery);

// Kick it
$('.thumbnails-carousel').thumbnailsCarousel({});