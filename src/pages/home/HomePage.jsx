import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '/src/components/Header';
import { ProductGrid } from './ProductGrid';
import '/src/pages/home/HomePage.css';

export function HomePage({ cart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {


    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      });

  }, [])

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>
  );
};