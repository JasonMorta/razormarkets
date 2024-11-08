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


// faqData.js
const faq = [
  {
    question: 'What is Razor Markets?',
    title: 'Hello 1',
    answer: 'Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
  },
  {
    question: 'Do I need to pay to Razor Markets to open an account?',
    title: 'Hello 2',
    answer: 'Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
  },
  {
    question: 'What payment gateways does Razor Markets support?',
    title: 'Hello 3',
    answer: 'Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
  },
  {
    question: 'Does Razor Markets provide international payments support?',
    title: 'Hello 4',
    answer: 'Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
  },
  {
    question: 'Is there any setup fee or annual maintenance fee that I need to pay regularly?',
    title: 'Hello 5',
    answer: 'Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
  },
  // Add more FAQ items as needed
];



// FAQ Desktop Version
function createFAQSection(faqData) {
  // Select the existing faq-inner container
  const faqInner = document.querySelector('.faq-inner');
  
  if (!faqInner) {
    console.error('No element with class "faq-inner" found in the DOM.');
    return;
  }

  // Create the main faq-container
  const faqContainer = document.createElement('div');
  faqContainer.className = 'faq-container';

  // Create the FAQ list container
  const faqList = document.createElement('div');
  faqList.className = 'faq-list';

  // Create the FAQ answers container
  const faqAnswer = document.createElement('div');
  faqAnswer.className = 'faq-answer';

  // Iterate over the faqData to create FAQ items and answers
  faqData.forEach((item, index) => {
    const answerId = `answer${index + 1}`;

    // --- Create FAQ Item ---
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    if (index === 0) {
      faqItem.classList.add('active');
    }
    faqItem.setAttribute('data-answer', answerId);

    // Create the list-text div
    const listText = document.createElement('div');
    listText.className = 'list-text';

    // Create the circle span with SVG
    const circleSpan = document.createElement('span');
    circleSpan.className = 'circle';
    circleSpan.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle-dot" cx="12" cy="12" r="12" fill="#0E92CA" />
      </svg>
    `;

    // Create the faq-text span
    const faqText = document.createElement('span');
    faqText.className = 'faq-text';
    faqText.textContent = item.question;

    // Append circle and text to list-text
    listText.appendChild(circleSpan);
    listText.appendChild(faqText);

    // Create the arrow container
    const arrowContainer = document.createElement('div');
    arrowContainer.className = 'arrow-container';

    // Create the arrow span
    const arrowSpan = document.createElement('span');
    arrowSpan.className = 'arrow';
    arrowSpan.innerHTML = '&#8250;'; // Right-pointing arrow

    // Append arrow to arrow container
    arrowContainer.appendChild(arrowSpan);

    // Append list-text and arrow-container to faq-item
    faqItem.appendChild(listText);
    faqItem.appendChild(arrowContainer);

    // Append faq-item to faq-list
    faqList.appendChild(faqItem);

    // --- Create Answer Content ---
    const answerContent = document.createElement('div');
    answerContent.className = 'answer-content';
    answerContent.id = answerId;
    if (index === 0) {
      answerContent.classList.add('active');
    }

    // Create the title element (h2)
    const titleElement = document.createElement('h2');
    titleElement.textContent = item.title;

    // Create paragraph elements for the answer
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = item.answer;

    // For demonstration, adding the same paragraph twice as in your initial HTML
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = item.answer;

    // Append title and paragraphs to answerContent
    answerContent.appendChild(titleElement);
    answerContent.appendChild(document.createElement('br'));
    answerContent.appendChild(paragraph1);
    answerContent.appendChild(document.createElement('br'));
    answerContent.appendChild(paragraph2);

    // Append answerContent to faq-answer
    faqAnswer.appendChild(answerContent);
  });

  // Append faq-list and faq-answer to faq-container
  faqContainer.appendChild(faqList);
  faqContainer.appendChild(faqAnswer);

  // Append the entire FAQ section to the faq-inner container
  faqInner.appendChild(faqContainer);

  // --- Add Interactivity ---
  const faqItems = faqList.querySelectorAll('.faq-item');
  const answerContents = faqAnswer.querySelectorAll('.answer-content');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      faqItems.forEach(i => i.classList.remove('active'));
      answerContents.forEach(a => a.classList.remove('active'));

      // Add active class to the clicked item
      item.classList.add('active');

      // Get the corresponding answer ID
      const answerId = item.getAttribute('data-answer');
      const answerToShow = document.getElementById(answerId);
      if (answerToShow) {
        answerToShow.classList.add('active');
      }
    });
  });
}

// FAQ Mobile Version
function populateFaqAccordion() {
  const faqAccordion = document.querySelector('.faq-accordion');

  if (!faqAccordion) {
    console.error('Element with class "faq-accordion" not found.');
    return;
  }

  faqAccordion.innerHTML = '';

  faq.forEach(item => {
    const questionElement = document.createElement('h3');
    questionElement.textContent = item.question;

    const answerDiv = document.createElement('div');

    const answerParagraph = document.createElement('p');
    answerParagraph.textContent = item.answer;

    answerDiv.appendChild(answerParagraph);

    faqAccordion.appendChild(questionElement);
    faqAccordion.appendChild(answerDiv);
  });

  faqAccordion.style.display = 'block';

  // Add click event listeners for accordion functionality
  const headers = faqAccordion.querySelectorAll('h3');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      // Toggle active class
      header.classList.toggle('active');

      // Toggle the display of the next sibling div
      const answer = header.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  createFAQSection(faq);
});


