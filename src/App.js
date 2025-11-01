// src/App.js
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import './App.css';

import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState('default'); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setAllProducts(response.data);
        setError(null);
      } catch (err) {
        console.error('API error:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let currentProducts = [...allProducts]; 

    if (searchTerm) {
      currentProducts = currentProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      currentProducts = currentProducts.filter(product =>
        product.category === selectedCategory
      );
    }

    currentProducts = currentProducts.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (inStockOnly) {
    }

    if (sortOption === 'price-asc') {
      currentProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      currentProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name-asc') {
      currentProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    return currentProducts;
  }, [allProducts, searchTerm, selectedCategory, priceRange, inStockOnly, sortOption]);


  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredAndSortedProducts.slice(0, 5).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "image": product.image,
        "description": product.description ? product.description.substring(0, 150) + "..." : "",
        "sku": product.id,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": product.price,
          "availability": "https://schema.org/InStock",
          "url": `YOUR_PRODUCT_DETAIL_PAGE_URL/${product.id}`
        }
      }
    }))
  };

  return (
    <div className="app-container">
      <Helmet>
        <title>Product Listing Page | MyStore</title>
        <meta name="description" content="Browse our extensive collection of products including electronics, jewelry, men's and women's clothing. Find great deals and explore new arrivals." />
        <meta name="keywords" content="e-commerce, online store, products, shop, electronics, jewelry, clothing, best deals, new arrivals" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Header onSearch={setSearchTerm} />

      <main className="main-content">
        <Filters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
          allProducts={allProducts} 
        />
        {loading ? (
          <p className="loading-message">Loading products...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <ProductGrid
            products={filteredAndSortedProducts} 
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;