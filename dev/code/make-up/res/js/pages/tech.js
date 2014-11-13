var toggleClass = {
    init: function () {
        toggleClass.toggle();
    },
    toggle: function () {
        $('.minimize-button').click(function () {
            if ($(this).hasClass('turn-button')) {
                $(this).removeClass('turn-button');
                $(this).addClass('minimize-button');
                $('.tech').css('height', '358px');
                $('.tech-block-2').removeClass('hidden');
                $(this).text('Свернуть');
            } else {
                $(this).removeClass('minimize-button');
                $(this).addClass('turn-button');
                $('.tech').css('height', '40px');
                $('.tech-block-2').addClass('hidden');
                $(this).text('Развернуть');
            }
        });

        $('.tech-type').click(function() {
            $('.tech-type').not(this).children().addClass('hidden');
            $(this).children().toggleClass('hidden')
        })
        $('.input-2').click(function (event) {
            event.stopPropagation();
        });

        $('.tech-logo').click(function() {
            var src = $(this).attr('src');
            if (src.indexOf('act') == -1) {
                var src1 = src.substr(0, 8);
                var src2 = src.substr(8);
                $(this).attr('src', src1 + 'act-' + src2);
                if ($('.tech-type-container').hasClass('hidden')) {
                    $('.tech-type-container').removeClass('hidden');
                    $('.grey-hr').css('margin-top', '0');
                } else {
                    for (i = 1; i <= 19; i++) {
                        $('.tech-logo-' + i).attr('src', 'res/img/tech-logo-' + i + '.png');
                    }
                    $(this).attr('src', src1 + 'act-' + src2);
                }
            } else {
                var src1 = src.substr(0, 8);
                var src2 = src.substr(12);
                $(this).attr('src', src1 + src2);
                $('.tech-type-container').addClass('hidden');
                $('.grey-hr').css('margin-top', '45px');
            }
        });
    }
};

$(document).ready(function() {
    toggleClass.init();
})