import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";
import Checkout from "./components/Checkout/Checkout";

function App(props) {
  const shoes = data;
  const [activeShoe, setActiveShoe] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div>
      {/* <Landing /> */}
      <Navbar cartItems={cartItems}></Navbar>
      <Shop
        shoes={shoes}
        activeShoe={activeShoe}
        setActiveShoe={setActiveShoe}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Checkout cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default App;
