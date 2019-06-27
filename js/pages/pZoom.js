var pZoom = {
  init: function(){
    $(window).on('resize', this.onResize);
    $(window).on('load', this.slider);
    this.onResize();
    this.slider();
    this.zoomInAnimate();
    this.tabFilter();
  },

  onResize: function(e){
    console.log("Browser size: " + window.innerWidth + "x" + window.innerHeight);
  },

  slider: function() {
    var _this = $('.slider');

    _this.slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'cubic-bezier(0.695, 0.045, 0.000, 1.205)',
      speed: 500,
      swipe: false
    });

    _this.find('.slick-disabled').hide();

    $('.slick-next').on('click', function() {

      _this.find('.slick-arrow').show();
      _this.find('.slick-disabled').hide();

      TweenMax.to($('.slider-item .holder'), 0.3, {
        autoAlpha: 0,
        transform: 'rotate(-30deg) translate3d(-100px,0,0)'
      });

      TweenMax.to($('.slick-active .holder'), 0.3, {
        autoAlpha: 1,
        transform: 'rotate(0deg) translate3d(0,0,0)'
      });

    });

    $('.slick-prev').on('click', function() {

      _this.find('.slick-arrow').show();
      _this.find('.slick-disabled').hide();

      TweenMax.to($('.slider-item .holder'), 0.3, {
        autoAlpha: 0,
        transform: 'rotate(30deg) translate3d(100px,0,0)'
      });

      TweenMax.to($('.slick-active .holder'), 0.3, {
        autoAlpha: 1,
        transform: 'rotate(0deg) translate3d(0,0,0)'
      });

    });

  },

  zoomInAnimate: function() {

    var _this = $('.js-zoomIn');

    closeContent();

    _this.on('click', function() {
      TweenMax.to($('.preview img'), 0.5, {
        x: '100%',
        autoAlpha: 0,
        ease: Power2.easeOut,
        onStart: hidePreview,
        onComplete: showContent
      });

      function hidePreview() {

        $('.preview, .slick-list, .wrapper').css({
          overflow: 'visible'
        });

        TweenMax.to($('.slick-active .holder'), 0.8, {
          transform: 'scale(15)',
          zIndex: 9,
        });

        TweenMax.to($('.slick-active .holder img'), 0.2, {
          autoAlpha: 0
        });

        TweenMax.to($('.slick-arrow'), 0.3, {
          autoAlpha: 0,
          transition: 'none'
        });

      };

      function showContent() {

        TweenMax.to($('.content-wrap'), 0.5, {
          height: '100%',
          autoAlpha: 1,
          zIndex: 1,
          onComplete: complete
        });

        function complete() {
          TweenMax.to($('.content-bg'), 0.5, {
            autoAlpha: 0,
          });

          TweenMax.to($('.copy'), 0.3, {
            y: 0,
            autoAlpha: 1,
          });

          TweenMax.to($('.thumbnail'), 0.3, {
            x: 0,
            autoAlpha: 1,
          });

          TweenMax.to($('.btn-close'), 0.3, {
            autoAlpha: 1,
          });
        };
      };

    });

    function closeContent() {

      $('.btn-close').on('click', function() {

        TweenMax.to($(this), 0.3, {
          autoAlpha: 0,
        });

        TweenMax.to($('.copy'), 0.3, {
          y: 50,
          autoAlpha: 0,
        });

        TweenMax.to($('.thumbnail'), 0.3, {
          x: -50,
          autoAlpha: 0,
        });

        TweenMax.to($('.content-bg'), 0.1, {
          autoAlpha: 1,
        });

        TweenMax.to($('.content-wrap'), 0.5, {
          autoAlpha: 0,
          zIndex: -1,
          onComplete: showPreview
        });

        function showPreview() {

          TweenMax.to($('.slick-active .holder'), 0.8, {
            transform: 'scale(1)',
            zIndex: 9,
            onComplete: hideContain
          });

          function hideContain() {

            $('.preview, .slick-list, .wrapper').css({
              overflow: 'hidden'
            });

            TweenMax.to($('.slick-arrow'), 0.3, {
              autoAlpha: 1,
              transition: 'all 0.3s ease'
            });
          };

          TweenMax.to($('.slick-active .holder img'), 0.2, {
            autoAlpha: 1
          });

          TweenMax.to($('.preview img'), 0.5, {
            x: '0%',
            autoAlpha: 1,
            ease: Power2.easeIn,
          });

          TweenMax.to($('.content-bg'), 0.5, {
            autoAlpha: 1,
          });

        };

      });
    };
  },

  tabFilter: function() {

    var _this = $('.js-zoomIn');
    
    _this.on('click', function() {
      var dataFilter = $('.slick-active').attr('data-filter');
      $('.content-wrap').find('.content-item').hide();
      $('.content-wrap').find('.' + dataFilter).show();
    });

    $('.slick-arrow').on('click', function() {
      var dataFilter = $('.slick-active').attr('data-filter');
      $('.content-wrap').find('.content-item').hide();
      $('.content-wrap').find('.' + dataFilter).show();
    });

  },

}