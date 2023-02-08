jQuery (document).ready(($) => {
    $('.slider').owlCarousel({
        items:2,
        nav: false,
        dots: false,
        pagination:false,
        margin:0,
        responsiveClass:true,
        navText:[
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:false
                
            },
            542:{
                items:1,
                nav:false
            },
            794:{
                items:1,
                nav:false
            },
            958:{
                items:2,
                nav:false,
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            },
            1440:{
                items:2,
                nav:true,
                loop:false
            }
        }
    
    });
}) 
