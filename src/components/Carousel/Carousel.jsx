import React from "react";
import "./Carousel.css";

export function CarouselItem(props) {
  return (
    <div className="carousel-item" style={{ width: props.width }}>
      {props.children}
    </div>
  );
}
function Carousel(props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  //This is function that takes photos and displays them
  //so it should depend on props which youll pass a list of photos and
  // it lines them up in a carousel
  // in the code below React.Children.map is used while you could also use
  // props.photos.map and acheive the same result but using the React API
  //The code below shows the difference
  //  var photo = null
  // photo.map(i => {return i}) // => VM370:1 Uncaught TypeError: Cannot read property 'map' of null
  // React.Children.map(photo, i => {return i;}) // return null
  // note props.children returns anything you pass inbetwwen  the opening and closing tags of the comoponent <Carousel> these constitiue the children </Carousel>

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ trasform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(props.children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
}
export default Carousel;
