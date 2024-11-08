function initializeAccordion() {
  $(".faq-inner-accordion").accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
  });
}

function toggleAccordion() {
  if ($(window).width() <= 1040) {
      // Hide the original FAQ list and show the accordion
      $(".faq-list").hide();
      $(".faq-inner-accordion").show();

      // Initialize accordion if not already initialized
      if (!$(".faq-inner-accordion").hasClass("ui-accordion")) {
          initializeAccordion();
      }
  } else {
      // Destroy accordion and show the original FAQ list
      $(".faq-list").show();
      $(".faq-inner-accordion").hide();

      if ($(".faq-inner-accordion").hasClass("ui-accordion")) {
          $(".faq-inner-accordion").accordion("destroy");
      }
  }
}

$(document).ready(function () {
  // Run on load
  toggleAccordion();

  // Run on resize
  $(window).resize(function () {
      toggleAccordion();
  });
});
