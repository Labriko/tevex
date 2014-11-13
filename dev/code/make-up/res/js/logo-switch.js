var imgSwitch = {
	init: function() {
		imgSwitch.logoSwitch();
		imgSwitch.techSwitch();
		imgSwitch.headerSwitch();
	},
	logoSwitch: function () {
		var logoMargin = 0;
		// console.log($('.logo-container').width())
		// console.log(-logoMargin + 1180)
		var logoStep = ($('.logo-container').width()-1180)/5
		$('.logo-arrow-right').click(function() {
			if (-logoMargin + 1180 < $('.logo-container').width()) {
				logoMargin -= logoStep;
			}
			$('.logo-container').animate({marginLeft: logoMargin}, 450);
			// console.log($('.logo-container').width())
			// console.log(-logoMargin + 1180)
		});
		$('.logo-arrow-left').click(function() {
			if (logoMargin !== 0) {
				logoMargin += logoStep;
			}
			$('.logo-container').animate({marginLeft: logoMargin}, 450);
		});

	},
	techSwitch: function () {
		var techniqueMargin = 0;
		var techniqueStep = 295;
		$('.technique-arrow-right').click(function() {
			if (-techniqueMargin + 1180 < $('.technique-container').width()) {
				techniqueMargin -= techniqueStep;
			}
			$('.technique-container').animate({marginLeft: techniqueMargin}, 450);
			// console.log($('.technique-container').width())
			// console.log(-techniqueMargin + 1175)
		});
		$('.technique-arrow-left').click(function() {
			if (techniqueMargin !== 0) {
				techniqueMargin += techniqueStep;
			}
			$('.technique-container').animate({marginLeft: techniqueMargin}, 450);
		});
	},
	headerSwitch: function () {
		var widthOfHeaderContainer = $('.image-container').width();
		var numberOfSteps = 8;
		var headerStep = widthOfHeaderContainer / numberOfSteps;
		var actHeaderStep = headerStep;
		// alert(headerStep)
		var i = 0;
		var timer1 = function () {
			var timerInt1 = setInterval(function() {
				$('.image-container').animate({marginLeft: -actHeaderStep}, 450);
				i++;
				if (i == numberOfSteps - (1250/headerStep)) {
					clearInterval(timerInt1);
					actHeaderStep -= headerStep;
					i = 0;
					timer2();
				} else {
					actHeaderStep += headerStep;
				}
			}, 5000)
		}
		var timer2 = function () {
			var timerInt2 = setInterval(function() {
				$('.image-container').animate({marginLeft: -actHeaderStep}, 450);
				i++;
				if (i == numberOfSteps - (1250/headerStep)) {
					clearInterval(timerInt2);
					actHeaderStep = headerStep;
					i = 0;
					timer1();
				} else {
					actHeaderStep -= headerStep;
				}
			}, 5000)
		}
		timer1();
	}
};

$(document).ready(function() {
	imgSwitch.init();

})

// setTimeout(function() { alert('dasadsdsa') }, 10000)
// setInterval(function() { alert('dasadsdsa') }, 10000)