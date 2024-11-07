document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  const answerContents = document.querySelectorAll('.answer-content');
  const circleColor = document.querySelector('.circle svg circle');

  faqItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          // Remove active class from all FAQ items and answer contents
          faqItems.forEach(i => i.classList.remove('active'));
          answerContents.forEach(content => content.classList.remove('active'));

          // Change the color of the circle to green
          circleColor.style.fill = '#00c853';

          // Add active class to the hovered FAQ item and its corresponding answer content
          item.classList.add('active');
          const answerId = item.getAttribute('data-answer');
          document.getElementById(answerId).classList.add('active');
      });
  });
});
