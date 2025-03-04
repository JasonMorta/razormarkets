
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
]

const section4 = {
  heading: 'Precision Trading, Razor Sharp Results',
  subheading: 'At Razor Markets, we redefine trading by combining lightning-fast withdrawals, innovative tools, and unparalleled transparency. Whether you’re new to trading or a seasoned pro, we’ve got everything you need to succeed.',
}






















// ============== DO NOT EDIT BELOW THIS LINE =============================

// Add the content to the page
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