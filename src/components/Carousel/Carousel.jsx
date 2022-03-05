import React from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

//This is function that takes items and displays them
// it lines them up in a carousel
// in the code below React.Children.map
//The code below shows the difference
//  var photo = null
// photo.map(i => {return i}) // => VM370:1 Uncaught TypeError: Cannot read property 'map' of null
// React.Children.map(photo, i => {return i;}) // return null
// note props.children returns anything you pass inbetwwen  the opening and closing tags of the comoponent <Carousel> these constitiue the children </Carousel>
// this compoenent is dependednt on the children you call between the CarouselItem tags this could be anything
export function CarouselItem(props) {
  return (
    <div className="carousel-item" style={{ width: props.width }}>
      {props.children}
    </div>
  );
}
function Carousel(props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const numberOfChildren = React.Children.count(props.children); // This counts the number of elements to be rendered in the carousel
  function updateIndex(currentIndex) {
    let newIndex;
    if (currentIndex < 0) {
      newIndex = 0;
    } else if (currentIndex >= numberOfChildren) {
      newIndex = numberOfChildren - 1;
    } else newIndex = currentIndex;
    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(props.children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="navigation">
        <FontAwesomeIcon
          className={
            activeIndex >= numberOfChildren - 1 ? "hide" : "next-arrow"
          }
          icon={faArrowRightLong}
          onClick={() => updateIndex(activeIndex + 1)}
        />
        <FontAwesomeIcon
          className={activeIndex <= 0 ? "hide" : "prev-arrow"}
          icon={faArrowLeftLong}
          onClick={() => updateIndex(activeIndex - 1)}
        />
      </div>
      <div className="dots-container">
        <div className="dots">
          {React.Children.map(props.children, (child, index) => {
            return (
              <div
                className={index === activeIndex ? "dot active" : "dot"}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Carousel;
