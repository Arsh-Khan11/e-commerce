// script.js

// Initialize cart count
let cartCount = 0;

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Select the cart display element
const cartDisplay = document.querySelector('.cart');

// Function to update the cart count display
function updateCartDisplay() {
    cartDisplay.textContent = `🛒 (${cartCount})`;
}

// Add click event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Increment cart count
        cartCount++;
        
        // Update the cart display
        updateCartDisplay();

        // Get the product name from the button's parent element
        const productName = event.target.parentElement.querySelector('h3').textContent;

        // Display an alert with the product name
        alert(`${productName} has been added to your cart!`);
    });
});

// Initial update of the cart display
updateCartDisplay();