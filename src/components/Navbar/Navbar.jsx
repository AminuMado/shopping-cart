import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar({ cartItemsQuantity }) {
  return (
    <nav className="navbar-container">
      <ul>
        <Link to="/">
          <li className="title">Retro Shop</li>
        </Link>
        <Link to="/shop">
          <li className="shop">Shop</li>
        </Link>
        <Link to="/cart">
          <li className="shopping-cart-container">
            <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} />
            <span
              className={
                cartItemsQuantity > 0
                  ? "shopping-cart-items-count"
                  : "shopping-cart-items-count zero"
              }
            >
              {cartItemsQuantity}
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
