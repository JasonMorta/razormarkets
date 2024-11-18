
const section1 = {
  heading: 'Trade Smarter Withdraw Faster',
  subheading: 'Precision, speed, and trust—everything you need to dominate the markets. Razor Markets delivers a trading experience that’s sharp, reliable, and built for success.',
}

// Cards
const section3 = [
  {
    title: 'Fast Withdrawals',
    description: 'Quick and seamless withdrawals to keep you trading without interruptions, ensuring easy access to your funds.',
  },
  {
    title: 'Advanced Tools',
    description: 'User-friendly platforms equipped with cutting-edge analytics to support informed and efficient trading decisions.',
  },
  {
    title: 'Tailored Accounts',
    description: 'A variety of flexible account options crafted to suit and complement your unique trading style and needs.',
  },
  // Add more card objects as needed
]

const section4 = {
  heading: 'Precision Trading, Razor Sharp Results',
  subheading: 'At Razor Markets, we redefine trading by combining lightning-fast withdrawals, innovative tools, and unparalleled transparency. Whether you’re new to trading or a seasoned pro, we’ve got everything you need to succeed.',
}

// Cards
const section6 = {
  heading: 'Why choose Razor Markets',
  cards: [
    {
      icon: "../../../assets/svg/screen-share.svg",
      title: 'Cutting-Edge Tools',
      description: 'Trade smarter with innovative tools tailored for precision and efficiency, empowering your every move.',
      buttonText: 'Sign Up'
    },
    {
      icon: "../../../assets/svg/market-stat.svg",
      title: 'Competitive Spreads & Fees',
      description: 'Enjoy low-cost trading with competitive spreads and fees designed to maximize your gains.',
      buttonText: 'Sign Up'
    },
    {
      icon: "../../../assets/svg/plus.svg",
      title: 'Trusted & Secure',
      description: 'Rely on a platform built for trust, ensuring your funds and data remain secure at all times.',
      buttonText: 'Sign Up'
    },
    // Add more card objects as needed
  ]
}











// ============== DO NOT EDIT BELOW THIS LINE =============================

// Add the content to the page - section 1
const section1H1 = document.querySelector('.section-1 > h1').textContent = section1.heading;
const section1p = document.querySelector('.section-1 > p').textContent = section1.subheading;

// Cards
const section3CTAs = document.querySelector('.features').innerHTML = `
  ${section3.map(item => `
       <div class="card-bg">
    <div class="feature-card">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <button class="button is-info signup" class="button">Sign Up</button>
    </div>
  </div>
  `).join('')}
`;

//section 4
document.querySelector('.hero-image-text-content > h1').textContent = section4.heading;
document.querySelector('.hero-image-text-content > p').textContent = section4.subheading


// section 6
document.querySelector('.section-6 > h1').innerHTML = section6.heading;
console.log('section6.heading', section6.heading)

/* 
      <div class="card-bg">
          <div class="feature-card">
            <img src="./assets/svg/screen-share.svg" alt="feature1">
            <h2>Cutting-Edge Tools</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque vitae est ornare dignissim. Egestas augue ut sed
              ultrices sed cursus.</p>
            <button class="button is-info signup" class="button">Sign Up</button>
          </div>
        </div>
*/
document.querySelector('.section-6 > .features').innerHTML = `
  ${section6.cards.map(item => `
    <div class="card-bg">
      <div class="feature-card">
        <img src="${item.icon}" alt="feature1">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <button class="button is-info signup" class="button">${item.buttonText}</button>
      </div>
    </div>
  `).join('')}
`;
