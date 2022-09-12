(function( $ ) {

	'use strict';

	// About Me
	$('#aboutMeMoreBtn').on('click', function() {
		$(this).hide();
		$('#aboutMeMore').toggleClass('about-me-more-visible');
		return false;
	});

	/*
	* Timeline
	*/
	var timelineHeightAdjust = {
		$timeline: $('#timeline'),
		$timelineBar: $('#timeline .timeline-bar'),
		$firstTimelineItem: $('#timeline .timeline-box').first(),
		$lastTimelineItem: $('#timeline .timeline-box').last(),

		build: function() {
			var self = this;

			self.adjustHeight();
		},
		adjustHeight: function() {
			var self                = this,
				calcFirstItemHeight = self.$firstTimelineItem.outerHeight(true) / 2,
				calcLastItemHeight  = self.$lastTimelineItem.outerHeight(true) / 2;

			// Set Timeline Bar Top and Bottom
			self.$timelineBar.css({
				top: calcFirstItemHeight,
				bottom: calcLastItemHeight
			});
		}
	}

	if( $('#timeline2').get(0) ) {
		setTimeout(function(){
			// Adjust Timeline Height On Resize
			timelineHeightAdjust.build();
		}, 1000);

		timelineHeightAdjust.build();
	}

	var timelineHeightAdjust = {
		$timeline: $('#timeline2'),
		$timelineBar: $('#timeline2 .timeline-bar'),
		$firstTimelineItem: $('#timeline2 .timeline-box').first(),
		$lastTimelineItem: $('#timeline2 .timeline-box').last(),

		build: function() {
			var self = this;

			self.adjustHeight();
		},
		adjustHeight: function() {
			var self                = this,
				calcFirstItemHeight = self.$firstTimelineItem.outerHeight(true) / 2,
				calcLastItemHeight  = self.$lastTimelineItem.outerHeight(true) / 2;

			// Set Timeline Bar Top and Bottom
			self.$timelineBar.css({
				top: calcFirstItemHeight,
				bottom: calcLastItemHeight
			});
		}
	}

	/*
	* Header Image Anim
	*/
	var lastScrollTop = 0;

	$(window).on('scroll', function(){
	   var st = $(this).scrollTop();
	   
	   if (st > lastScrollTop){
	   		$('img[custom-anim]').css({
	   			transform: 'translate(0, -'+ st +'px)'
	   		});
	   } else {
	      $('img[custom-anim]').css({
	   			transform: 'translate(0, '+ -Math.abs(st) +'px)'
	   		});
	   }
	   lastScrollTop = st;
	});

}).apply( this, [ jQuery ]);