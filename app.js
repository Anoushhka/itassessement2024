$(document).ready(function () {
  $(".banner-slider").slick({
	autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: false,
    speed: 1000,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
	arrows : false,
  });
});
