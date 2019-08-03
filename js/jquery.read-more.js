$(function () {
    var $links = $('.read-more');

    $links.click(function (event) {
        event.preventDefault();

        var $currentLink = $(this);
        var $textHidden = $currentLink.prev('.text-hidden');

        $textHidden.toggleClass('hidden');

        var showText = $textHidden.hasClass('hidden') === false;

        if (showText) {
            $currentLink.text('Hide');
        }
        else {
            $currentLink.text('Read More');
        }
    });
});