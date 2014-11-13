var toggleClass = {
    init: function () {
        toggleClass.toggle();
    },
    toggle: function () {
        $('.tab').not('.tab-4').click(function () {
            if ($(this).hasClass('active-tab') === false) {
                var indexOfActiveTab = $('.active-tab').index();
                var activeTab = ('.sub-tab-' + (indexOfActiveTab + 1));
                $(activeTab).addClass('hidden');
                $('.tab').removeClass('active-tab')
                $(this).addClass('active-tab')
                var indexOfThisTab = $(this).index();
                var thisTab = ('.sub-tab-' + (indexOfThisTab + 1));
                $(thisTab).removeClass('hidden');
            }
        });
    }
};

$(document).ready(function() {
    $('input').placeholder();
    toggleClass.init();
})