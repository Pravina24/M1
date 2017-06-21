/*JS for Landing Screen M1 ID page start*/
$(document).ready(function(){
$(".plus-minus").click(function() {
      var spantag=$(this).find('span');
      var showDiv=$(spantag[0]).attr("data-target");
	  var parentDiv=$(spantag[0]).closest('.panel-heading-color');
    if ($(spantag[0]).text() == "view more"){
       $(spantag[0]).text("view less");
	   $(parentDiv[0]).addClass('active-heading');
       $(showDiv).show();
       
    }
    else{
       $(spantag[0]).text("view more");
	   $(parentDiv[0]).removeClass('active-heading');
       $(showDiv).hide();
    }

	});
});
/*JS for Landing Screen M1 ID page end*/