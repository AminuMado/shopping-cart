import "./Summary.css";
import { Link } from "react-router-dom";

function Summary({ cartItems }) {
  const cartTotalPrice = cartItems
    .map((item) => item.Price * item.Quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  return (
    <div className="cart-page-summary-container">
      <Link to="/shop">
        <button className="go-back-btn">Go Back</button>
      </Link>
      <span className="total">Total ${cartTotalPrice}</span>
      <button className="checkout-btn">
        <span>CHECKOUT</span>
      </button>
      <div class="checkout-message-container">
        <h3>Retro Shop</h3>
        <span>Thank you for your order!</span>
        <p>This is actually a Fake Store</p>
        <Link to="/Landing">
          <button class="return-button">Return To Shop</button>
        </Link>
      </div>
    </div>
  );
}
export default Summary;
