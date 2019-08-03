$(function () {

    var $ask = $('.faq .ask');
    var $answer = $('.faq .answer');

    $ask.click(function (event) {
        event.preventDefault();

        var $current = $(this);

        var selectorId = $current.attr('href');
        var $next = $(selectorId);

        if (event.ctrlKey === false) {
            $answer.not($next).stop(true).slideUp('fast');
            $ask.not($current).removeClass('active');
        }
        
        $next.stop(true).slideToggle('fast');
        $current.toggleClass('active');
    });


});