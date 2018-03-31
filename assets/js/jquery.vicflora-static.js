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

        var navbar = $('#navbar>ul:eq(0)');

        var dropdown = $('<li/>', {
            class: "dropdown"
        }).appendTo(navbar);

        $('<a/>', {
            href: "#",
            class: "dropdown-toggle",
            "data-toggle": "dropdown",
            role: "button",
            "aria-expanded": "false"
        }).append('More <span class="caret"></span>').appendTo(dropdown);

        var dropdownMenu = $('<ul/>', {
            class: "dropdown-menu",
            role: "menu"
        }).appendTo(dropdown);

        var length = $('#navbar>ul:eq(0)>li').length - 1;
        var offset = 5;

        console.log($(window).width());
        if ($(window).width() <= 1200) {
            offset = 3;
        }
        console.log(offset);

        $('#navbar>ul:eq(0)>li:lt(' + length + '):gt('+ offset + ')')
                .appendTo(dropdownMenu);

        if (dropdownMenu.children('li.active').length > 0) {
            dropdown.addClass('active');
        }
    }
});

/*
 *             <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">More <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">

 */
