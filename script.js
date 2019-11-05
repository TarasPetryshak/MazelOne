$('.owl-carousel').owlCarousel({
    rtl:false,
    margin:10,
    nav: true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
let projects = {
    1: 'project-1',
    2: 'project-2',
    3: 'project-3',
    4: 'project-4',
    5: 'project-5',
    6: 'project-6'
};
let galleryPhotos = {
    1: 'photo-gallery-1',
    2: 'photo-gallery-2',
    3: 'photo-gallery-3',
    4: 'photo-gallery-4',
    5: 'photo-gallery-5',
    6:' photo-gallery-6'
}
$('.menu-slider').click(() => {
    for (let id in projects) {
        if ($(event.target).hasClass(projects[id])) {
            $('.gallery-images').find(`#${galleryPhotos[id]}`).addClass('fullScreen');
            $('section.gallery').css({'top':'0'});
        }
    }
})