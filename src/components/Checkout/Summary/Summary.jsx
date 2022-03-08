import "./Summary.css";
function Summary(props) {
  const { cartItems } = props;

  const cartSubtotalPrice = cartItems
    .map((item) => item.Price * item.Quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  const cartTotalItems = cartItems
    .map((item) => parseInt(item.Quantity))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  let shipping = (0.0).toFixed(2);
  let freeShipping = `$${
    500 - parseFloat(cartSubtotalPrice)
  } away from free shipping!`;

  if (cartSubtotalPrice > 499.99 || cartTotalItems === 0) {
    shipping = (0.0).toFixed(2);
    freeShipping = "free shipping on orders over $500!";
  } else {
    shipping = (15.0).toFixed(2);
  }

  const cartTotalPrice = (
    parseFloat(cartSubtotalPrice) + parseFloat(shipping)
  ).toFixed(2);

  return (
    <div className="cart-page-summary-container">
      <h1>Order Summary</h1>
      <div className="cart-page-summary-info">
        <span className="cart-page-summary-info-left">
          <strong>Subtotal:</strong>
          <p>
            {cartTotalItems} {cartTotalItems > 1 ? "items" : "item"}
          </p>
        </span>
        <span className="cart-page-summary-info-right">
          ${cartSubtotalPrice}
        </span>
      </div>
      <div className="cart-page-summary-info">
        <span className="cart-page-summary-info-left">
          <strong>Shipping:</strong>
          <p className="free-shipping">{freeShipping}</p>
        </span>
        <span className="cart-page-summary-info-right">${shipping}</span>
      </div>

      <div className="cart-page-summary-info">
        <span className="cart-page-summary-info-left">
          <strong>Total:</strong>
        </span>
        <span className="cart-page-summary-info-right">
          <strong>${cartTotalPrice}</strong>
        </span>
      </div>
      <button className="checkout-btn">
        <span>CHECKOUT</span>
      </button>
    </div>
  );
}
export default Summary;
