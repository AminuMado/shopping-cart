import "./Checkout.css";
import Card from "./Card/Card";
import Summary from "./Summary/Summary";
function Checkout(props) {
  const { cartItems, setCartItems } = props;
  const shoes = cartItems.map((shoe, index) => (
    <Card
      shoe={shoe}
      key={index}
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  ));
  let renderCart = false;

  renderCart = cartItems.length > 0 ? true : false;
  return (
    (!renderCart && (
      <div className="checkout-container"> show kdfeifeijfeikdjfkdme</div>
    )) ||
    (renderCart && (
      <div className="checkout-container">
        <div>
          <h1>My Cart</h1>
          <div className="checkout-shoes-container">{shoes}</div>
        </div>
        <Summary cartItems={cartItems} />
      </div>
    ))
  );
}
export default Checkout;
