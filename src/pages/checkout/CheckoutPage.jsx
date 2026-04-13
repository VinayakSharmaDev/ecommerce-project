import axios from 'axios';
import { useState, useEffect } from 'react';
import { CheckoutHeader } from './components/CheckoutHeader.jsx';
import { OrderSummery } from './components/OrderSummery';
import { PaymentSummery } from './components/PaymentSummery'
import './CheckoutPage.css';

export function CheckoutPage({ cart, loadCart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummery] = useState([]);

  useEffect(() => {

    const fetchOptions = async () => {
      const response = await axios.get('api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    }

    fetchOptions();
  }, []);


  useEffect(() => {
    const fetchPayment = async () => {
      const response = await axios.get("/api/payment-summary")
      setPaymentSummery(response.data)
    }

    fetchPayment();
  }, [cart]);


  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/png" href="src/assets/cart-fav.png" />

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>


        <div className="checkout-grid">

          <OrderSummery cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
          <PaymentSummery paymentSummery={paymentSummery} loadCart={loadCart} />

        </div>
      </div >
    </>
  )
}