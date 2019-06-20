$(function(){
	$('.materials-blocks').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: true,
		responsive: [
						{
								breakpoint: 992,
								settings: {
										slidesToShow: 3,
										slidesToScroll: 2,
										infinite: true,
										arrows: true
								}
						},
						{
								breakpoint: 768,
								settings: {
										slidesToShow: 2,
										slidesToScroll: 2,
										arrows: true
								}
						},
						{
								breakpoint: 480,
								settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
										arrows: true
								}
						}
				]
	});

	$('.my-slider__img').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		dots: true
	}),


	$('.tools-blocks').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: true,
		responsive: [
						{
								breakpoint: 992,
								settings: {
										slidesToShow: 3,
										slidesToScroll: 2,
										infinite: true,
										arrows: true
								}
						},
						{
								breakpoint: 768,
								settings: {
										slidesToShow: 2,
										slidesToScroll: 2,
										arrows: true
								}
						},
						{
								breakpoint: 480,
								settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
										arrows: true
								}
						}
				]
	});

	$('.tool-block__item').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		dots: true
	}),


	$('.prototyping-blocks').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: true,
		responsive: [
						{
								breakpoint: 992,
								settings: {
										slidesToShow: 3,
										slidesToScroll: 2,
										infinite: true,
										arrows: true
								}
						},
						{
								breakpoint: 768,
								settings: {
										slidesToShow: 2,
										slidesToScroll: 2,
										arrows: true
								}
						},
						{
								breakpoint: 480,
								settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
										arrows: true
								}
						}
				]
	});

	$('.prototyping-block__item').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		dots: true
	});
});