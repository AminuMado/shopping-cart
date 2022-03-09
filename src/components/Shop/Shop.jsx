import Card from "./Card/Card";
import "./Shop.css";
function Shop({ items }) {
  const Shoes = items.map((shoe, index) => <Card shoe={shoe} key={index} />);
  return (
    <div className="shop-container">
      <h1 className="title"> Jordan 1s Retro Collection</h1>
      <div className="shoes-container">{Shoes}</div>
    </div>
  );
}
export default Shop;
