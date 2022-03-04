import Card from "./Card/Card";
import "./Shop.css";
function Shop(props) {
  const { shoes } = props;
  const Shoes = shoes.map((shoe, index) => <Card shoe={shoe} key={index} />);
  return <div className="shop-container">{Shoes}</div>;
}
export default Shop;
