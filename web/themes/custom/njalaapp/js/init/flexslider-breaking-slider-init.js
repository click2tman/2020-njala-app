(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtflexsliderBreakingSlider = {
    attach: function (context, settings) {
      $(context).find('.view-tp-breaking-slider .flexslider').once('mtflexsliderBreakingSliderInit').each(function() {
        $(this).flexslider({
          animation: drupalSettings.njalaapp.flexsliderBreakingSliderInit.breakingEffect,        // Select your animation type, "fade" or "slide"
          slideshowSpeed: drupalSettings.njalaapp.flexsliderBreakingSliderInit.breakingEffectTime,   // Set the speed of the slideshow cycling, in milliseconds
          prevText: "",
          nextText: "",
          pauseOnAction: false,
          useCSS: false,
          controlNav: false,
          directionNav: false
        });
        $(this).fadeIn("slow");
        $(".view-tp-breaking-slider .view-content, .view-tp-breaking-slider .more-link").fadeIn("slow");
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
