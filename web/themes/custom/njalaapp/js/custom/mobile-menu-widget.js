jQuery(document).ready(function ($) {
  

  $.fn.mt_init = function () {
    let target = $('.tp-mobile-menu-widget mt-input');
    $.fn.mt_setDirtyness(target);
    $.fn.mt_toggle();
  };

  $.fn.mt_setDirtyness = function (target) {
    if (target.value && target.value.length > 0) {
      $('.tp-mobile-menu-widget').addClass('mt-input-dirty');
    } else {
      $('.tp-mobile-menu-widget').removeClass('mt-input-dirty');
    }
  }

  $.fn.mt_toggle = function () {
    if ($(window).scrollTop() != 0) {
      $('.tp-mobile-menu-widget').addClass('show');
    } else {
      $('.tp-mobile-menu-widget').removeClass('show');
    }
  }

  $.fn.mt_init();

  $('.tp-mobile-menu-widget .mt-menu-button').on('click',
    function () {
      $('.tp-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').addClass('mt-noscroll');
      $('.tp-mobile-menu-overlay .sf-accordion').addClass('sf-expanded').removeClass('sf-hidden');
    });

  $('.tp-mobile-menu-overlay').on('dblclick',
    function () {
      $('.tp-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('mt-noscroll');
    });

  $('.tp-mobile-menu-widget .mt-input').keyup(function (event) {
    
    $.fn.mt_setDirtyness(event.target);
  });

  $('.tp-mobile-menu-widget .mt-clear-icon').on('click',
    function () {
      $('.tp-mobile-menu-widget .mt-input').val('').keyup();
    });

  $('.tp-mobile-menu-overlay .mt-dismiss-button.mt-button').on('click',
    function () {
      $('.tp-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('mt-noscroll');
    });

  $(window).scroll(function () {
    $.fn.mt_toggle();
  });
}); 