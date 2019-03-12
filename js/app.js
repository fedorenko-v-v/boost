$(document).ready(function() {

	$("#example_id").ionRangeSlider({
		type: "double",
	     min: 0,
	     max: 100,
	     from: 20,
	     from_min: 0,
	     from_max: 70,
	     from_shadow: true,
	     to: 70,
	     to_min: 0,
	     to_max: 70,
	     to_shadow: true,
	     grid: true,
	     grid_num: 10
});

	$("#example_id_One").ionRangeSlider({
	     min: 0,
	     max: 100,
	     from: 0,
	     to: 100,
	     grid: true,
	     grid_num: 10
});

	$('.sliderServices').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 1
			}
		},
	]
	});

	$('.sliderStreamers').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		centerPadding: '20px',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1
      }
    },
  ]
	});

	$('.sliderStreamers').on('afterChange', function(event, slick, direction){
		  username = $('.sliderStreamers .slide.slick-center .userNameS').html();
	    usertext = $('.sliderStreamers .slide.slick-center .userTextComment').html();
			$('.feedBack .userName .name .nm').html(username);
			$('.feedBack .text').html(usertext);
	});

	$('.gamesList li:first-child a').on('click', function(event){
			event.preventDefault();
		  $('.gamesList').toggleClass('open');
	});

	$('.questionI').on('click', function(event){
			event.preventDefault();
	});

	$('.rangeList li').on('click', function(){
		  $(this).toggleClass('active');
	});

	$('.mobMenu').on('click', function(event){
			$('body').toggleClass('mm');
			 $('.headerMenu').removeClass('open');
		  $('.mainMenuSectionM').toggleClass('open');
	});

	$('.MenuLM').on('click', function(event){
			$('body').toggleClass('mm');
			$('.mainMenuSectionM').removeClass('open');
		  $('.headerMenu').toggleClass('open');
	});

	$('.buttonBlock .btn').on('click', function(event){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
	});

	// $('.bgLMM').on('click', function(){
	// 	$('.mainMenu .listMenu li:last-child').click();
	// });

	// $('.bgLMM').hover(
	// 	function(){
	// 	  $('.mainMenu .listMenu li:last-child').addClass('hover');
	// 	},
	// 	function(){
	// 	  $('.mainMenu .listMenu li:last-child').removeClass('hover');
	// });
});
