

$(function() { // wait for document ready
    // build scene
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      tiggerHook: "onLeave"
    }
  });

  var scene = new ScrollMagic.Scene({triggerElement: "#nav"})
    .setPin("#nav")
    .addTo(controller);






  });

