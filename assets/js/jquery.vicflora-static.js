$(function() {
    if ($(window).width() > 992) {

        if ($('#toc').length > 0 && $('#toc').children('.nav').length > 0) {
            $('#toc>.nav:eq(0)').affix({
                offset: {
                    top: $('#toc>.nav:eq(0)').offset().top,
                    bottom: $('footer').height() + 40
                }
            });

            $('body').scrollspy({
                target: "#toc",
                offset: 30
            });
        }

    }
});
