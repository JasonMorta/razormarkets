// FAQ Object
const faq = [
  {
    question: 'What is Razor Markets?',
    title: 'What is Razor Markets?',
    answer: 'At Razor Markets, we believe in empowering traders with a platform that’s sharp, innovative, and focused on results. Our mission is to offer a fast, transparent, and supportive trading environment where you can thrive in the competitive world of CFDs. We provide access to a variety of financial markets, including forex, indices, and commodities, supported by state-of-the-art technology and exceptional customer service.'
  },
  {
    question: 'Do I need to pay to Razor Markets to open an account?',
    title: 'Do I need to pay to Razor Markets to open an account?',
    answer: 'No, opening an account with Razor Markets is completely free. There are no setup or maintenance fees associated with creating a trading account. However, you will need to fund your account to start trading.'
  },
  {
    question: 'What trading platforms does Razor Markets offer?',
    title: 'What trading platforms does Razor Markets offer?',
    answer: 'Razor Markets offers the MetaTrader 5 (MT5) trading platform to its clients. MT5 is a widely recognized platform known for its advanced charting tools, technical analysis features, and support for automated trading strategies. By providing MT5, Razor Markets enables traders to engage in CFD trading with a robust and user-friendly interface.'
  },
  {
    question: 'Is Razor Markets regulated?',
    title: 'Is Razor Markets regulated?',
    answer: `Razor Markets is a regulated CFD trading platform. Razor Markets (Pty) Ltd is a duly appointed Juristic Representative of Sithundhi Group (Pty) Ltd, which is regulated by the Financial Sector Conduct Authority (FSCA) under FSP No. 52030 in accordance with the Financial Advisory and Intermediary Services (FAIS) Act. This means that Razor Markets operates under the regulatory framework of the FSCA and FAIS, ensuring compliance with South African financial regulations. Additionally, the trading products offered on the Razor Markets platform are issued by RocketX (Pty) Ltd, a licensed Financial Services Provider (FSP) and authorized Over-the-Counter Derivatives Provider (ODP) holding FSCA license number 52142.`
  },
  {
    question: `What financial instruments can I trade with Razor Markets?`,
    title: `With Razor Markets, you can trade a wide range of financial instruments, including:`,
    answer: `
    <ul>
      <li>- Forex (major, minor, and exotic currency pairs)</li>
      <li>- Indices</li>
      <li>- Commodities (gold, oil, etc.)</li>
      <li>- CFDs on stocks</li>
    </ul>
    `
  }

  // Add more FAQ items as needed
];





//CODE

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
    const paragraph1 = document.createElement('div');
    paragraph1.innerHTML = item.answer;


    // Append title and paragraphs to answerContent
    answerContent.appendChild(titleElement);
    answerContent.appendChild(document.createElement('br'));
    answerContent.appendChild(paragraph1);
  

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

    const answerParagraph = document.createElement('div');
    answerParagraph.innerHTML = item.answer;

    answerDiv.appendChild(answerParagraph);

    faqAccordion.appendChild(questionElement);
    faqAccordion.appendChild(answerDiv);
  });

  faqAccordion.style.display = 'block';


}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  createFAQSection(faq);
  populateFaqAccordion()
});


