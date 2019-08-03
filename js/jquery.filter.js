$(function () {

    var $buttons = $('.js-filter');
    var $cards = $('.js-filter-card');
    
    $buttons.click(function () {
        /* Получаем ключевое слово из атрибута `primary` | `success` | `danger` | `all` */
        var key = $(this).attr('data-filter');

        if (key === 'all') {
            /* Показываем все карточки */
            $cards.stop(true).slideDown('fast');

            /* Останавливаем выполнение функции */
            return;
        }

        /* Шаблон по которому выбираем нужные карточки */
        var filterTemplate = '[data-filter-card=' + key + ']';
        /* Скрываем все карточки, которые не проходят по шаблону */
        $cards.not(filterTemplate).stop(true).slideUp('fast');
        /* Показываем все карточки, которые проходят по шаблону */
        $cards.filter(filterTemplate).stop(true).slideDown('fast');
    });

});