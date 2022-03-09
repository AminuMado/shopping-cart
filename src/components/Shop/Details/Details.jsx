import "./Details.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselItem } from "../../Carousel/Carousel";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function Details({ item, addToCart }) {
  const [modal, setModal] = React.useState(false);
  const [showCompleteOrder, setShowCompleteOrder] = React.useState(false);
  const { goBack } = useHistory();

  const handleAdd = () => {
    setModal(true);
    setTimeout(() => setModal(false), 1000);
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
          <FontAwesomeIcon
            className="cancel-icon"
            icon={faX}
            onClick={goBack}
          />
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
