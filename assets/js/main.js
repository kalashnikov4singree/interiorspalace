/**
 * Created by V1pBoy on 23.04.2016.
 */
function heightMainSlider(){
    var windowHeight = $(window).height();
    var heightNavbar = $('.top-navigation').innerHeight();
    var item = $('.bg-slider .item').height(windowHeight - heightNavbar);
}
function arrowDown(){
    $(".arrow-down").click(function (){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
}
// carousel mode: random
function getRandomOptions(){
    // this could obviously be a lot more random
    var doIt = Math.floor(Math.random() * 1001) % 2 == 0;
    // set random options supported by the goto method
    // http://www.drewgreenwell.com/projects/metrojs#liveTileMethods
    return {
        index: "next",
        delay: 3000,
        animationDirection: doIt ? 'forward' : 'backward',
        direction: doIt ? 'vertical' : 'horizontal'
    };
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
    $(".live-tile").liveTile({
        animationComplete: function(tileData){
            $(this).liveTile("goto", getRandomOptions());
        }
    }).liveTile("goto", getRandomOptions());
    heightMainSlider();
    arrowDown();
});
$(window).resize(function(){
    heightMainSlider();
});
