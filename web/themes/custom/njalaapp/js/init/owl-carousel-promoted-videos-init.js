(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselPromotedVideos = {
    attach: function (context, settings) {
      $(context).find('.tp-carousel-promoted-videos').once('mtowlCarouselPromotedVideosInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:1,
            },
            480:{
              items:1,
            },
            768:{
              items:1,
            },
            992:{
              items:2,
            },
            1200:{
              items:4,
            },
            1680:{
              items:4,
            }
          },
          autoplay: drupalSettings.njalaapp.owlCarouselPromotedVideosInit.owlPromotedVideosAutoPlay,
          autoplayTimeout: drupalSettings.njalaapp.owlCarouselPromotedVideosInit.owlPromotedVideosEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
