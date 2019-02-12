$(function () {
    var bannerBackImg = $('.banner').css('background-image', 'url(../img/banner.jpg)');
    bannerBackImg.hide().fadeIn(1000);
    $('.banner *').hide().fadeIn(2000);


    $('.swl-title-card-container h1, .swl-card, .swr-title-card-container h1, .swr-card, #nav-wrapper').hide();
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
    })

    $('#nav-button').on('click', function () {
        $('#nav-wrapper').show(500);
        $('#nav-wrapper span').on('click', function () {
            $('#nav-wrapper').hide(500);
        })
    })
})