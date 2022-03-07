import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const { cartItems } = props;
  const cartTotalItems = cartItems
    .map((item) => parseInt(item.Quantity))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return (
    <div className="navbar-container">
      <ul>
        <li className="title">Retro Shop</li>
        <li className="shop">Shop</li>
        <li className="about">About</li>
        <li className="shopping-cart-container">
          <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} />
          <div
            className={
              cartTotalItems > 0
                ? "shopping-cart-items-count"
                : "shopping-cart-items-count zero"
            }
          >
            {cartTotalItems}
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
