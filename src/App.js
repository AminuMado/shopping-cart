import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";
import Checkout from "./components/Checkout/Checkout";

function App(props) {
  const [shoes, setShoes] = React.useState(data);
  const [activeShoe, setActiveShoe] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div>
      {/* <Landing /> */}
      <Navbar></Navbar>
      {/* <Shop
        shoes={shoes}
        activeShoe={activeShoe}
        setActiveShoe={setActiveShoe}
        cartItems={cartItems}
        setCartItems={setCartItems}
      /> */}
      <Checkout />
    </div>
  );
}

export default App;
