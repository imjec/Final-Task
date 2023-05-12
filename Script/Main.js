        // Function to handle form submission
        function signIn() {
            const emailInput = document.querySelector('.e-address');
            const passwordInput = document.querySelectorAll('.e-address')[1];

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email === '' || password === '') {
                alert('Please fill out the Email address and Password');
            } else {
                // Proceed to index.html
                // Replace the following line with your desired logic
                window.location.href = './pages/landingpage.html';
            }
        }

        // Add click event listener to the sign-in button
        document.addEventListener('DOMContentLoaded', function() {
            const signInButton = document.querySelector('.button');
            signInButton.addEventListener('click', signIn);
        });