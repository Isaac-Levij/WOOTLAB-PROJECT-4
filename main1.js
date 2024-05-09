// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cart = document.getElementById('cart');
    const cartIconLink = document.getElementById('cart-icon-link');
    const cartItemsContainer = document.getElementById('cart-items');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  
    let cartItemsCount = 0;
  
    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const price = parseFloat(btn.getAttribute('price'));
        cartItemsCount++;
        updateCartItemsCount();
        updateCartItemsList(btn.parentElement.querySelector('h2').textContent, price);
      });
    });
  
    function updateCartItemsCount() {
      cart.textContent = `Cart (${cartItemsCount})`;
    }
  
    function updateCartItemsList(productName, price) {
      const item = document.createElement('div');
      item.classList.add('cart-item');
      item.innerHTML = `${productName} - $${price}`;
      cartItemsContainer.appendChild(item);
    }
  
    cartIconLink.addEventListener('click', function(event) {
      event.preventDefault();
      cartItemsContainer.classList.toggle('show');
    });
  
  });
  