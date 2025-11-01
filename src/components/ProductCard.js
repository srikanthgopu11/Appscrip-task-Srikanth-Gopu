// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title || 'Product image'} /> 
      <h2>{product.title}</h2>
      <p>${product.price ? product.price.toFixed(2) : 'N/A'}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;