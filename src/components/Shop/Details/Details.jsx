import "./Details.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselItem } from "../../Carousel/Carousel";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function Details({ findItem, addToCart }) {
  const { id } = useParams();
  const item = findItem(id);
  const [modal, setModal] = React.useState(false);
  const [showCompleteOrder, setShowCompleteOrder] = React.useState(false);

  const handleAdd = () => {
    setModal(true);
    setTimeout(() => setModal(false), 500);
    setShowCompleteOrder(true);
    addToCart(item);
  };
  const photos = item.Photos.map((photo, index) => (
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
            <p className="shoe-name">Air Jordan 1s</p>
            <p className="shoe-description">{item.Name}</p>
            <p className="shoe-price">{item.Price}</p>
          </div>
          <Link to="/shop">
            <FontAwesomeIcon className="left-arrow-icon" icon={faLeftLong} />
          </Link>
        </div>
        <div className="buttons-container">
          <button className="add-to-cart-btn" onClick={() => handleAdd()}>
            Add to Cart
          </button>
          {showCompleteOrder && (
            <Link to="/cart">
              <button className="complete-order-btn">Complete Order</button>
            </Link>
          )}
        </div>
        {modal && (
          <div className="pop-up-modal">
            <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
            <p>Added to Cart</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Details;
