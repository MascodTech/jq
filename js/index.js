/**
 * Аналоги `window.onload`
 * $(document).ready(function () {});
 * $(window).load(function() {});
 * $(function() {});
 */

$(function () {

    /**
     * Animate
     */

    var fontSize = $('h1').click(function () {

        // $(this)
        //     .animate({ opacity: 0 }, 1000)
        //     .animate({ opacity: 1 }, 1000)
        //     .animate({ opacity: 0 }, 1000)
        //     .animate({ opacity: 1 }, 1000)

        $(this)
            .animate({ fontSize: '+=10px' }, 300, function () {
                var fzOld = parseFloat(fontSize);
                var fzNew = parseInt($(this).css('font-size'));

                if ((fzOld * 2) < fzNew) {
                    $(this).animate({'font-size': fzOld + 'px'}, 300);
                }
            });

    }).css('font-size');

});