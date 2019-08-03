$(function () {
	var $nav = $('.nav');
	var $window = $(window);
    var offset = $nav.offset().top; 

    var fixed = false;
    function fixedNavbar() {
		if ($window.scrollTop() >= offset && !fixed) {
            $nav.addClass('fixed-top shadow');
            fixed = true;
		} 
		else if ($window.scrollTop() < offset && fixed) {
            $nav.removeClass('fixed-top shadow');
            fixed = false;
		}
	}

    fixedNavbar();
	$window.scroll(fixedNavbar);
});