document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Validate inputs
    if (!name || !address || !phone || !email) {
        displayMessage('All fields are required!', 'red');
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        displayMessage('Phone number must be 10 digits!', 'red');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayMessage('Please enter a valid email address!', 'red');
        return;
    }

    // If all validations pass
    displayMessage('Student details submitted successfully!', 'green');

    // Optionally, you can reset the form
    document.getElementById('studentForm').reset();
});

function displayMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}