$(document).ready(function () {
    $('.bestsellercars__down').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinity: true,
        draggable: false,
        arrow: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

$(document).ready(function () {
    $('.bestsellercars__down1').slick({
        slidesToShow: 6,
        draggable: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});
