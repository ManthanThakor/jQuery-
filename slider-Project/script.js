jQuery(function ($) {
  $(".flickfeed").on("init", function () {
    var currentfirst = $(this).find(".slick-active").first();
    $(currentfirst).addClass("firster");
    // console.log('thishere');
    var currentlast = $(this).find(".slick-active").last();
    $(currentlast).addClass("laster");
  });

  function getSliderSettings() {
    return {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6.17,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4.17,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3.17,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 2.25,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
  }

  $(".flickfeed").slick(getSliderSettings());

  $(".slick-slide").mouseenter(function () {
    if ($(this).hasClass("firster")) {
      //  console.log('firster');
      var hoverslide = $(this);
      $(hoverslide).nextAll().addClass("furthernextslides");
      //  $(hoverslide).prevAll().addClass('prevslides');
    } else if ($(this).hasClass("laster")) {
      var hoverslide = $(this);
      $(hoverslide).prevAll().addClass("furtherprevslides");
    } else {
      var hoverslide = $(this);
      $(hoverslide).nextAll().addClass("nextslides");
      $(hoverslide).prevAll().addClass("prevslides");
    }
  });

  $(".slick-slide").mouseleave(function () {
    $(this).parent().find(".slick-slide").removeClass("nextslides");
    $(this).parent().find(".slick-slide").removeClass("prevslides");
    $(this).parent().find(".slick-slide").removeClass("furthernextslides");
    $(this).parent().find(".slick-slide").removeClass("furtherprevslides");
  });

  // on slide change, find the new first slide-active
  $(".flickfeed").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var currentfirst = $(this).find(".slick-active").first();
      $(this).find(".slick-slide").removeClass("firster");
      $(currentfirst).addClass("firster");
      var currentlast = $(this).find(".slick-active").last();
      $(this).find(".slick-slide").removeClass("laster");
      $(currentlast).addClass("laster");
    }
  );

  // on slide init, find the new first slide-active
});
