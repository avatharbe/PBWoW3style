jQuery(function($) {
	'use strict';

	/* Anchor jump offset for top-bar */
	function scroll_if_anchor(href) {
		href = typeof(href) == "string" ? href : $(this).attr("href");

		if(!href) return;
		var fromTop = $topBarHeight + 4;
		var $target = $(href);

		// Older browsers without pushState might flicker here, as they momentarily jump to the wrong position (IE < 10)
		if($target.length) {
			$('html, body').scrollTop($target.offset().top - fromTop);
			if(history && "pushState" in history) {
				history.pushState({}, document.title, window.location.href.split("#")[0] + href);
				//window.location.hash = href;
				return false;
			}
		}
	}

	var $topBar = $('#top-bar');
	var $topBarHeight = 0;

	if ($topBar.length) {
		$topBarHeight = $topBar.outerHeight();

		$("body").on("click", "a[href^='#']", scroll_if_anchor);

		scroll_if_anchor(window.location.hash);
	}

	/* Collapse boxes */
	$('.stat-block.online-list').attr('id', 'online-list');
	$('.stat-block.birthday-list').attr('id', 'birthday-list');
	$('.stat-block.statistics').attr('id', 'statistics');

	$('.collapse-box > h2, .stat-block > h3').addClass("open").find('a').contents().unwrap();

	$('.collapse-box, .stat-block').collapse({
		persist: true,
		open: function() {
			this.stop(true,true);
			this.addClass("open");
			this.slideDown(400);
		},
		close: function() {
			this.stop(true,true);
			this.slideUp(400);
			this.removeClass("open");
		}
	});

	var $videoBG = $('#video-background');
	var hasTopBar = $('#top-bar').length;

	function resizeVideoBG() {
		var height = $(window).height();
		$videoBG.css('height', (height - 42) + 'px');
	}

	if (hasTopBar && $videoBG.length) {
		$(window).resize(function() {
			resizeVideoBG()
		});
		resizeVideoBG();
	}

	/* Mini-profile context drop-down menus (viewtopic only) */
	if ($('body').hasClass('section-viewtopic')) {
		phpbb.dropdownVisibleContainers += ', .profile-context';

		$('.postprofile').each(function() {
			var $this = $(this),
				$trigger = $this.find('dt a'),
				$contents = $this.siblings('.profile-context').children('.dropdown'),
				options = {
					direction: 'auto',
					verticalDirection: 'auto'
				},
				data;

			if (!$trigger.length) {
				data = $this.attr('data-dropdown-trigger');
				$trigger = data ? $this.children(data) : $this.children('a:first');
			}

			if (!$contents.length) {
				data = $this.attr('data-dropdown-contents');
				$contents = data ? $this.children(data) : $this.children('div:first');
			}

			if (!$trigger.length || !$contents.length) return;

			if ($this.hasClass('dropdown-up')) options.verticalDirection = 'up';
			if ($this.hasClass('dropdown-down')) options.verticalDirection = 'down';
			if ($this.hasClass('dropdown-left')) options.direction = 'left';
			if ($this.hasClass('dropdown-right')) options.direction = 'right';

			phpbb.registerDropdown($trigger, $contents, options);
		});
	}
});
