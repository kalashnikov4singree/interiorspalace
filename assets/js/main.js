/**
 * Created by V1pBoy on 23.04.2016.
 */
function heightMainSlider(){
    var windowHeight = $(window).height();
    var heightNavbar = $('.top-navigation').innerHeight();
    $('.bg-slider .item').height(windowHeight - heightNavbar);
    $('.slider-project .item').height(windowHeight);
    $('.page-projects-inner-page').css('margin-top', windowHeight)
}
function arrowDown(){
    $(".arrow-down").click(function (){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
}
// setup the tile and then call goto on it the first time
$(document).ready(function(){
    $('.bg-slider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        margin:30,
        smartSpeed:450,
        autoplay: true,
        mouseDrag: false,
        loop:true
    });
    $('.slider-project').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        margin:30,
        smartSpeed:450,
        autoplay: false,
        nav:true,
        loop: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
    });
    $(".live-tile").liveTile();
    heightMainSlider();
    arrowDown();
});
$(window).resize(function(){
    heightMainSlider();
});
