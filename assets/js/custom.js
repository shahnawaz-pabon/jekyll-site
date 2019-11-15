(function($) {

  $(function() {
    var header = $(".start-style");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });

  //Animation

  $(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave','.nav-item',function(e){
      if ($(window).width() > 750) {
        var _d=$(e.target).closest('.nav-item');_d.addClass('show');
        setTimeout(function(){
        _d[_d.is(':hover')?'addClass':'removeClass']('show');
        },1);
      }
  });

  //Switch light/dark

  $("#toggle-dark").on('click', function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      // $("#toggle-dark").removeClass("switched");
      $('.light-mode').css('display','none');
      $('.dark-mode').css('display','');
    }
    else {
      $("body").addClass("dark");

      $('.light-mode').css('display','');
      $('.dark-mode').css('display','none');
      
    }
  });

  })(jQuery);
