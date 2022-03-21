$(document).ready(function () {
    const productItems = $('.product-slider-item');
    const productImg = $('.product-img img');
    console.log(productImg[0]);
    productItems.each(function (index, item) {
        item.addEventListener('click', function () {
            const img = this.childNodes[1].src;
            productImg[0].src = img;
        });
    });
    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow:
            "<button type='button' class='slick-prev slick-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next slick-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
});