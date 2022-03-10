import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ items, deleteCartItem, changeQty }) {
  //   const { goBack } = useNavigate();
  //   const cartItems = items.map((item) => (
  //     <CartItem
  //       key={item.id}
  //       {...item}
  //       deleteCartItem={deleteCartItem}
  //       changeQty={changeQty}
  //     />
  //   ));
  //   const cartTotal = items
  //     .map((item) => item.price * item.qty)
  //     .reduce((a, c) => a + c, 0)
  //     .toFixed(2);
  //   return (
  //     <div className={styles.root}>
  //       <h1>MY SHOPPING CART</h1>
  //       {items.length > 0 ? (
  //         <div className={styles["cart-container"]}>
  //           <div className={styles["cart-items"]}>{cartItems}</div>
  //           <div className={styles["cart-total"]}>
  //             <button className={styles["go-back-btn"]} onClick={goBack}>
  //               <BsChevronLeft /> Go Back
  //             </button>
  //             <h2 className={styles["total-text"]}>
  //               <span className={styles["total-span"]}>Total</span> {cartTotal}{" "}
  //               USD
  //             </h2>
  //             <Link to="/coming-soon">
  //               <button className={styles["black-btn"]}>Continue</button>
  //             </Link>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className={styles["empty-cart-container"]}>
  //           <h2 className={styles["empty-cart-text"]}>- Your cart is empty -</h2>
  //         </div>
  //       )}
  //     </div>
  //   );
}

export default Cart;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './CartItem.module.css';

// function CartItem({
//   id,
//   itemName,
//   imageId,
//   price,
//   qty,
//   deleteCartItem,
//   changeQty,
// }) {
//   const handleDelete = () => deleteCartItem(id);
//   const handleIncrease = () => changeQty(id, 1);
//   const handleDecrease = () => changeQty(id, -1);

//   return (
//     <div className={styles.root}>
//       <img
//         className={styles['responsive-image']}
//         src={`https://source.unsplash.com/${imageId}/300x350`}
//         alt={id}
//       />
//       <div className={styles.info}>
//         <Link to={`/shop/${id}`}>{itemName}</Link>
//         <p>{price.toFixed(2)} USD</p>

//         <div className={styles['qty-btns']}>
//           <button onClick={handleDecrease} disabled={qty < 2}>
//             -
//           </button>
//           <span>{qty}</span>
//           <button onClick={handleIncrease}>+</button>
//         </div>

//         <button className={styles['delete-btn']} onClick={handleDelete}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartItem;
