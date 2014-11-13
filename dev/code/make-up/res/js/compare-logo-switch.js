var imgSwitch = {
	init: function() {
		imgSwitch.techSwitch();
		imgSwitch.fixTableHead();
	},
	techSwitch: function () {
		var techniqueMargin = 0;
		var techniqueStep = 295;
		var tableMargin = 0;
		var tableStep = 295;
		$('.technique-arrow-right').click(function() {
			if (-techniqueMargin + 1180 < $('.technique-container').width()) {
				techniqueMargin -= techniqueStep;
				tableMargin -= tableStep;
			}
			$('.technique-container').animate({marginLeft: techniqueMargin}, 450);
			$('.main-table-2').animate({marginLeft: tableMargin}, 450);
		});
		$('.technique-arrow-left').click(function() {
			if (techniqueMargin !== 0) {
				techniqueMargin += techniqueStep;
				tableMargin += tableStep;
			}
			$('.technique-container').animate({marginLeft: techniqueMargin}, 450);
			$('.main-table-2').animate({marginLeft: tableMargin}, 450);
		});
	},
	fixTableHead: function() {
		var tableHead = $('body').find(".c-1"),
		didScroll = false;
		 
		$(window).scroll(function() {
		    didScroll = true;
		});
		 
		setInterval(function() {
		    if ( didScroll ) {
		        didScroll = false;
				var height = $(window).scrollTop();
				if (height > 391) {
					tableHead.css('position', 'fixed')
					tableHead.css('top', '0')
				} else {
					tableHead.css('position', 'absolute')
					tableHead.css('top', 'auto')
				}
		    }
		}, 50);
	}
};

$(document).ready(function() {
	imgSwitch.init();
})