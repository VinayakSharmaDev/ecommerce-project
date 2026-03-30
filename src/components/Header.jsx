import { NavLink } from 'react-router';
import './Header.css';

import logo from '/src/assets/logo-nbg.png';
import search from '/src/assets/images/icons/search-icon.png';
import buyAgain from '/src/assets/images/icons/cart-icon.png';

export function Header() {
    return(
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
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={search} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/order">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={buyAgain}/>
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
        </>
    );
}