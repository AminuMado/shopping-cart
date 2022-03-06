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
  return (
    <div className="checkout-container">
      <h1>My Cart</h1>
      <div>{shoes}</div>
      <Summary />
    </div>
  );
}
export default Checkout;
