import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Details.css";
import Carousel from "../../Carousel/Carousel";
import { CarouselItem } from "../../Carousel/Carousel";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import React from "react";
function Details(props) {
  const [modal, setModal] = React.useState(false);
  const { setActiveShoe, activeShoe, cartItems, setCartItems } = props;
  const photos = activeShoe.Photos.map((photo, index) => (
    <CarouselItem key={index}>
      <img src={photo} alt="Jordans"></img>
    </CarouselItem>
  ));
  function addToCart(shoe) {
    //if shoe exists in the cart
    // increase its quantity
    // if it doesnt just add it to the cart

    // check if already in cart
    const alreadyInCart = cartItems
      .map((shoe) => shoe.id)
      .includes(activeShoe.id);
    // if in cart add 1 to qty
    if (alreadyInCart) {
      //increase the items quantity figure and max it at 5
      //increase quantity code here
      const updatedShoe = cartItems.map((shoe) => {
        if (shoe.id === activeShoe.id) {
          return { ...shoe, Quantity: shoe.Quantity + 1 };
        } else return shoe;
      });
      setCartItems(updatedShoe);
    } else {
      // if not add complete item
      // with count added
      const prevQuantity = activeShoe.Quantity;
      const newShoe = { ...activeShoe, Quantity: prevQuantity + 1 };
      setCartItems([...cartItems, newShoe]);
    }
    setModal(true);
    setTimeout(() => setModal(false), 1000);
  }

  return (
    <div className="details-overlay active">
      <div className="details active">
        <Carousel>{photos}</Carousel>
        <div className="info-container">
          <div className="shoe-information">
            <p className="shoe-name">Air Jordan 1s</p>
            <p className="shoe-description">{activeShoe.Name}</p>
            <p className="shoe-price">{activeShoe.Price}</p>
          </div>
          <FontAwesomeIcon
            className="cancel-icon"
            icon={faX}
            onClick={() => setActiveShoe(false)}
          />
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(activeShoe)}
        >
          Add to Cart
        </button>
        {modal && (
          <div className="pop-up-modal">
            <FontAwesomeIcon
              className="check-icon"
              icon={faCircleCheck}
              onClick={() => setActiveShoe(false)}
            />
            <p>Added to Cart</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Details;
