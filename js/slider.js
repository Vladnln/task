const swiper = new Swiper ('.swiper', {
    direction:'horizontal',
    slidesPerView:2,
    loop:false,
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },
      breakpoints:{
        1100:{
          spaceBetween: -120
        },
        932:{
          spaceBetween: -75
        },
        910:{
          spaceBetween: -70
        },
        879:{
          spaceBetween: -50
        },
        849:{
          spaceBetween: -60
        },
        750:{
          spaceBetween: -60
        },
        732:{
          slidesPerView: 2
        },
        0:{
          slidesPerView:1
        }
      }
})


