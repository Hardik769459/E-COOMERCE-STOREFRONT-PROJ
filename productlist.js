import React from 'react';
import { Link } from 'react-router-dom';
import products from './product details';

function ProductList() {
  return (
    <div>
      <h1>Smartphone Store</h1>
      <Link to="/cart">Cart</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;