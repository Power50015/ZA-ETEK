(function ($) {
  // Navgiton Links
  $("a.nav-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  //prg circle
  $(".first.circle").circleProgress({
    value: 0.75,
    animation: true,
    fill: {
      gradient: ["#00A99D", "#4ac1b8"],
    },
  });
  $(".second.circle")
    .circleProgress({
      value: 0.92,
      fill: {
        gradient: [
          ["#4ac1b8", 0.5],
          ["#00A99D", 0.5],
        ],
        gradientAngle: Math.PI / 4,
      },
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this).find("strong").text(stepValue.toFixed(2).substr(1));
    });
  $(".third.circle")
    .circleProgress({
      value: 0.75,
      fill: {
        gradient: [
          ["#00A99D", 0.5],
          ["#4ac1b8", 0.5],
        ],
        gradientAngle: Math.PI / 4,
      },
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this).find("strong").text(stepValue.toFixed(2).substr(1));
    });
  $(".forth.circle").circleProgress({
    value: 1,
    animation: false,
    fill: {
      gradient: ["#00A99D", "#4ac1b8"],
    },
  });
  var c4 = $(".fivth.circle");
  c4.circleProgress({
    startAngle: (-Math.PI / 4) * 3,
    value: 0.83,
    lineCap: "round",
    fill: {
      color: "#00A99D",
    },
  });
  setTimeout(function () {
    c4.circleProgress("value", 0.9);
  }, 1000);
  setTimeout(function () {
    c4.circleProgress("value", 1.0);
  }, 1100);
  setTimeout(function () {
    c4.circleProgress("value", 0.83);
  }, 2100);
  $(".sixth.circle")
    .circleProgress({
      value: 0.5,
      fill: {
        gradient: [
          ["#00A99D", 0.5],
          ["#4ac1b8", 0.5],
        ],
        gradientAngle: Math.PI / 4,
      },
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this).find("strong").text(stepValue.toFixed(2).substr(1));
    });
  //End prg circle
  //Team Carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 2,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  //Testimonials Carousel
  $(".testimonials-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
  });
  // Go to the next item
  $(".customNextBtn").click(function () {
    $(".testimonials-carousel").trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    $(".testimonials-carousel").trigger("prev.owl.carousel");
  });
  //CopyRights
  var y = new Date().getFullYear();
  $(".current-year").text(y);
})(jQuery);
