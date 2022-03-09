import "./Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="glitch" data-text="JORDANS">
          JORDANS
        </div>
        <div className="glow">JORDANS</div>
        <p className="subtitle">RETRO SHOP</p>
      </div>
      <Link to="/shop">
        <div className="wrapper">
          <button>
            <span>SHOP NOW</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
