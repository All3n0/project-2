// CartItem.js
import React, { useState, useEffect } from 'react';

const CartItem = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data.product))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      {product ? (
        <>
          <img src={product.image} alt={product.name} />
          <div className="details">
            <p>{product.name}</p>
            <p>Price: ${product.price * quantity}</p>
            <div className="quantity">
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <p>Total: ${product.price * quantity}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CartItem;
