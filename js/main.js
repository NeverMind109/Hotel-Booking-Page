const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    speed: 200,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
});
// var hotelSlider = new Swiper('.hotel-slider', {
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// });


const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  speed: 200,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});
// var reviewsSlider = new Swiper('.reviews-slider', {
// keyboard: {
//   enabled: true,
//   onlyInViewport: false,
// },
// });

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
})