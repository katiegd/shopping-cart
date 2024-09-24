import "../components/CSS/DetailsModal.css";
import heartEmpty from "../assets/heart-empty.svg";
import QuantityInput from "./QuantityInput";

export default function DetailsModal({
  product,
  setShowDetails,
  formatPrice,
  addToCart,
  inputNum,
  setInputNum,
}) {
  return (
    <>
      {" "}
      <div className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              setShowDetails(false);
              setInputNum(1);
            }}
          >
            &times;
          </span>
          <div className="product-details">
            <div className="img-container">
              <img src={product.image} className="product-img" />
            </div>
            <div className="details-container">
              <div className="title-price">
                <p className="product-title">{product.title}</p>
                <p className="mod-product-price">
                  ${formatPrice(product.price)}
                </p>
                <img src={heartEmpty} className="product-fav" />
              </div>
              <p className="mod-product-desc">{product.description}</p>

              <QuantityInput setInputNum={setInputNum} inputNum={inputNum} />
              <button
                className="btn-primary"
                onClick={() => {
                  addToCart(product, inputNum);
                  setShowDetails(false);
                  setInputNum(1);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
