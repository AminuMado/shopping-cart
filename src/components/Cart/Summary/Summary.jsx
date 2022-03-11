import "./Summary.css";
import { Link } from "react-router-dom";
import React from "react";

function Summary({ cartItems, clearCartItems }) {
  const [overlay, setOverLay] = React.useState(false);
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
      <button className="checkout-btn" onClick={() => setOverLay(true)}>
        <span>CHECKOUT</span>
      </button>
      {overlay && (
        <>
          <div className="checkout-message-container">
            <h3>Retro Shop</h3>
            <span>Thank you for your order!</span>
            <p>This is actually a Fake Store</p>
            <Link to="/">
              <button
                className="return-btn"
                onClick={() => {
                  setOverLay(false);
                  clearCartItems();
                }}
              >
                Return To Shop
              </button>
            </Link>
          </div>
          <div className="details-overlay active"></div>
        </>
      )}
    </div>
  );
}
export default Summary;
