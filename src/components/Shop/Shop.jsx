import Card from "./Card/Card";
import Details from "./Details/Details";
import "./Shop.css";
function Shop(props) {
  const { shoes, activeShoe, setActiveShoe, cartItems, setCartItems } = props;
  const Shoes = shoes.map((shoe, index) => (
    <Card shoe={shoe} key={index} handleClick={setActiveShoe} />
  ));
  return (
    <div className="shop-container">
      {activeShoe && (
        <Details
          activeShoe={activeShoe}
          setActiveShoe={setActiveShoe}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      <h1 className="title"> Jordan 1s Retro Collection</h1>
      <div className="shoes-container">{Shoes}</div>
    </div>
  );
}
export default Shop;
