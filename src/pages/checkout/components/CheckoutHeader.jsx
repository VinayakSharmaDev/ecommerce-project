import { Link } from 'react-router';
import './CheckoutHeader.css'

import logo from '/src/assets/logo-nbg.png';
import lock from '/src/assets/images/icons/checkout-lock-icon.png';

export function CheckoutHeader({ cart }) {
  let cartQuentity = 0;

  cart.forEach(cartItem => {
    cartQuentity += cartItem.quantity;
  });

  let quentityDisplay;
  if (cartQuentity <= 1) {
    quentityDisplay = `${cartQuentity} Item`
  }
  else {
    quentityDisplay = `${cartQuentity} Items`
  }


  return (
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
              to="/">{quentityDisplay}</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src={lock} />
          </div>
        </div>
      </div>
    </>
  );
}