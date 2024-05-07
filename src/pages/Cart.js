import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  const calculateTotalQuantity=(productId)=>{
    return cartItems.reduce((total,item)=>{
      return item.id ===productId? total+item.quantity:total;
    })
  }
  return (
    <div className="cart">
      {cartItems.map((item, index) => (
        <CartItem key={index} productId={item.id} quantity={calculateTotalQuantity}/>
      ))}
    </div>
  );
};

export default Cart;
