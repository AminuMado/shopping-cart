import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";

function App() {
  const [shoes, setShoes] = React.useState(data);
  const Shoe = shoes.map((shoe, index) => <Card shoe={shoe} key={index} />);
  return (
    <div>
      {/* <Landing /> */}
      <Navbar></Navbar>
      {Shoe}
    </div>
  );
}

export default App;
