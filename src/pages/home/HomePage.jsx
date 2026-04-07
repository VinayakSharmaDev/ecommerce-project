import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '/src/components/Header';
import { ProductGrid } from './ProductGrid';
import '/src/pages/home/HomePage.css';

export function HomePage({ cart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fatchProductsData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data);
    }

    fatchProductsData();
  }, [])

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
};