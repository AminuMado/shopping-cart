import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Details.css";
import Carousel from "../../Carousel/Carousel";
import { CarouselItem } from "../../Carousel/Carousel";
import { faX } from "@fortawesome/free-solid-svg-icons";
function Details(props) {
  const { handleClick, activeShoe } = props;
  const photos = activeShoe.Photos.map((photo, index) => (
    <CarouselItem key={index}>
      <img src={photo} alt="Jordans"></img>
    </CarouselItem>
  ));
  return (
    <div className="details-overlay active">
      <div className="details active">
        <Carousel>{photos}</Carousel>
        <div className="info-container">
          <div className="shoe-information">
            <p className="card-name">Air Jordan 1s</p>
            <p className="card-description">{activeShoe.Name}</p>
            <p className="card-price">{activeShoe.Price}</p>
          </div>
          <FontAwesomeIcon
            className="cancel-icon"
            icon={faX}
            onClick={() => handleClick(false)}
          />
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}
export default Details;
