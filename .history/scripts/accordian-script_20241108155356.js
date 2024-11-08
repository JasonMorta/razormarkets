function initializeAccordion() {
  $(".faq-accordion").accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
  });
}

$(document).ready(function () {
  // Check screen width on load
  if ($(window).width() <= 1040) {
      initializeAccordion();
  }

  // Check screen width on resize
  $(window).resize(function () {
      if ($(window).width() <= 1040) {
          if (!$(".faq-accordion").hasClass("ui-accordion")) {
              initializeAccordion();
          }
      } else {
          // Destroy accordion if screen width is above 1040px
          if ($(".faq-accordion").hasClass("ui-accordion")) {
              $(".faq-accordion").accordion("destroy");
          }
      }
  });
});
