(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselRelatedNodes = {
    attach: function (context, settings) {
      $(context).find('.tp-carousel-related-nodes').once('mtowlCarouselRelatedNodesInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:2,
            },
            480:{
              items:2,
            },
            768:{
              items:2,
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
          autoplay: drupalSettings.njalaapp.owlCarouselRelatedNodesInit.owlRelatedNodesAutoPlay,
          autoplayTimeout: drupalSettings.njalaapp.owlCarouselRelatedNodesInit.owlRelatedNodesEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: [Drupal.t('prev', {}, {context: "Owl Carousel prev text"}),Drupal.t('next', {}, {context: "Owl Carousel next text"})]
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
