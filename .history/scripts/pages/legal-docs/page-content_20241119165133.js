const section1 = {
  heading: 'Get in touch',
  subheading: 'Lorem ipsum dolor sit amet consectetur. Pellentesque vitae est ornare dignissim. Egestas augue ut sed ultrices sed cursus.',
  button1: 'Learn More',
  button2: 'Sign Up',
  image: '../../../assets/svg/contact.svg',
}




//document.querySelector('.contact-content > h1').textContent = section1.heading;


// Download links
const cards = [
  { 
    title: "Read our AML Policy", 
    action: "Read", 
    link: `/assets/legalDocs/logalDocs-PSFs/Razor-AML-Policy-24.pdf`,
  },
  { 
    title: "Read our Complaints Policy",
    action: "Read",
    link: `/assets/legalDocs/logalDocs-PSFs/Razor-COI-Policy-24.pdf`,
  },
  { 
    title: "Read our Privacy Policy",
    action: "Read",
    link: `/assets/legalDocs/logalDocs-PSFs/Razor-Privacy-24.pdf`,
  },
  { 
    title: "Read our Risky Policy",
    action: "Read",
    link: `/assets/legalDocs/logalDocs-PSFs/Razor-Risky-Policy-24.pdf`,
  },
  { 
    title: "Read our FAIS Disclosure",
    action: "Read",
    link: `/assets/legalDocs/logalDocs-PSFs/Razor-Client-Agreement-24.pdf`,
  },
  { 
    title: "Read our Terms and Conditions",
    action: "Read",
    link: `/assets/legalDocs/logalDocs-PSFs/Razor-GTC-24.pdf`,
  },
  { 
    title: "Read our PAIA Manual",
    action: "Read",
    link: `/assets/legalDocs/logalDocs-PSFs/Razor-PAIA-Manual-24.pdf`,
  },
  // { 
  //   title: "Download our Complaints Policy",
  //   action: "Download",
  //   link: ``,
  // },
  // { 
  //   title: "Download our Bonus Terms",
  //   action: "Download",
  //   link: ``,
  // }
];




// ==================DO NOT MODIFY THE CODE BELOW!==================

const container = document.querySelector('.card-container');

cards.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.innerHTML = `
      <div class="card-icon">
        <img src="../assets/legalDocs/Download-PDF.svg" alt="Document Download Icon">
      </div>
      <div class="card-content">
          <p>${card.title}</p>
      </div>
  `;

  // Add a click event listener to open the link
  cardElement.addEventListener('click', () => {
    if (card.link) {
      window.open(card.link, '_blank'); // Open the PDF in a new tab
    } else {
      alert('The document link is not available.');
    }
  });

  container.appendChild(cardElement);
});

