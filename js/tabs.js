$(function() {
	$('.js-tabs').on('click', '.tab-header', function(event) {
		event.preventDefault();
		var trgt = $(this);
		trgt.toggleClass('open');
		trgt.parents('.tab').find('.tab-inner').fadeToggle('slow');
	});

    if (window.location.hash == '#reach')
        $('.js-tabs').find('.tab-header').trigger('click');
});