$(function () {
    $('.navbar-nav').on('click', function () {
        if ($('.navbar-header .navbar-toggle').css('display') != 'none') {
            $(".navbar-header .navbar-toggle").trigger("click");
        }
    });
});

$(function () {
var $clientcarousel = $('#clients-list');
var clients = $clientcarousel.children().length;
var clientwidth = (clients * 425); // 140px width for each client item
$clientcarousel.css('width',clientwidth);

var rotating = true;
var clientspeed = 3000;
var seeclients = setInterval(rotateClients, clientspeed);

$(document).on({
    mouseenter: function(){
        rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
        rotating = true;
    }
}, '#clients');

function rotateClients() {
    if(rotating != false) {
        var $first = $('#clients-list li:first');
        $first.animate({ 'margin-left': '-425px' }, 600, function() {
            $first.remove().css({ 'margin-left': '100px' });
            $('#clients-list li:last').after($first);
        });
    }
}
});
