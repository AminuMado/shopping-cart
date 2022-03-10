import React from "react";
import CartItem from "./Cart/Cart/CartItem";
import Summary from "./Cart/Summary/Summary";
import emptyCart_Src from "../../Assets/Images/Empty_Cart.gif";
import { useNavigate } from "react-router-dom";

function Cart({ items, deleteCartItem, changeQuantity }) {
  const { goBack } = useNavigate();
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
      <div>
        <h1>My Cart</h1>
        <div className="checkout-shoes-container">{cartItems}</div>
      </div>
      <Summary cartItems={cartItems} />
      <span className="go-back" onClick={goBack}></span>
    </div>
  ) : (
    <div className="empty-cart-container">
      <img src={emptyCart_Src} alt="empty cart"></img>
      <span className="go-back" onClick={goBack}></span>
    </div>
  );
}

export default Cart;
