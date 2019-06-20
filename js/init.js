$(function() {
  // materials for 3
  $(".my-slider__img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: false,
    draggable: true
  });

  // materials big
  $(".materials-blocks").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    draggable: false,
    dots: false,
    arrows: true,
    prevArrow: '<div class="slider-arrow slider-arrow_left "></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_right "></div>',
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          dots: false,
          slick: false,
          draggable: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      }
    ]
  });

  // тулс маленькие слайдеры по 3
  $(".tool-block__item").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false
    // responsive: [
    // 		{
    // 				breakpoint: 600,
    // 				settings: {
    // 						dots: false,
    // 						slick: true
    // 				}
    // 		},
    // 		{
    // 				breakpoint: 900,
    // 				settings: {
    // 						dots: true,
    // 						slick: false
    // 				}
    // 		}
    // ]
  });

  // тулс большой слайдер
  $(".tools-blocks").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    draggable: false,
    arrows: true,
    prevArrow: '<div class="slider-arrow slider-arrow_left "></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_right "></div>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: false
        }
      }
    ]
  });

  // прототип блок  основной большой слайдер
  $(".prototyping-blocks").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    draggable: false,
    arrows: true,
    prevArrow: '<div class="slider-arrow slider-arrow_left "></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_right "></div>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          draggable: false
        }
      }
    ]
  });

  // прототип маленькие слайдеры
  $(".prototyping-block__item").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false
    // responsive: [
    // 		{
    // 				breakpoint: 600,
    // 				settings: {
    // 						dots: false,
    // 						slick: true
    // 				}
    // 		},
    // 		{
    // 				breakpoint: 900,
    // 				settings: {
    // 						dots: true,
    // 						slick: false
    // 				}
    // 		}
    // ]
  });
});
