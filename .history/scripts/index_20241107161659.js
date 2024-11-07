document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  const answerContents = document.querySelectorAll('.answer-content');
  const circleColors = document.querySelectorAll('.circle span');


  circleColors.forEach(circle => {
    console.log('circle', circle)
    
    // circle.addEventListener('mouseover', () => {
    //   console.log('circle');
    //   circle.style.fill = 'green';
    // });
  });



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
});
