import "./Card.css";
import { Link } from "react-router-dom";
function Card(props) {
  const { Name, Src, Price, Favorite, id } = props.shoe;

  return (
    <Link to={`/shop/${id}`}>
      <div className="card-container">
        <img src={Src} alt="Jordans"></img>
        <p className="card-name">Air Jordan 1s</p>
        <p className="card-description">{Name}</p>
        <p className="card-price">${Price}</p>
        {Favorite && <p className="card-recommended">Personal Favorite</p>}
      </div>
    </Link>
  );
}
export default Card;
