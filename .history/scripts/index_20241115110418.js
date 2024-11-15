
function backToTopButton() {

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




}


function disclaimer(){

}


// Call functions
backToTopButton()
disclaimer()