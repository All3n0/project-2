import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      {cartItems.map((item, index) => (
        <CartItem key={index} productId={item.id} />
      ))}
    </div>
  );
};

export default Cart;
