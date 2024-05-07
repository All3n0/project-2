// Checkout.js
import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout">
      <button>Checkout</button>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Checkout;
