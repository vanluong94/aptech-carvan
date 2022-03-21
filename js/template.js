document.getElementById('mobileMenuBtn').addEventListener('click', (e) => {
    document.querySelector('body').classList.toggle('mobile-menu-active');
})

// ARROW BACK TO HEADER
window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

document.getElementById('scrollTopBtn').addEventListener("click", function () {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
});

jQuery('#homeSlider .slider__content').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    infinite: false,
});

jQuery('#carTypeSlider .slick-slider').slick({
    slidesToShow: 8,
    infinite: false,
    prevArrow: '#carTypeSlider .slick-prev',
    nextArrow: '#carTypeSlider .slick-next',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

jQuery('#dealOfTheWeekSlider .slick-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinity: true,
    draggable: false,
    arrow: true,
    prevArrow: '#dealOfTheWeekSlider .slick-prev',
    nextArrow: '#dealOfTheWeekSlider .slick-next',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]
});

jQuery('#bestSellerCars .slick-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinity: true,
    draggable: false,
    arrow: true,
    prevArrow: '#bestSellerCars .slick-prev',
    nextArrow: '#bestSellerCars .slick-next',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]
});

jQuery('#popularBrandsSlider .slick-slider').slick({
    slidesToShow: 6,
    draggable: false,
    prevArrow: '#popularBrandsSlider .slick-prev',
    nextArrow: '#popularBrandsSlider .slick-next',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});