import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router';
import './Header.css';

import logo from '/src/assets/logo-nbg.png';
// import search from '/src/assets/images/icons/search-icon.png';
import buyAgain from '/src/assets/images/icons/cart-icon.png';

export function Header({ cart }) {

  let totalQuantity = 0;
  cart.forEach(cartItem => {
    totalQuantity += cartItem.quantity;
  });

  const input = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }


  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const search = searchParams.get('search') || "";

  const [inputValue, setInputValue] = useState(search);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue.trim() !== "") {
        if (inputValue !== "")
          navigate(`/home?search=${inputValue}`);
      } else {
        if (search !== null)
          navigate('/home');
      }
    }, 500); // debounce

    return () => clearTimeout(timeout);
  }, [inputValue, search]);



  const inputButton = () => {

  }

  const hendlerInput = (event) => {
    if (event.key == "Enter") { inputButton() }
  }



  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/home" className="header-link">
            <img className="logo"
              src={logo} />
            <img className="mobile-logo"
              src="logo" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" value={inputValue} onChange={input} onKeyDown={hendlerInput} />

          <button className="search-button" onClick={inputButton}>
            <img className="search-icon" src={search} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/order">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={buyAgain} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}