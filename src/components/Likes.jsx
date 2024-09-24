import { useOutletContext } from "react-router-dom";
import "../components/CSS/Likes.css";
import ProductCard from "./ProductCard";

export default function Likes() {
  const { likes, formatPrice } = useOutletContext();
  return (
    <>
      <div className="main-likes-container">
        <p className="likes-title">Your Saved Items:</p>
        <div className="liked-list">
          {likes.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              formatPrice={formatPrice}
            />
          ))}
        </div>{" "}
      </div>
    </>
  );
}
