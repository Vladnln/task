const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 2,
  loop: false,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 2
    },
    850: {
      slidesPerView: 1
    },
    0: {
      slidesPerView: 1
    }
  }
})