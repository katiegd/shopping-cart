import { Link } from "react-router-dom";
import "../components/CSS/nav.css";
import jacket from "../assets/jacket.svg";
import Cart from "./Cart";
import heartEmpty from "../assets/heart-empty.svg";
import heartFull from "../assets/heart-full.svg";

export default function Navigation({
  cart,
  getTotalQuantity,
  inputNum,
  setInputNum,
  addToCart,
  removeFromCart,
  clearCart,
  formatPrice,
  calculateTotal,
  limitCharacters,
  incrementCart,
  decrementCart,
  likes,
}) {
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
        <div className="cart-likes-container">
          <Link to="likes">
            <div className="heart-container">
              <img src={likes.length > 0 ? heartFull : heartEmpty} />
            </div>
          </Link>
          <Cart
            cart={cart}
            total={total}
            inputNum={inputNum}
            setInputNum={setInputNum}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            formatPrice={formatPrice}
            calculateTotal={calculateTotal}
            limitCharacters={limitCharacters}
            incrementCart={incrementCart}
            decrementCart={decrementCart}
          />
        </div>
      </div>
    </>
  );
}
