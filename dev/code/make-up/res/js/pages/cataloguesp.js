var toggleClassCat = {
    init: function () {
        toggleClassCat.toggle();
    },
    toggle: function () {
        $('.minimize-button').click(function () {
            if ($(this).hasClass('turn-button')) {
                $(this).removeClass('turn-button');
                $(this).addClass('minimize-button');
                $('.catalogue').css('height', '140px');
                $('.catalogue-block-2').removeClass('hidden');
                $(this).text('Свернуть');
            } else {
                $(this).removeClass('minimize-button');
                $(this).addClass('turn-button');
                $('.catalogue').css('height', '40px');
                $('.catalogue-block-2').addClass('hidden');
                $(this).text('Развернуть');
            }
        });
    }
};

$(document).ready(function() {
    toggleClassCat.init();
})