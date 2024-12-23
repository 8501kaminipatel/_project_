// Update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
  }
  
  // Call the function on page load
  updateCartCount();
  
  // Add to Cart Functionality
  document.querySelector('button').addEventListener('click', function () {
    let cartItem = {
      title: title,
      image: image,
      price: price
    };
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Update the cart count and notify the user
    updateCartCount();
    alert('Item added to cart!');
  });
  