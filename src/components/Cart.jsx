import { useState } from "react";
import cartIcon from "../assets/cart.svg";

export default function Cart({ cart, total }) {
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  return (
    <>
      <div className="cart-wrapper">
        <img
          src={cartIcon}
          className="cart-img"
          onClick={() => setShowCartDrawer(true)}
        />
        {total > 0 ? <p className="cart-total">{total}</p> : ""}
      </div>

      {showCartDrawer && <div className="cartDrawer">Hello</div>}
    </>
  );
}
