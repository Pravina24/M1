$(document).ready(function(){
  $('.header-main-link li a').click(function(){
  		$('li a').removeClass("header-menu-active");
  		$(this).addClass("header-menu-active");
  });
	$('.footer li a').click(function(){
		$('li a').removeClass("footer-active");
		$(this).addClass("footer-active");
  	});
	$('.footer-mob li a').click(function(){
		$('li a').removeClass("footer-active");
		$(this).addClass("footer-active");
  	});
	/*Footer Arrow toggle Start*/
	$('.arrow-up-down').click(function() {
    	$(this).find('span').toggleClass("glyphicon-menu-up glyphicon-menu-down");
	});
	/*Footer Arrow toggle End*/
});