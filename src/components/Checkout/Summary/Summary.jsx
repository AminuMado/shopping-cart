import "./Summary.css";
function Summary(props) {
  return (
    <div className="cart-page-summary-container">
      <h1>Order Summary</h1>
      <span className="cart-page-item-subinfo-detail">0 items</span>
      <div className="cart-page-summary-info">
        <span className="cart-page-summary-info-left">
          <strong>Subtotal:</strong>
          <p>300 Items</p>
        </span>
        <span className="cart-page-summary-info-right">$0.00</span>
      </div>
      <div className="cart-page-summary-info">
        <span className="cart-page-summary-info-left">
          <strong>Shipping:</strong>
          <p className="free-shipping">(free shipping on orders over $150!)</p>
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
      <button className="checkout-btn">checkout</button>
    </div>
  );
}
export default Summary;
