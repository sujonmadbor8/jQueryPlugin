// js code here
$(function () {
  var typed = new Typed("#typed", {
    strings: ["Web Developer", "Web Designer", "Full-Stack Developer"],
    typeSpeed: 60,
    smartBackspace: true,
    loop: true,
  });
  // pie chart
  $(".chart").easyPieChart({
    barColor: "#e2d810 ",
    trackColor: "#322e2f",
    // scaleColor: "#dfe0e0",
    scaleLength: false,
    lineCap: "round",
    lineWidth: 10,
    size: 150,
    // rotate: 180,
    animate: 2000,
  });
  // owlCarousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
