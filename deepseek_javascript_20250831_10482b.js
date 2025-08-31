// Add this to your existing script section or create a separate .js file

// Shopping cart functionality
let cartCount = 0;
const cartIcon = document.querySelector('.cart-count');

function updateCart() {
    cartIcon.textContent = cartCount;
    if (cartCount > 0) {
        cartIcon.style.display = 'flex';
    } else {
        cartIcon.style.display = 'none';
    }
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        updateCart();
        
        // Visual feedback
        const originalText = this.textContent;
        this.textContent = "Added!";
        this.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = 'linear-gradient(to right, #6a11cb, #2575fc)';
        }, 1500);
    });
});

// Mobile menu toggle (add this HTML and CSS first)
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.header-top').appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});