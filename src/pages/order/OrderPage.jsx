import axios from 'axios';
import { useEffect, useState } from 'react';

import { Header } from '/src/components/Header';
import { OrderGrid } from './components/OrderGrid';

import './OrderPage.css'

export function OrderPage({ cart }) {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fatchOrdersData = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    };

    fatchOrdersData();
  }, []);

  return (
    <>
      <title>Order</title>
      <link rel="icon" type="image/png" href="src/assets/orders-fav.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders} />
      </div>
    </>
  );
};