import {Routes, Route, Navigate} from 'react-router';
import { HomePage } from '/src/pages/HomePage';
import './App.css'

function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}> </Route>
                    <Route path="/home" element={<HomePage/>}></Route>
                    <Route path="/checkout" element={<div>hello world</div>}></Route>
                </Routes>
        </>
    );
};

export default App;