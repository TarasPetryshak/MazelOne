$(document).ready(function() {
    $('#carousel1').owlCarousel({
        rtl: false,
        margin: 20,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            991: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    })
})
$(document).ready(function() {
    $('#carousel2').owlCarousel({
        rtl: false,
        nav: false,
        dots: true,
        loop: true,
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000
    })
})
$(document).ready(function() {
    $('#carousel3').owlCarousel({
        rtl: false,
        nav: true,
        dots: false,
        loop: true,
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 4000
    })
})
$(document).ready(function() {
    $('#carousel4').owlCarousel({
        rtl: false,
        nav: false,
        dots: false,
        loop: true,
        items: 6,
        margin: 30,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
})
$(document).ready(function() {
    $('#carousel5').owlCarousel({
        rtl: false,
        nav: true,
        dots: false,
        loop: true,
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 4000
    })
})

/*$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});*/

/*<div class="count">45</div> 
<div class="count">100</div> 
<div class="count">115</div> 
<div class="count">50</div>
<div class="count">125</div>*/