
  const faqItems = document.querySelectorAll('.faq-item');
  const answerContents = document.querySelectorAll('.answer-content');


  faqItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          // Remove active class from all FAQ items and answer contents
          faqItems.forEach(i => i.classList.remove('active'));
          answerContents.forEach(content => content.classList.remove('active'));

          // Change the color of the circle to green
          

          // Add active class to the hovered FAQ item and its corresponding answer content
          item.classList.add('active');
          const answerId = item.getAttribute('data-answer');
          document.getElementById(answerId).classList.add('active');
      });
  });



    // Select the Back to Top button
    const backToTopButton = document.querySelector('#back-to-top');

    // Function to toggle the visibility of the button
    function toggleBackToTopButton() {
      // Check the vertical scroll position
      if (window.scrollY > 200) { // If scrolled more than 200px
        backToTopButton.classList.add('show'); // Show the button
      } else {
        backToTopButton.classList.remove('show'); // Hide the button
      }
    }

    // Listen for the scroll event
    window.addEventListener('scroll', toggleBackToTopButton);

    // Optional: Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
      });
    });