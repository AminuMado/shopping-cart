import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar-container">
      <ul>
        <li className="title">Retro Shop</li>
        <li className="shop">Shop</li>
        <li className="about">About</li>
        <li className="shopping-cart-container">
          <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} />
          <div className="shopping-cart-items-count">0</div>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
