var common = {
	init: function() {

		this.mouseEffect();
		this.menuMB();
	},

	menuMB: function() {
		$('.btn-menu').on('click', function() {
			$(this).toggleClass('open-menu');
		});
	},

	mouseEffect: function() {
		$(window).mousemove(function(e) {
			$('.parallax').each(function(index, el) {
				var perMove = $(this).attr('datamove');
				var _this = $(this);
				parallaxIt(e, _this, perMove);
			});
		});

		function parallaxIt(e, target, movement) {
			var $this = $('body');
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			TweenMax.to(target, 1, {
				x: (relX - $this.width() / 2) / $this.width() * movement,
				y: (relY - $this.height() / 2) / $this.height() * movement
			});
		};
	},

}

common.init();

