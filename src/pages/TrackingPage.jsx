import axios from 'axios';
import dayjs from 'dayjs';

import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';
import { Header } from '../components/Header';

import './TrackingPage.css'

export function TrackingPage({ cart }) {

  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();


  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get(`api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    }

    fetchData();
  }, [orderId]);


  if (!order) { return null }
  const product = order.products.find((product) => {
    return product.productId === productId;
  })

  const totalDeliveryTimeMs = product.estimatedDeliveryTimeMs - order.orderTimeMs;

  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

  let deliveryPercent;

  if (totalDeliveryTimeMs <= 0) {
    deliveryPercent = 100; // already delivered
  } else {
    deliveryPercent = Math.min(
      (timePassedMs / totalDeliveryTimeMs) * 100,
      100
    );
  }



  let isPreparing;
  let isShipped;
  let isDelivered;
  if (deliveryPercent >= 100) {
    isDelivered = 'current-status';
  }
  else if (deliveryPercent >= 33 && deliveryPercent < 100) {
    isShipped = 'current-status';
  }
  else {
    isPreparing = 'current-status';
  }

  return (
    <>
      <Header cart={cart} />

      <link rel="icon" type="image/png" href="src/assets/tracking-fav.png" />

      <div className="tracking-page">

        {product && (
          <div className="order-tracking">
            <NavLink className="back-to-orders-link link-primary" to="/order">
              View all orders
            </NavLink>

            <div className="delivery-date">
              {deliveryPercent >= 100 ? "Delivered on" : "Arriving on"} {dayjs(product.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
            </div>

            <div className="product-info">
              {product.product.name}
            </div>

            <div className="product-info">
              Quantity: {product.quantity}
            </div>

            <img
              className="product-image"
              src={product.product.image}
            />

            <div className="progress-labels-container">
              <div className={`progress-label ${isPreparing}`}>
                Preparing
              </div>
              <div className={`progress-label ${isShipped}`}>
                Shipped
              </div>
              <div className={`progress-label ${isDelivered}`}>
                Delivered
              </div>
            </div>

            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${deliveryPercent}%` }}></div>
            </div>
          </div>
        )}


      </div>
    </>
  );
};