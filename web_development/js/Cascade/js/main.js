$(function () {
    //FADE IN BANNER
    var bannerBackImg = $('.banner').css('background-image', 'url(../img/banner.jpg)');
    bannerBackImg.hide().fadeIn(500);
    $('.banner *, #navbar *').hide().fadeIn(2000);


    //NAVBAR CLICK ON/OFF
    $('#nav-wrapper').hide();
    $('#nav-button').on('click', function () {
        $('#nav-wrapper').show(500);
        $('#closeNavbar span').on('click', function () {
            $('#nav-wrapper').hide(500);
        })
    })
})

var $window = $(window);
var offset1 = $('#firstSec').offset();



if (offset1.top > $window.scrollTop()) {
    $window.scroll(function () { 
        $('#navbar').css({
            'background-color': 'white'
        })
    });
}








/*$('.swl-title-card-container h1, .swl-card, .swr-title-card-container h1, .swr-card, #nav-wrapper').hide();
$('.swl-title-card-container h1, .swr-title-card-container h1').css({
    marginTop: '-=100'
});
$('.swl-card, .swr-card').css({
    marginTop: '+=100'
});
$(document).on('scroll', function () {
    $('.swl-title-card-container h1, .swr-title-card-container h1, .swl-card, .swr-card').fadeIn({
        queue: false,
        duration: 1500
    });
    $('.swl-title-card-container h1, .swr-title-card-container h1').animate({
        marginTop: '+=100'
    }, 1500);
    $('.swl-card, .swr-card').animate({
        marginTop: '-=100'
    }, 1500);
    $(this).off('scroll');
})*/
