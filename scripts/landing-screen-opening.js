$(document).ready(function(){
  $('.plus-minus').click(function() {
	 if( $(".img-plus-minus").attr("src") == "img/minus.png" ) {
		  $('.img-plus-minus').attr("src", "img/plus.png" );
		} else {
		$('.img-plus-minus').attr("src","img/minus.png" );
		} });
});