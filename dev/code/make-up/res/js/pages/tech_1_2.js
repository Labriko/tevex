var toggleClassMenu = {
    init: function () {
        toggleClassMenu.toggle1();
        toggleClassMenu.toggle2();
        
    },
    toggle1: function () {
        $('.main-menu > li > div').click(function () {
            // $('.main-menu > li > div').not(this).parent().removeClass('active')
            // $('.main-menu > li > div').not(this).next().addClass('hidden')
            $(this).parent().toggleClass('active')
            $(this).next().toggleClass('hidden')

            // $('.main-menu > li > div').not(this).children().next().removeClass('hidden')
            $(this).children().next().toggleClass('hidden')
            
        });
    },
    toggle2: function () {
        $('.sub-menu > li > div').click(function () {
            // $('.sub-menu > li > div').not(this).parent().removeClass('active')
            // $('.sub-menu > li > div').not(this).next().addClass('hidden')
            $(this).parent().toggleClass('active')
            $(this).next().toggleClass('hidden')

            // $('.sub-menu > li > div').not(this).children().next().removeClass('hidden')
            $(this).children().next().toggleClass('hidden')
        });
    }
};

$(document).ready(function() {
    toggleClassMenu.init();
})