const section1 = {
  heading: 'Get in touch',
  subheading: 'Lorem ipsum dolor sit amet consectetur. Pellentesque vitae est ornare dignissim. Egestas augue ut sed ultrices sed cursus.',
  button1: 'Learn More',
  button2: 'Sign Up',
  image: '../../../assets/svg/contact.svg',
}


// ==================DO NOT MODIFY THE CODE BELOW!==================

//document.querySelector('.contact-content > h1').textContent = section1.heading;


// Download links
const cards = [
  { 
    title: "Read our AML Policy", 
    action: "Read", 
    link: ``,
  },
  { 
    title: "Read our Complaints Policy",
    action: "Read",
    link: ``,
  },
  { 
    title: "Read our Privacy Policy",
    action: "Read",
    link: ``,
  },
  { 
    title: "Read our Risky Policy",
    action: "Read",
    link: ``,
  },
  { 
    title: "Read our FAIS Disclosure",
    action: "Read",
    link: ``,
  },
  { 
    title: "Read our Terms and Conditions",
    action: "Read",
    link: ``,
  },
  { 
    title: "Read our PAIA Manual",
    action: "Read",
    link: ``,
  },
  { 
    title: "Download our Complaints Policy",
    action: "Download",
    link: ``,
  },
  { 
    title: "Download our Bonus Terms",
    action: "Download",
    link: ``,
  }
];

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
  container.appendChild(cardElement);
});
