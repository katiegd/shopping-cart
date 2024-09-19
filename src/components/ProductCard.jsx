import "./ProductCard.css";
import heartEmpty from "../assets/heart-empty.svg";
export default function ProductCard({ product }) {
  function formatPrice(price) {
    return Number(price).toFixed(2);
  }

  function limitCharacters(str) {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  }
  return (
    <>
      <div className="product-wrapper">
        <div className="product-img">
          <img src={product.images[0]} className="prod-img" />
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
            <button className="btn-secondary">View Details</button>
            <button className="btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
