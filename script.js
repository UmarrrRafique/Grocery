let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  
  // Update the cart items display
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  
  cart.forEach(cartItem => {
    const li = document.createElement('li');
    li.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  // Update total
  document.getElementById('total').textContent = total.toFixed(2);
}

