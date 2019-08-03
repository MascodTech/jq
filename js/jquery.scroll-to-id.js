$(function () {

    var $links = $('.js-sroll-to-id');
    /**
     * Продолжительность анимации (в мс.)
     */
    var duration = 700;

    var $window = $(window);

    /* Высота Navbar'a */
    var navHeight = $('.nav').outerHeight();

    /* Получаем значение атрибута у первой ссылки в наборе `#features` */
    var id = $links.eq(0).attr('href');

    /* Расстояние до первой секции */
    var firstSectionOffset = $(id).offset().top;
    firstSectionOffset -= (navHeight * 1.1);

    $links.click(function (event) {
        event.preventDefault();

        var $current = $(this);

        /**
         * Получаем селектор по `id` (#features)
         */
        var selectorId = $current.attr('href');

        /**
         * `offset` - Расстояние от верхней точки до блока (в пикселях)
         */
        var offset = $(selectorId).offset().top;

        offset -= navHeight;

        $('html, body').animate({ scrollTop: offset }, duration);
    });


    /*  */


    $window.scroll(function () {
        $links.each(function (i, link) {

            /* Получаем ссылку из набора */
            var $currentLink = $(link);
            /* Получаем значение атрибута `#features` | `#about` ... */
            var id = $currentLink.attr('href');
            /* По `id` находим секцию */
            var $section = $(id);
            /* Получаем расстоение до этой секции */
            var offset = $section.offset().top;
            /* От расстояния отнимаем высоту навигации + погрешность (1.1) */
            offset -= (navHeight * 1.1);

            if ($window.scrollTop() >= offset) {
                $links.not($currentLink).removeClass('active');
                $currentLink.addClass('active');
            }
            else if ($window.scrollTop() < firstSectionOffset) {
                $links.removeClass('active');
            }

        });
    });

});