import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";
import About from "./components/About/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
