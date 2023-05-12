function submitForm() {
    // Get references to the form elements
    const form = document.querySelector('.form-contain');
    const nameField = document.getElementById('NameField');
    const emailField = document.getElementById('EmailField');
    const messageField = document.getElementById('MessageField');

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(emailField.value);
    
    // If email is invalid, show alert and reload page
    if (!emailValid) {
        alert('Please enter a valid email address');
        location.reload();
        return;
    }
    setTimeout(function() {
        alert('Successfully submitted!');
    }, 3000); // Delay of 1 second (1000 milliseconds)

    // Clear input fields
    nameField.value = '';
    emailField.value = '';
    messageField.value = 'Enter your Message';
}
