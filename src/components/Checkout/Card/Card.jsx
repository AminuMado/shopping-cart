import "./Card.css";
import photo from "../../../Assets/Images/Zen_Green_1.jpg";
function Card(props) {
  return (
    <div className="checkout-card-container">
      <img src={photo} alt="Jordans"></img>
      <div className="checkout-card-details">
        <p className="checkout-card-name">Air Jordan 1s</p>
        <p className="checkout-card-description">Zen Green</p>
        <p className="checkout-card-quantity">2</p>
        <p className="checkout-card-price">$250</p>
      </div>
    </div>
  );
}
export default Card;
