import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart.jsx';
import Cart from './Cart.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const notifyAddedToCart = (item) => toast.success(`${item.title} added to cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#fff',
      color: '#000',
    }
  });

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        if (data && data.products && data.products.length > 0) {
          setProduct(data.products[0]); // Assuming we're fetching the first product from the API
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, []);

  const handleAddToCart = () => {
    addToCart(product);
    notifyAddedToCart(product);
  };

  return (
    <div className='flex flex-col justify-center bg-gray-100'>
      <ToastContainer />
      <div className='flex justify-between items-center px-20 py-5'>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Product Details</h1>
        <Link to='/'>
          <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>
            Back to Products
          </button>
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div className='bg-white shadow-md rounded-lg px-10 py-10'>
          <img src={product.thumbnail} alt={product.title} className='rounded-md h-48' />
          <div className='mt-4'>
            <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
            <p className='mt-2 text-gray-600 text-sm'>{product.description}</p>
            <p className='mt-2 text-gray-600'>${product.price}</p>
          </div>
          <div className='mt-6 flex justify-between items-center'>
            {!cartItems.find(item => item.id === product.id) ? (
              <button
                className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={handleAddToCart}
                >
                  +
                </button>
                <p className='text-gray-600'>{cartItems.find(item => item.id === product.id).quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    const cartItem = cartItems.find((item) => item.id === product.id);
                    if (cartItem.quantity === 1) {
                      removeFromCart(product);
                    } else {
                      removeFromCart(product);
                    }
                  }}
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No product found!</p>
      )}
      <Cart />
    </div>
  );
}