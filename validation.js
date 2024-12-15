// script.js

document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error message
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validate form fields
    if (name === '' || address === '' || phone === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    // Validate phone number format
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }

    // If validation passes, you can submit the form or process the data
    alert('Customer details submitted successfully!');
    document.getElementById('customerForm').reset(); // Reset the form
});