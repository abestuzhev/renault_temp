$(document).ready(function(){
  $('.home-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    cssEase: 'linear'
  });
});
