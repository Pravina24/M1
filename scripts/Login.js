$(document).ready(function(){
  $('.info-btn-tooltip').tooltip({title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla sem, faucibus nec dolor id, viverra imperdiet nunc. Praesent sollicitudin facilisi",trigger:"click"}); 
	/*JS For Check Box Start*/
	$('.login-button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'login-custom-check login-checked-box'
                },
                off: {
                    icon: 'login-custom-check login-unchecked-box'
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
});