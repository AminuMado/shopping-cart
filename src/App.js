import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import data from "./data";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Landing from "./components/Landing/Landing";
import Details from "./components/Shop/Details/Details";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const addToCart = (newItem) => {
    // check if already in cart
    const alreadyInCart = cartItems
      .map((cartItem) => cartItem.id)
      .includes(newItem.id);
    // if in cart add 1 to quantity
    if (alreadyInCart) {
      changeQuantity(newItem.id, 1);
    } else {
      // if not add complete item
      setCartItems([...cartItems, newItem]);
    }
  };
  const clearCartItems = () => {
    setCartItems([]);
  };
  const changeQuantity = (id, count) =>
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, Quantity: item.Quantity + count } : item
      )
    );
  const findItem = (id) => data.find((item) => item.id === id);
  const deleteCartItem = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  const cartItemsQuantity = cartItems.reduce(
    (acc, cur) => acc + cur.Quantity,
    0
  );

  return (
    <HashRouter basename="/">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/shop"
            element={
              <>
                <Navbar cartItemsQuantity={cartItemsQuantity} />{" "}
                <Shop items={data} />
              </>
            }
          />
          <Route
            path="/shop/:id"
            element={
              <>
                <Navbar cartItemsQuantity={cartItemsQuantity} />{" "}
                <Details findItem={findItem} addToCart={addToCart} />
              </>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <>
                <Navbar cartItemsQuantity={cartItemsQuantity} />{" "}
                <Cart
                  items={cartItems}
                  deleteCartItem={deleteCartItem}
                  changeQuantity={changeQuantity}
                  clearCartItems={clearCartItems}
                />
              </>
            }
          />
        </Routes>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
