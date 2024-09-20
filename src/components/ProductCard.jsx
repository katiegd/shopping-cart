import "./ProductCard.css";
import heartEmpty from "../assets/heart-empty.svg";
import defaultImage from "../assets/27002.jpg";
import { useOutlet, useOutletContext } from "react-router-dom";

//Need to validate props
export default function ProductCard({
  product,
  setShowDetails,
  setProdDetails,
  formatPrice,
}) {
  const { addToCart } = useOutletContext();
  function limitCharacters(str) {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  }

  function showProdDetails() {
    setShowDetails(true);
    setProdDetails(product);
  }
  return (
    <>
      <div className="product-wrapper" onClick={showProdDetails}>
        <div className="product-img">
          <img
            src={product.image}
            className="prod-img"
            onError={(e) => (e.target.src = defaultImage)} //Shows default image if link is broken from API
          />
        </div>
        <div className="product-info">
          <div className="product-price-fav">
            <img src={heartEmpty} className="product-fav" />
            <p className="product-price">${formatPrice(product.price)}</p>
          </div>
          <div className="product-name">
            <p className="product-name">{limitCharacters(product.title)}</p>
          </div>
          <div className="buttons">
            <button
              className="btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
