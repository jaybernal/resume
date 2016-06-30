

$(function() {
  var topoffset = 43;
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - topoffset
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function(){
    var windowpos = $(window).scrollTop + topoffset;
    $("nav li a").removeClass("active");

    if (windowpos > $("about-me").offset().top) {
      $("nav la a").removeClass("active");
      $('a[href$="about-me"]').addClass("active");
    }
  });


  var scene = new ScrollMagic.Scene({triggerElement: "#nav"})
    .setPin("#nav")
    .addTo(controller);

  });

