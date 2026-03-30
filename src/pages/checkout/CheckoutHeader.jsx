import { Link } from 'react-router';
import './CheckoutHeader.css'

import logo from '/src/assets/logo-nbg.png';
import lock from '/src/assets/images/icons/checkout-lock-icon.png';

export function CheckoutHeader() {
    return(
        <>
            <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={logo} />
            <img className="mobile-logo" src={logo} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link"
            to="/">3 items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src={lock} />
        </div>
      </div>
    </div>
        </>
    );
}