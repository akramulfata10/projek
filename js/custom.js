$(".slick_slider").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  prevArrow: '<i class="bi bi-caret-left left_arrow"></i>',
  nextArrow: '<i class="bi bi-caret-right right_arrow"></i>',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
