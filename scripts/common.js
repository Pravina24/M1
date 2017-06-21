$(document).ready(function(){
	/*JS For Check Box Start*/
	$('.common-button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'common-custom-check common-checked-box'
                },
                off: {
                    icon: 'common-custom-check common-unchecked-box'
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
	/*JS For Check Box End*/
	
	/*JS for Timeline Start*/
	$('.timeline-heading').on('click', function() {
        $(this).next('.timeline-body').toggleClass('in');
    });
	/*JS for Timeline End*/
	/*JS for range slider Start*/
	  $( function() {
		  var tooltip = $('<div id="tooltip" />').css({
		position: 'absolute',
		top: -20,
		left: 3
		}).hide();
		$( "#slider" ).slider({
			range: "min",
			value: 0,
			min: 0,
			max: 100,
			step: 1,
			slide: function(event, ui) {
				tooltip.text(ui.value);

			}
		}).find(".ui-slider-handle").append(tooltip).hover(function() {
		tooltip.show()
	}, function() {
		tooltip.hide()
	});
	  } );
	/*JS for range slider end*/
});