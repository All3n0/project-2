import React, { useState } from 'react';

function NavBar() {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?category=${category}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
