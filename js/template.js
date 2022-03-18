document.getElementById('mobileMenuBtn').addEventListener('click', (e) => {
    document.querySelector('body').classList.toggle('mobile-menu-active');
})

jQuery('#homeSlider .slider__content').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    infinite: false,
});

jQuery('#carTypeSlider .slick-slider').slick({
    slidesToShow: 8,
    infinite: false,
    prevArrow: '#carTypeSlider .slick-prev',
    nextArrow: '#carTypeSlider .slick-next'
});

jQuery('#dealOfTheWeekSlider .slick-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinity: true,
    draggable: false,
    arrow: true,
    prevArrow: '#dealOfTheWeekSlider .slick-prev',
    nextArrow: '#dealOfTheWeekSlider .slick-next'
});

jQuery('#bestSellerCars .slick-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinity: true,
    draggable: false,
    arrow: true,
    prevArrow: '#dealOfTheWeekSlider .slick-prev',
    nextArrow: '#dealOfTheWeekSlider .slick-next'
});

jQuery('#popularBrandsSlider .slick-slider').slick({
    slidesToShow: 6,
    draggable: false,
    prevArrow: '#popularBrandsSlider .slick-prev',
    nextArrow: '#popularBrandsSlider .slick-next'
});