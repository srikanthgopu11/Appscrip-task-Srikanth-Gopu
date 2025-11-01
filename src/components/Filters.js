// src/components/Filters.js
import React, { useState, useEffect } from 'react';

const Filters = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,      
  setPriceRange,   
  inStockOnly,
  setInStockOnly,
  allProducts      
}) => {
  
  const [minPriceInput, setMinPriceInput] = useState(priceRange[0]);
  const [maxPriceInput, setMaxPriceInput] = useState(priceRange[1]);

  const [categories, setCategories] = useState([]);

  
  const maxProductPrice = allProducts.reduce((max, product) => Math.max(max, product.price), 0);
  const initialDefaultMaxPrice = 1000; 

  
  useEffect(() => {
    
    const uniqueCategories = ['all', ...new Set(allProducts.map(product => product.category))];
    setCategories(uniqueCategories);

    
    if (maxProductPrice > initialDefaultMaxPrice && priceRange[1] === initialDefaultMaxPrice) {
      const adjustedMax = Math.ceil(maxProductPrice); 
      setMinPriceInput(0); 
      setMaxPriceInput(adjustedMax); 
      setPriceRange([0, adjustedMax]); 
    }
  }, [allProducts, maxProductPrice, priceRange, setPriceRange]); 

  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  
  const handleMinPriceInputChange = (e) => {
    const value = Number(e.target.value);
    setMinPriceInput(value);
    
    setPriceRange([value, maxPriceInput]);
  };

  const handleMaxPriceInputChange = (e) => {
    const value = Number(e.target.value);
    setMaxPriceInput(value);
    
    setPriceRange([minPriceInput, value]);
  };

  
  const handlePriceSliderChange = (e) => {
    const value = Number(e.target.value);
    
    setMaxPriceInput(value); 
    setPriceRange([minPriceInput, value]); 
  };

  
  const handleInStockChange = (e) => {
    setInStockOnly(e.target.checked);
  };

  
  const handleApplyFilters = () => {
    
    setPriceRange([minPriceInput, maxPriceInput]);
    
  };

  return (
    <aside className="filters-sidebar">
      <h3>Filters</h3>
      
      <div className="filter-group">
        <label htmlFor="category-select">Category</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange} 
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1).replace("'", "")}
            </option>
          ))}
        </select>
      </div>

      
      <div className="filter-group">
        <label htmlFor="price-min">Price Range</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <input
            type="number"
            id="price-min"
            value={minPriceInput}
            onChange={handleMinPriceInputChange} 
            min="0"
            max={maxProductPrice} 
            style={{ width: '60px', padding: '5px' }}
          />
          <span>-</span>
          <input
            type="number"
            id="price-max"
            value={maxPriceInput}
            onChange={handleMaxPriceInputChange} 
            min="0"
            max={maxProductPrice}
            style={{ width: '60px', padding: '5px' }}
          />
        </div>
        
        <input
          type="range"
          min="0"
          max={Math.ceil(maxProductPrice)} 
          value={priceRange[1]} 
          onChange={handlePriceSliderChange} 
          style={{ width: '100%' }}
        />
        <span>${priceRange[0]} - ${priceRange[1]}</span>
      </div>

      
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleInStockChange} 
          /> In Stock
        </label>
      </div>

      
      <button
        onClick={handleApplyFilters} 
        style={{ width: '100%', padding: '10px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default Filters;