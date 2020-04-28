(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselPromotedPosts = {
    attach: function (context, settings) {
      $(context).find('.tp-carousel-promoted-posts').once('mtowlCarouselPromotedPostsInit').each(function() {
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
              items:3,
            },
            1680:{
              items:3,
            }
          },
          autoplay: drupalSettings.njalaapp.owlCarouselPromotedPostsInit.owlPromotedPostsAutoPlay,
          autoplayTimeout: drupalSettings.njalaapp.owlCarouselPromotedPostsInit.owlPromotedPostsEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
