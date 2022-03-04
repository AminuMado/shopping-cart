import Card from "./Card/Card";
import "./Shop.css";
function Shop(props) {
  const { shoes } = props;
  const Shoes = shoes.map((shoe, index) => <Card shoe={shoe} key={index} />);
  return (
    <div className="shop-container">
      <h1 className="title"> Jordan 1s Retro Collection</h1>
      <div className="shoes-container">{Shoes}</div>
    </div>
  );
}
export default Shop;
