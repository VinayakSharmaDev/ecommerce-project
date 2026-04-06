import axios from 'axios';
import { useState, useEffect } from 'react';
import { CheckoutHeader } from './CheckoutHeader.jsx';
import { OrderSummery } from './OrderSummery';
import { PaymentSummery } from './PaymentSummery'
import './CheckoutPage.css';

export function CheckoutPage({ cart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummery] = useState([]);

  useEffect(() => {
    axios.get('api/delivery-options?expand=estimatedDeliveryTime')
      .then((response) => {
        setDeliveryOptions(response.data)
      })

    axios.get("/api/payment-summary")
      .then((response) => {
        setPaymentSummery(response.data);
      })
  }, []);


  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/png" href="src/assets/cart-fav.png" />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>


        <div className="checkout-grid">

          <OrderSummery cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummery paymentSummery={paymentSummery} />

        </div>
      </div >
    </>
  )
}