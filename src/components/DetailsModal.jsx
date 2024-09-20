import "./DetailsModal.css";
import heartEmpty from "../assets/heart-empty.svg";

export default function DetailsModal({
  product,
  setShowDetails,
  formatPrice,
  inputNum,
  setInputNum,
  addToCart,
}) {
  function handleInputChange(e) {
    const target = e.target.value;

    setInputNum(target);
  }

  function incrementInput() {
    setInputNum(inputNum + 1);
  }

  function decrementInput() {
    setInputNum(inputNum - 1);
  }

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

              <div className="input-container">
                <button className="subtract-input" onClick={decrementInput}>
                  -
                </button>
                <input
                  type="number"
                  className="input-qty"
                  value={inputNum}
                  onChange={handleInputChange}
                  min="1"
                  max="100"
                  readOnly
                />
                <button className="add-input" onClick={incrementInput}>
                  +
                </button>
              </div>
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
