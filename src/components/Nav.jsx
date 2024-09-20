import { Link } from "react-router-dom";
import "./nav.css";
import jacket from "../assets/jacket.svg";
import Cart from "./Cart";

export default function Navigation({ cart, getTotalQuantity }) {
  const total = getTotalQuantity();
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
          <Cart cart={cart} total={total} />
        </div>
      </div>
    </>
  );
}
