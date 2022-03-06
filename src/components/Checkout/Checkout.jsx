import "./Checkout.css";
import Card from "./Card/Card";
import Summary from "./Summary/Summary";
function Checkout(props) {
  return (
    <div>
      <h1>My Cart</h1>
      <Card />
      <Summary />
    </div>
  );
}
export default Checkout;
