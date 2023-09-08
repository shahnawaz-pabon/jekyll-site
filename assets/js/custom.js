(function ($) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  if (localStorage.theme == "dark") {
    $("body").addClass("dark");
    $(".light-mode").css("display", "");
    $(".dark-mode").css("display", "none");
  } else {
    $("body").removeClass("dark");
    $(".light-mode").css("display", "none");
    $(".dark-mode").css("display", "");
  }

  // $("#toggle-dark").click();

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $("body.hero-anime").removeClass("hero-anime");
  });

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //Switch light/dark

  $("#toggle-dark").on("click", function () {
    if (localStorage.theme == "dark") {
      $("body").removeClass("dark");
      // $("#toggle-dark").removeClass("switched");
      $(".light-mode").css("display", "none");
      $(".dark-mode").css("display", "");

      localStorage.theme = "light";
    } else {
      $("body").addClass("dark");

      $(".light-mode").css("display", "");
      $(".dark-mode").css("display", "none");

      localStorage.theme = "dark";
    }
  });

  /* Nav items active on click */
  $(".navbar-nav li").click(function (event) {
    var $this = $(this);

    console.log($(this));
    $(".navbar-nav li").removeClass("active");
    $this.removeClass("active");
    $($this).addClass("active");
  });
  //Click event handler for nav-items
  // $('.nav-item').on('click',function(){
  //
  //   //Remove any previous active classes
  //   $('.nav-item').removeClass('active');
  //
  //   //Add active class to the clicked item
  //   $(this).addClass('active');
  // });
  /* Nav items active on click */
})(jQuery);
