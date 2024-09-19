import "./Shop.css";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const slicedProducts = products.slice(0, 29);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);

        const timeOut = setTimeout(() => {
          setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeOut);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <p>Loading products...</p>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="shop-container">
            <div className="shop-categories">Categories</div>
            <div className="shop-products">
              {slicedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
