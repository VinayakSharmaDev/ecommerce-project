import { Link } from 'react-router';
import './Header.css';

export function Header() {
    return(
        <>
          <div class="header">
      <div class="left-section">
        <Link to="/home" class="header-link">
          <img class="logo"
            src="/src/assets/logo-nbg.png" />
          <img class="mobile-logo"
            src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div class="middle-section">
        <input class="search-bar" type="text" placeholder="Search" />

        <button class="search-button">
          <img class="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div class="right-section">
        <Link class="orders-link header-link" to="/order">

          <span class="orders-text">Orders</span>
        </Link>

        <Link class="cart-link header-link" to="/checkout">
          <img class="cart-icon" src="images/icons/cart-icon.png" />
          <div class="cart-quantity">3</div>
          <div class="cart-text">Cart</div>
        </Link>
      </div>
    </div>
        </>
    );
}