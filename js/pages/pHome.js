var pHome = {
	init: function(){
		$(window).on('resize', this.onResize);
		this.onResize();
		this.animationText();
		// this.pageReveal();
	},

	onResize: function(e){
		console.log("Browser size: " + window.innerWidth + "x" + window.innerHeight);
	},

	// pageReveal: function() {
	//   $('.btn').on('click', function() {

	//     var _this = $(this)
	//         // parentLayers = _this.parents().next('.ovl')
	//         layers = _this.parents().next('.ovl').find('div');

	//         // console.log(layers);

	//     // layers.addClass('active');

	//     if (!_this.hasClass('active')) {
	//       _this.addClass('active');
	//       TweenMax.staggerTo(layers, 1.5, {
	//         y: '-100%',
	//         autoAlpha: 1,
	//         ease: Quart.easeIn,
	//         // display: 'block'
	//       }, 0.2);
	//     } else {
	//       _this.removeClass('active');
	//       TweenMax.staggerTo(layers, 1.5, {
	//         y: '100%',
	//         autoAlpha: 0,
	//         ease: Quart.easeIn,
	//         // display: 'none'
	//       }, 0.2);
	//     }
	//   });
	// },

	animationText: function() {
		if (document.querySelector('h3')) {
			forceAnimation(splitText(document.querySelector('h3')));
			// console.log('$('h3').html()');
		}

		function splitText( container = false ) {
			if ( container != false ) {
				var string = $('h3').html();
				var textarr = string.split('');
				var stop = textarr.length;
				var buffer = '';
				console.log(string);
				for( var i = 0; i < stop; i++ ) {
					buffer += '<span class="anim-' + i + '">' + textarr[i] + '</span>';
				}
				container.innerHTML = buffer;
				return stop;
			}
		}

		function forceAnimation( stop = false ) {
			if ( stop != false ) {
				for( var i = 0; i < stop; i++ ) {
					var letter = $( '.anim-' + i );
					letter.on('mouseover', function() {
						$(this).addClass('animate');
					});
					letter.on('animationend', function() {
						$(this).removeClass('animate');
					});
				}
			}
		}
	},
}