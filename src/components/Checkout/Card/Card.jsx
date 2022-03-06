import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import photo from "../../../Assets/Images/Zen_Green_1.jpg";
function Card(props) {
  return (
    <div className="checkout-card-container">
      <img src={photo} alt="Jordans"></img>
      <div className="checkout-card-details">
        <p className="checkout-card-name">Air Jordan 1s</p>
        <p className="checkout-card-description">Zen Green</p>
        <p className="checkout-card-quantity">Quantity:2</p>
        <p className="checkout-card-price">Price:$250 vat included</p>
      </div>
      <FontAwesomeIcon className="trash-icon" icon={faTrashCan} />
    </div>
  );
}
export default Card;
