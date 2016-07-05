

$(function() {
  var topoffset = 36;
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

  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#about-page').offset().top - 5) {
      $('nav li a').removeClass('active');
      $('a[href$="#about-page"]').addClass('active');
    }
    if (windowpos > $('#experiences-page').offset().top - 5) {
      $('nav li a').removeClass('active');
      $('a[href$="#experiences-page"]').addClass('active');
    }
    if (windowpos > $('#education-page').offset().top - 5) {
      $('nav li a').removeClass('active');
      $('a[href$="#education-page"]').addClass('active');
    }
    if (windowpos > $('#abilities-page').offset().top - 5) {
      $('nav li a').removeClass('active');
      $('a[href$="#abilities-page"]').addClass('active');
    }
  });


  $('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#1abc9c',
    trackColor: "#ecf0f1",
    size: 150,
    animate: 600
  });

  var scene = new ScrollMagic.Scene({triggerElement: "#nav"})
    .setPin("#nav")
    .addTo(controller);

  });
  




