$(function () {

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

});