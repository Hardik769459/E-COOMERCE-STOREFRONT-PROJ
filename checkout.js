import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    localStorage.removeItem('cart');
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div>
        <h1>Thank you for your order!</h1>
        <p>Your order has been placed.</p>
        <Link to="/">Return to Homepage</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <button onClick={() => navigate('/cart')}>Back to Cart</button>
    </div>
  );
}

export default Checkout;