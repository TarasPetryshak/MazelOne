$(document).ready(function () {$('#carousel1').owlCarousel({
        rtl:false,
        margin:20,
        nav: false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
})
$(document).ready(function () {$('#carousel2').owlCarousel({
        rtl:false,
        nav: false,
        dots:true,
        loop: true,
        items: 1,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000
    })
})