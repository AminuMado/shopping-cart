import Card from "./Card/Card";

function Shop(props) {
  const { shoes } = props;
  const Shoes = shoes.map((shoe, index) => <Card shoe={shoe} key={index} />);
  return <div>{Shoes}</div>;
}
export default Shop;
