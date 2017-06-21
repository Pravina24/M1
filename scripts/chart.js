$(function() {
		$('.chart').easyPieChart({
			easing: 'easeOutBounce',
			barColor: '#6b6b6b',
			color: '#e56e1f',
			trackWidth: 2,
			size: 90,
    		lineWidth: 1,
    	 	//trackColor: '#e56e1f', //false,
    		scaleColor: false,
    		scaleLength: false,  //// REmove line
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
				if (percent > 100) {
					//console.log($(this.el))
				}
			}
			
		});
		var chart = window.chart = $('.chart').data('easyPieChart');
	});