$(document).ready(function () {
	$('.popup').hide();
	$('[data-popup-btn]').click(function () {
		$('[data-popup="' + $(this).attr('data-popup-btn') + '"]').fadeIn();
	})
	$('.popup').click(function (e) {
		if ($(e.target).hasClass('popup')) {
			$(this).fadeOut();
		}
	})
	$('.popup__btn-close').click(function () {
		$(this).parents('.popup').fadeOut();
	})
})