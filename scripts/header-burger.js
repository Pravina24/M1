$(document).ready(function(){
	/*------------hemburger click-------*/
	$("#burger_menu").on('click',function(){
		if($('#side-kick-nav').css('display')=="none"){
        $('#side-kick-nav').show();
				var headerHeight=$('header').height();
			    var windowHeight=$(document).height();
			    $('#menu-item-height').css('height',(windowHeight-headerHeight)+'px');
				//$('#mask').show();
		}else{
			 $('#side-kick-nav').hide();
			 //$('#mask').hide();
		}
   

	});
	/*------------------hemburger end -----------*/
  $('.burger-img').click(function() {
	 if( $(".burger-toggle-img").attr("src") == "img/buger.png" ) {
		  $('.burger-toggle-img').attr("src", "img/close.png" );
		} else {
		$('.burger-toggle-img').attr("src","img/buger.png" );
		} 
  
  });
});