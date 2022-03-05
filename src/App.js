import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [shoes, setShoes] = React.useState(data);
  const [activeShoe, setActiveShoe] = React.useState(false);

  return (
    <div>
      {/* <Landing /> */}
      <Navbar></Navbar>
      {/* <Shop
        shoes={shoes}
        activeShoe={activeShoe}
        setActiveShoe={setActiveShoe}
      /> */}
      <Carousel></Carousel>
    </div>
  );
}

export default App;
