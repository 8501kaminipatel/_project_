function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    cart.forEach((item, index) => {
      let itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.title}" width="100">
        <h4>${item.title}</h4>
        <p>Price: ${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
        <hr>
      `;
      cartItems.appendChild(itemDiv);
    });
  }

  // Remove item from cart
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }

  // Clear the cart
  document.getElementById('clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    loadCart();
  });

  // Load cart items on page load
  loadCart();