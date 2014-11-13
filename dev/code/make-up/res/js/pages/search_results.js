var search = {
    init: function () {
        search.doItBitch();
    },
    doItBitch: function () {
        var keyword = $('#keyword').text();
        $('.b-2').html($('.b-2').html().replace(new RegExp(keyword,'g'), '<span class="accentuation">' + keyword + '</span>'))
    }
};

$(document).ready(function() {
    search.init();
})