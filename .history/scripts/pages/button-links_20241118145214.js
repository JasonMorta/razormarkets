

    // Function to assign onclick based on button text

      const buttons = document.querySelectorAll('button');

      buttons.forEach(button => {
        const text = button.textContent?.trim();
        console.log('text', text)

        if (text === 'Sign Up') {
          button.onclick = () => {
            console.log('Sign Up button clicked');
            window.location.href = 'https://my.razormarkets.com/register'; // Replace with your desired URL
          };
        }
        else if (text === 'Login') {
          button.onclick = () => {
            console.log('Login button clicked');
            window.location.href = 'https://my.razormarkets.com/login'; // Replace with your desired URL
          };
        }
        // else if (text === 'Learn More') {
        //   button.onclick = () => {
        //     console.log('Learn More button clicked');
        //     //window.location.href = 'https://my.razormarkets.com/learnmore'; // Replace with your desired URL
        //   };
        // }

      });




