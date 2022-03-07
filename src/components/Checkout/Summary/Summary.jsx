import "./Summary.css";
function Summary(props) {
  const { cartItems } = props;
  let count = 0;
  cartItems.forEach((item) => {
    count = count + item.Quantity;
  });
  return (
    <div className="cart-page-summary-container">
      <h1>Order Summary</h1>
      <div className="cart-page-summary-info">
        <span className="cart-page-summary-info-left">
          <strong>Subtotal:</strong>
          <p>{count} Items</p>
        </span>
        <span className="cart-page-summary-info-right">$0.00</span>
      </div>
      <div className="cart-page-summary-info">
        <span className="cart-page-summary-info-left">
          <strong>Shipping:</strong>
          <p className="free-shipping">(free shipping on orders over $500!)</p>
        </span>
        <span className="cart-page-summary-info-right">$0.00</span>
      </div>

      <div className="cart-page-summary-info overline">
        <span className="cart-page-summary-info-left">
          <strong>Total:</strong>
        </span>
        <span className="cart-page-summary-info-right">
          <strong>$0.00</strong>
        </span>
      </div>
      <button className="checkout-btn">
        <span>CHECKOUT</span>
      </button>
    </div>
  );
}
export default Summary;
