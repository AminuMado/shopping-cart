import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const { cartItems, setCartItems, shoe } = props;
  const { Name, Src, Price, Quantity } = shoe;
  function deleteItem(shoe) {
    const newCartItems = cartItems.filter((item) => item.id !== shoe.id);
    setCartItems(newCartItems);
  }
  return (
    <div className="checkout-card-container">
      <img src={Src} alt="Jordans"></img>
      <div className="checkout-card-details">
        <h3 className="checkout-card-name">{Name}</h3>
        <p className="checkout-card-quantity">{`Quantity: ${Quantity}`}</p>
        <p className="checkout-card-price">{`Price: ${Price} VAT included`}</p>
      </div>
      <FontAwesomeIcon
        className="trash-icon"
        icon={faTrashCan}
        onClick={() => deleteItem(shoe)}
      />
    </div>
  );
}
export default Card;
