import React from "react";
import CartItem from "./Cart/CartItem";
import Summary from "./Summary/Summary";
import emptyCart_Src from "../../Assets/Images/Empty_Cart.gif";
import "./Cart.css";

function Cart({ items, deleteCartItem, changeQuantity, clearCartItems }) {
  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      deleteCartItem={deleteCartItem}
      changeQuantity={changeQuantity}
    />
  ));
  const cartLength = items.length;
  return cartLength > 0 ? (
    <div className="checkout-container">
      <h1>My Cart</h1>
      <div className="cart-shoes-container">{cartItems}</div>
      <Summary cartItems={items} clearCartItems={clearCartItems} />
    </div>
  ) : (
    <div className="empty-cart-container">
      <img src={emptyCart_Src} alt="empty cart"></img>
    </div>
  );
}

export default Cart;
