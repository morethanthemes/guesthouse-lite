(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.mtowlCarouselServiceCategories = {
    attach: function (context, settings) {
        once('mtowlCarouselServiceCategoriesInit', ".mt-carousel-service-categoriess", context).forEach(function(item) {
          $(item).owlCarousel({
          items: 1,
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
              items:5,
            },
            1680:{
              items:5,
            }
          },
          autoplay: drupalSettings.guesthouse_lite.owlCarouselServiceCategoriesInit.owlServiceCategoriesAutoPlay,
          autoplayTimeout: drupalSettings.guesthouse_lite.owlCarouselServiceCategoriesInit.owlServiceCategoriesEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings, once);
