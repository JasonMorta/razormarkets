function initializeAccordion() {
  $(".faq-accordion").accordion({
      collapsible: true,
      active: 0, // Set the first section as open by default
      heightStyle: "content"
  });
}

function toggleAccordion() {
  if ($(window).width() <= 1040) {
      // Hide the original FAQ list and show the accordion
      $(".faq-list").hide();
      $(".faq-accordion").show();

      // Initialize accordion if not already initialized
      if (!$(".faq-accordion").hasClass("ui-accordion")) {
          initializeAccordion();
      }
  } else {
      // Destroy accordion and show the original FAQ list
      $(".faq-list").show();
      $(".faq-accordion").hide();

      if ($(".faq-accordion").hasClass("ui-accordion")) {
          $(".faq-accordion").accordion("destroy");
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


const faq = [
  {
    question: 'What is the name of your company?',
    answer: 'Our company is called Acme Inc.'
  },
  {
    question: 'How long have you been in business?',
    answer: 'We have been in business for 10 years.'
  },
  {
    question: 'Where are you located?',
    answer: 'We are located in San Francisco, California.'
  }
]