$(function () {
    var $links = $('.js-modal-show');
    var $modal = $('.modal');
    var $body = $('body');
    var $nav = $('.nav');
    var $btnTop = $('.js-btn-top');

    $links.click(function (event) {
        event.preventDefault();

        $body.addClass('open-modal').css('padding-right', '17px');
        $nav.css('right', '17px');
        $btnTop.hide();

        var selectorID = $(this).attr('href');
        /**
         * Пример:
         *  $('#modal-login')
         *  $('#modal-register')
         */
        $(selectorID).fadeIn('fast');
    });

    function closeModal(selectModal) {
        $(selectModal).fadeOut('fast', function () {
            $body.removeClass('open-modal').removeAttr('style');
            $nav.removeAttr('style');
            $btnTop.show();
        });
    }

    $modal.find('.close').click(function () {
        var selectorID = $(this).attr('data-close');
        closeModal(selectorID);
    });

    $modal.click(function (event) {
        var $currentModal = $(this);

        if ( $currentModal.is( event.target ) ) {
            closeModal($currentModal);
        }
    });
    
});