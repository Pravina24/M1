$(document).ready(function(){
	$('.left-main-menu li a').click(function(){
    	$('li a').removeClass("menu-active");
    	$(this).addClass("menu-active");
	});

	$('.sub-menu li a').click(function(){
    	$('.sub-menu li a').removeClass("submenu-active");
    	$(this).addClass("submenu-active");
	});

	$('.leftmenu-button').click(function(){
    	$('.left-main-menu').toggle();
    	$(this).find('img').toggle();
	});
});