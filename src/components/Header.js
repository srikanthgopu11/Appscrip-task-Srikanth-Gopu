// src/components/Header.js
import React, { useState } from 'react';

const Header = ({ onSearch }) => { 
  const [inputValue, setInputValue] = useState(''); 

  const handleSearch = (e) => {
    e.preventDefault(); 
    onSearch(inputValue);
  };

  return (
    <header className="header">
      <div className="header-logo">MyStore</div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <form className="header-search" onSubmit={handleSearch}> 
        <input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button type="submit">Search</button> 
      </form>
    </header>
  );
};

export default Header;