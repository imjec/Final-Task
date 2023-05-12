
    // Function to handle sign-up form submission
    function signUp() {
        const firstNameInput = document.querySelector('.fName');
        const emailInput = document.querySelector('.eMail');
        const passwordInput = document.querySelector('.Password');
        const confirmPasswordInput = document.querySelector('.cPassword');

        const firstName = firstNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (firstName === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill out all the required fields.');
        } else if (password !== confirmPassword) {
            alert('Password and Confirm Password fields do not match.');
        } else {
            // Simulate a successful sign-up
            alert('Sign up successful! Redirecting to the Login page.');

            // Redirect to landing page after a 5-second delay
            setTimeout(function() {
                // Replace the following line with your desired logic
                window.location.href = '../index.html';
            }, 2000); // 5000 milliseconds = 5 seconds
        }
    }

    // Add click event listener to the sign-up button
    document.addEventListener('DOMContentLoaded', function() {
        const signUpButton = document.querySelector('.button1');
        signUpButton.addEventListener('click', signUp);
    });
