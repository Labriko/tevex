var toggleClassMenu = {
    init: function () {
        toggleClassMenu.toggle();
    },
    toggle: function () {
        $('.main-menu > li > a').click(function () {
            $('.main-menu > li > a').not(this).removeClass('active-tab')
            $('.main-menu > li > a').not(this).next().addClass('hidden')
            $(this).toggleClass('active-tab')
            $(this).next().toggleClass('hidden')
        });
    }
};

$(document).ready(function() {
    toggleClassMenu.init();
})