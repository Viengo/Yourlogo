$(function () {
    $('.navbar-nav').on('click', function () {
        if ($('.navbar-header .navbar-toggle').css('display') != 'none') {
            $(".navbar-header .navbar-toggle").trigger("click");
        }
    });
});
jQuery(document).ready(function($) {
    $(".royalSlider").royalSlider({
        // general options go gere
        keyboardNavEnabled: true,
        numImagesToPreload: 5,
        loop: true,
        startSlideId: 3,
        addActiveClass: true,
        autoplay: {
            enabled: true,
            delay: 1000
        },
        visibleNearby: {
            enabled: true,
            centerArea: 0.22,
            center: true,
            breakpoint: 650,
            breakpointCenterArea: 0.2,
            navigateByCenterClick: true
        }
    });
});
