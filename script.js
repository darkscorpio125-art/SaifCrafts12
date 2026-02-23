// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cart.length;
}

// Add to cart
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCount();
    alert(name + ' added to cart!');
}

// Calculate total
function getTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCount();
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            addToCart(btn.dataset.id, btn.dataset.name, parseFloat(btn.dataset.price));
        });
    });
    
    // Show total on cart page
    const totalEl = document.getElementById('total-price');
    if (totalEl) totalEl.textContent = getTotal().toFixed(2);
});