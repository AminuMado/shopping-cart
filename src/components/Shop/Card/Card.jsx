import "./Card.css";
import { Link } from "react-router-dom";
function Card({ Name, Src, Price, Favorite, id }) {
  return (
    <Link to={`/shop/${id}`}>
      <div className="card-container">
        <img src={Src} alt="Jordans"></img>
        <p className="card-name">Air Jordan 1s</p>
        <p className="card-description">{Name}</p>
        <p className="card-price">${Price.toFixed(2)}</p>
        {Favorite && <p className="card-recommended">Personal Favorite</p>}
      </div>
    </Link>
  );
}
export default Card;
