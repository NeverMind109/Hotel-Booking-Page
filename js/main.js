$(document).ready(function () {

  // Настройки для слайдера
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

  // Управление слайдерами с клавиатуры
  const hotelSwiper = new Swiper('.hotel-slider', {
    keyboard: {
      enabled: true,
    },
  });
  const reviwsSwiper = new Swiper('.reviews-slider', {
    keyboard: {
      enabled: true,
    },
  });

  // Мобильное меню
  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

  // Модальные окна
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on ('click', openModal);
  closeModalButton.on ('click', closeModal);

    function openModal () {
      var targetModal = $(this).attr("data-href");
      $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
      $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
    }
    function closeModal (event) {
      event.preventDefault();
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }

  // Валидация форм
  $(".form").each ( function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите свое имя",
          minlength: "Ваше имя должно быть длиннее 2 символов",
        },
        phone: {
          required: "Пожалуйста, укажите свой номер телефона",
        },
        email: {
          required: "Пожалуйста, укажите свой почтовый адрес",
          email: "Ваш почтовый адрес должен соответствовать формату name@domain.com",
        },
      },
    });
  })

  // Parallax effect for newsletter
  $('.parallax-window').parallax({imageSrc: "../img/newsletter-bg.jpg"});

  // Aos animation
  AOS.init();
});