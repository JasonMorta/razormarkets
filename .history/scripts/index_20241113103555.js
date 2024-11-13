
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
  const backToTopButton = document.querySelector('.back-to-top');

  // Function to toggle the visibility of the button
  function toggleBackToTopButton() {
    // Check the vertical scroll position
    if (window.scrollY > 200) { // If scrolled more than 200px
      
        
      backToTopButton.classList.add('show-btt'); // Show the button
    } else {
      backToTopButton.classList.remove('show-btt'); // Hide the button
    }
  }

   // Listen for the scroll event
   window.addEventListener('scroll', toggleBackToTopButton);



    // Select all elements with the class 'navbar-burger'
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
      // Add a click event on each of them
      navbarBurgers.forEach( burger => {
        burger.addEventListener('click', () => {
          // Get the target from the 'data-target' attribute
          const target = burger.dataset.target;
          const targetElement = document.getElementById(target);
          
          // Toggle the 'is-active' class on both the navbar-burger and the navbar-menu
          burger.classList.toggle('is-active');
          targetElement.classList.toggle('is-active');
        });
      });
    }



