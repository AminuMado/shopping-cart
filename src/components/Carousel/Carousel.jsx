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
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(props.children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          disabled={activeIndex >= numberOfChildren - 1 ? true : false}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
        <button
          disabled={activeIndex <= 0 ? true : false}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <div className="container">
          <div className="steps">
            {React.Children.map(props.children, (child, index) => {
              return (
                <div
                  className={index === activeIndex ? "step active" : "step"}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
