$(function () {
    $('.navbar-nav').on('click', function () {
        if ($('.navbar-header .navbar-toggle').css('display') != 'none') {
            $(".navbar-header .navbar-toggle").trigger("click");
        }
    });
});