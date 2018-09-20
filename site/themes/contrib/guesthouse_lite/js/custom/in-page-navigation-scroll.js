jQuery(document).ready(function($) {
  if ($(".link--smooth-scroll").length>0) {
    $(window).on("load", function (e) {
      if ($(".toolbar-bar").length>0) {
        var adminHeight = parseInt($('body').css('paddingTop'));
      } else {
        var adminHeight = 0;
      }
      var adminHeight = parseInt($('body').css('paddingTop'));
      $(".link--smooth-scroll").click(function(e) {
        var anchorDestination = this.hash;
        e.preventDefault();
        $('html, body').animate({
          //scrollTop: $($(this).attr("href")).offset().top
          scrollTop: $(anchorDestination).offset().top - drupalSettings.guesthouse_lite.inPageNavigation.inPageNavigationOffset - adminHeight
        }, 1000);
        if (history.pushState) {
          history.pushState(null, null, anchorDestination);
        } else {
          location.hash = anchorDestination;
        }
      });

    });
  }
});
