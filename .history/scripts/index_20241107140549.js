document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  const answerContents = document.querySelectorAll('.answer-content');

  faqItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          const answerId = item.getAttribute('data-answer');
          answerContents.forEach(content => {
              content.classList.remove('active');
              if (content.id === answerId) {
                  content.classList.add('active');
              }
          });
      });
  });
});
