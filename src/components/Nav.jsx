import "./nav.css";
import cart from "../assets/cart.svg";

export default function Navigation() {
  return (
    <>
      <div className="header nav">
        <div className="nav-container">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </div>
        <div className="cart-container">
          <a href="/cart" className="cart">
            <img src={cart} className="cart-img" />
          </a>
        </div>
      </div>
    </>
  );
}
