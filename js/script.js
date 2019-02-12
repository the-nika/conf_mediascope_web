$(function() {
	$('.js-nav-toggle').on('click', function(event) {
		event.preventDefault();
		$('.nav').fadeToggle().toggleClass('open');
	});

	function stickyFooter() {
		if ($('.js-main').length) {
			var ft = $('.js-footer'),
				hd = $('.js-header'),
				main = $('.js-main');
				mheight = $(window).innerHeight() - parseInt(hd.css('padding-top')) - parseInt(hd.css('padding-bottom')) - hd.height() - parseInt(ft.css('padding-top')) - parseInt(ft.css('padding-bottom')) - ft.height();
			main.css('min-height', mheight);
		}
	}
	stickyFooter();
	$(window).on('resize', stickyFooter);
});