import "./Card.css";
import shoe_src from "../../Pollen_1.jpg";
function Card(props) {
  return (
    <div className="card-container">
      <img src={shoe_src} alt="Jordans"></img>
      <p className="card-name">Air Jordan 1s</p>
      <p className="card-description">High Retro OG 'Pollen'</p>
      <p className="card-price">$150</p>
      <p className="card-recommended">Personal Favorite</p>
    </div>
  );
}
export default Card;
