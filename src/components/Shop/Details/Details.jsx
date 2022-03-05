import "./Details.css";
import Carousel from "../../Carousel/Carousel";
import { CarouselItem } from "../../Carousel/Carousel";
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
        <div>
          <p className="card-name">Air Jordan 1s</p>
          <p className="card-description">{activeShoe.Name}</p>
          <p className="card-price">{activeShoe.Price}</p>
          <button onClick={(e) => handleClick(false)}>Click Me</button>
        </div>
      </div>
    </div>
  );
}
export default Details;
