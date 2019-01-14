function main() {

	(function () {
		'use strict';

		$('a.page-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top - 50
						}, 900);
						return false;
					}
			}
		});


		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80
		});

		// Hide nav on click
		$(".navbar-nav li a:not(.dropdown-btn)").click(function (event) {
			// check if window is small enough so dropdown is created
			var toggle = $(".navbar-toggle").is(":visible");
			if (toggle) {
				$(".navbar-collapse").collapse('hide');
			}
		});
		
		// Enable dropdown:hover when width is > 991px
		if (window.innerWidth > 991) {
			$('ul.navbar-nav li.dropdown').hover(function() {
				$(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(400);
			}, function() {
				$(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(400);
			});
		}

		// Nivo Lightbox 
		$('.gallery-item a').nivoLightbox({
			effect: 'slideDown',
			keyboardNav: true,
		});

	}());

}
main();