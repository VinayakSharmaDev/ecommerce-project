import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';


import { Header } from '/src/components/Header';
import { ProductGrid } from './ProductGrid';
import '/src/pages/home/HomePage.css';

export function HomePage({ cart, loadCart }) {

  const [products, setProducts] = useState([]);


  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {

    const fatchProductsData = async () => {
      let url = '/api/products';

      if (search) {
        url = `/api/products?search=${search}`;
      }

      const response = await axios.get(url);
      setProducts(response.data);
    }

    fatchProductsData();
  }, [search]);

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};