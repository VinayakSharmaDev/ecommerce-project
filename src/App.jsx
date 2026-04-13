import { Routes, Route, Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HomePage } from '/src/pages/home/HomePage';
import { CheckoutPage } from '/src/pages/checkout/CheckoutPage';
import { TrackingPage } from '/src/pages/TrackingPage';
import { OrderPage } from '/src/pages/order/OrderPage';
import { NotFoundPage } from '/src/pages/NotFoundPage'
import './App.css'

function App() {
    const [cart, setCart] = useState([]);

    const fatchCartData = async () => {
        const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data);
    }

    useEffect(() => {
        fatchCartData();
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />}> </Route>
                <Route path="/home" element={<HomePage cart={cart} loadCart={fatchCartData} />}></Route>
                <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={fatchCartData} />}></Route>
                <Route path="/tracking/:orderId/:productId" element={<TrackingPage cart={cart} />}></Route>
                <Route path="/order" element={<OrderPage cart={cart} loadCart={fatchCartData} />}></Route>

                <Route path="*" element={<NotFoundPage cart={cart} />}></Route>
            </Routes>
        </>
    );
};

export default App;