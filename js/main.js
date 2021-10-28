const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 200,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button__next',
      prevEl: '.slider-button__prev',
    },
});
var mySwiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});