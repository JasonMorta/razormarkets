const section1 = {
  heading: 'Get in touch',
  subheading: 'We are here to help! Reach out to our dedicated support team for any inquiries, assistance, or feedback. Your success is our priority, and we’re just a message away.',
  button1: 'Learn More',
  button2: 'Sign Up',
  image: "../../../assets/svg/contact.svg"
}





// ==================== DON'T EDIT BELOW THIS LINE ====================
document.querySelector('.contact-content > h1').textContent = section1.heading;
document.querySelector('.contact-content > p').textContent = section1.subheading;
document.querySelector('.contact-content > .buttons > button').textContent = section1.button1;
document.querySelector('.contact-content > .buttons > button:nth-child(2)').textContent = section1.button2;
document.querySelector('.info-badges ').innerHTML = `<img src="${section1.image}" alt="contact">`;
