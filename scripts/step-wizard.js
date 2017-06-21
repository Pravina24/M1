$(document).ready(function () {
    $(".plus-minus").click(function() {
      var spantag=$(this).find('span');
      var showDiv=$(spantag[0]).attr("data-target");
      var parentDiv='';
      if($(spantag[0]).closest('.row-heading').length>0){
         parentDiv=$(spantag[0]).closest('.row-heading');
      }else if($(spantag[0]).closest('.panel-heading').length>0){
         parentDiv=$(spantag[0]).closest('.panel-heading');
      }
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
	$(".up-down").click(function() {
      var spantag=$(this).find('span');
      var showDiv=$(spantag[0]).attr("data-target");
		var imgPath=$(spantag[0]).children('img');
	   var parentDiv=$(spantag[0]).closest('.row-heading');
		
    if ($(imgPath[0]).attr('src') == "img/down.png"){
       $(imgPath[0]).attr('src','img/up.png');
		$(parentDiv[0]).addClass('active-heading');
       $(showDiv).show();
       
    }
    else{
       $(imgPath[0]).attr('src','img/down.png');
		$(parentDiv[0]).removeClass('active-heading');
       $(showDiv).hide();
    }

});
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        
        var $target = $(e.target);
        if($target.parent().attr('role')== 'presentation'){
               var steptext= $target.parent().find('.step-text');
               var text=$(steptext[0]).text();
               $("#stepTxt").text(text);
        }
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

   $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'custom-check checked-box'
                },
                off: {
                    icon: 'custom-check unchecked-box'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
           /* if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }*/
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<span class="state-icon ' + settings[$button.data('state')].icon + '"></span> ');
            }
        }
        init();
    });

});


function nextTab(elem) {
    var className=$(elem).attr('class');
    className = className.replace('active','');
    className = className + " " + 'prev-status';//disabled
    $(elem).attr('class',className);
    
    $(elem).find('.step-complete').css({'display':'block'});
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    debugger;
    $(elem).prev().find('a[data-toggle="tab"]').click();
}