$(document).ready(function(){
  $('.slider__room').slick({
	arrows:true,
	slidesToShow: 4,
	slidesToScroll:1,
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
			breakpoint: 900,
			settings: {
			 slidesToShow: 2,
			 dots:true,
			 arrows:false
			}
		 },
		 {
			breakpoint: 700,
			settings: {
			 slidesToShow: 1,
			 dots:true,
			 arrows:false
			}
		 }
		
	 ]
	
});
$('.rev-slider').slick({
	arrows:true,
	slidesToShow: 1,
	slidesToScroll:1,
	adaptveHeght:true,
	responsive: [
		{
			breakpoint: 900,
			settings: {
			 dots:true,
			 autoplay:true,
			 autoplaySpeed:3000,
			 fade:true,
			 arrows:false
			}
		 }
		
		
	 ]
	
});

$('.burger__menu').click(function() {
	$('.burger__menu').toggleClass('open-menu');
	$('.nav').toggleClass('open-menu');
});




});