import "./Summary.css";
function Summary(props) {
  return (
    <div class="cart-page-summary-container">
      <h1>Order summary</h1>
      <span class="cart-page-item-subinfo-detail">0 items</span>
      <div class="cart-page-summary-info">
        <span class="cart-page-summary-info-left">
          <strong>Subtotal:</strong>
          <p>300 Items</p>
        </span>
        <span class="cart-page-summary-info-right">$0.00</span>
      </div>
      <div class="cart-page-summary-info">
        <span class="cart-page-summary-info-left">
          <strong>Shipping:</strong>
          <p class="free-shipping" id="free-shipping">
            (free shipping on orders over $150!)
          </p>
        </span>
        <span class="cart-page-summary-info-right">$0.00</span>
      </div>

      <div class="cart-page-summary-info overline">
        <span class="cart-page-summary-info-left">
          <strong>Total:</strong>
        </span>
        <span class="cart-page-summary-info-right">
          <strong>$0.00</strong>
        </span>
      </div>
      <button class="checkout-btn">checkout</button>
    </div>
  );
}
export default Summary;
