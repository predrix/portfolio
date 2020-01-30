$(window).resize(function() {
	if ($(document).width() < 400) {
		$('.skill').css({'flex-direction': 'column'});
	} else {
        $('.skill').css({'flex-direction': 'row'});
    }
});