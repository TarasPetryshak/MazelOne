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
        autoplayTimeout: 3000
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
                items: 3
            },
            544: {
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
        autoplayTimeout: 3000
    })
})
let firstCounterElement = $('#counter-1');
let counterPosition = (elem) => elem[0].getBoundingClientRect().top - $(window).height() + 50;
let flag = true;
let drawLine = () => {
    if (flag) {
        let line = $(".skills__block_element-inner");
        let counters = $(".count");
        let countersQuantity = counters.length;
        let counter = [];
        for (let i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }
        let count = (start, value, id) => {
            let localStart = start;
            setInterval(function() {
                if (localStart < value) {
                    localStart++;
                    line[id].style.width = `${localStart}%`;
                }
            }, 35);
        }
        for (let j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }
    }
    flag = false;
};


$(document).scroll(() => {
    if (counterPosition(firstCounterElement) < 0) {
        drawLine();
    }
});
let secondCounterElement = $('#counter-2');
let flag2 = true;
let setNumber = () => {
    if (flag2) {
        let counters = $(".count-2");
        let countersQuantity = counters.length;
        let counter = [];
        for (let i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }
        let count = (start, value, id) => {
            let localStart = start;
            setInterval(function() {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart;
                }
            }, 10);
        }
        for (let j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }
    }
    flag2 = false;
};
$(document).scroll(() => {
    if (counterPosition(secondCounterElement) < 0) {
        setNumber();
    }
})

let elementsBlocks = [
    'video',
    'slider',
    'icon',
    'content',
    'cover'
];
$('.elements__nav_box').click(() => {
    event.preventDefault();
    let target = event.target.id;
    for (let act of elementsBlocks) {
        if (target == act) {
            for (let act of elementsBlocks) {
                if (target == act) {
                    $(`.${target}`).removeClass('elements__block-hidden');
                } else {
                    $(`.${act}`).addClass('elements__block-hidden');
                }
            }
        }
    }
})