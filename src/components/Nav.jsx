import { Link } from "react-router-dom";
import "./nav.css";
import cart from "../assets/cart.svg";
import jacket from "../assets/jacket.svg";

export default function Navigation() {
  return (
    <>
      <div className="header nav">
        <div className="nav-container">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={jacket} width="60px" />
              <p className="site-name">Jaquette</p>
            </Link>
          </div>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
        </div>
        <div className="cart-container">
          <Link to="cart">
            <img src={cart} className="cart-img" />
          </Link>
        </div>
      </div>
    </>
  );
}
