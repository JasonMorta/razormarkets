

    // Function to assign onclick based on button text

      const buttons = document.querySelectorAll('button');

      buttons.forEach(button => {
        const text = button.textContent?.trim();

        if (text === 'Sign Up') {
          button.onclick = () => {
            window.location.href = '#signup'; // Replace with your desired URL
          };
        }
        else if (text === 'Login') {
          button.onclick = () => {
            window.location.href = '#login'; // Replace with your desired URL
          };
        }
        else if (text === 'Learn More') {
          button.onclick = () => {
            window.location.href = 'https://your-learn-more-link.com'; // Replace with your desired URL
          };
        }

      });




