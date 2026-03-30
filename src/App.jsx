import {Routes, Route, Navigate} from 'react-router';
import { HomePage } from '/src/pages/HomePage';
import { CheckoutPage } from '/src/pages/checkout/CheckoutPage';
import { TrackingPage } from '/src/pages/TrackingPage';
import { OrderPage } from '/src/pages/OrderPage';
import { NotFoundPage } from '/src/pages/NotFoundPage'
import './App.css'

function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}> </Route>
                    <Route path="/home" element={<HomePage/>}></Route>
                    <Route path="/checkout" element={<CheckoutPage/>}></Route>
                    <Route path="/tracking" element={<TrackingPage/>}></Route>
                    <Route path="/order" element={<OrderPage/>}></Route>

                    <Route path="*" element={<NotFoundPage/>}></Route>
                </Routes>
        </>
    );
};

export default App;