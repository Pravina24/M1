$(document).ready(function () {
    /**/
    // $('.carousel').carousel({
    //     interval: false
    // });
    $('.carousel[data-type="multi"] .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
		
      if ($(window).width() <= 992 ){
		  for (var i=0;i<1;i++) {
			  next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
		 next.children(':first-child').clone().appendTo($(this));
	  }
      }
    });

    /**/

});