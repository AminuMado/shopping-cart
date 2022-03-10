import "./CartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function CartItem({
  id,
  Name,
  Src,
  Price,
  Quantity,
  deleteCartItem,
  changeQuantity,
}) {
  const handleDelete = () => deleteCartItem(id);
  const handleIncrease = () => changeQuantity(id, 1);
  const handleDecrease = () => changeQuantity(id, -1);
  return (
    <div className="cart-item-container">
      <img src={Src} alt="Jordans"></img>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{Name}</h3>{" "}
        <p className="cart-item-quantity">
          {`Quantity: ${Quantity}`}
          <div className="quantity-btns-container">
            <button onClick={handleDecrease} disabled={Quantity < 2}>
              -
            </button>
            <button onClick={handleIncrease}>+</button>
          </div>
        </p>
        <p className="cart-item-price">{`Price: ${Price.toFixed(
          2
        )} VAT included`}</p>
      </div>
      <FontAwesomeIcon
        className="trash-icon"
        icon={faTrashCan}
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
export default CartItem;
