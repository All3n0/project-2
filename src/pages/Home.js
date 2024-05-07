import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";
import Cart from "./Cart";

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { id: product.id, quantity: 1 }]);
    }
  };
  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
      <ProductCard addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      </main>
    </>
  );
}

export default Home;