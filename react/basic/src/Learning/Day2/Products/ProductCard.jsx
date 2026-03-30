import React from "react";
import { Link } from "react-router-dom";
import "./MapProducts.css";

const ProductCard = ({ product, value, addToCart }) => {
  // const { product } = props;
  return (
    <div>
      <Link to={`/prod/${product.id}`} className="sample-link">
        <div className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-details">
            <h3 className="title">{product.title}</h3>

            <div className="rating">
              <span className="rating-badge">{product.rating} </span>
              <span className="reviews">
                {product.reviews} Ratings & {product.reviewCount} Reviews
              </span>
            </div>

            <ul className="features">
              {product.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="price-section">
            <h2 className="price">₹{product.price}</h2>

            <p className="old-price">₹{product.oldPrice}</p>
            <p className="discount">{product.discount}% off</p>

            <p className="exchange">{product.exchange}</p>
            <p className="bank">{product.bankOffer}</p>

            {product.assured && <div className="assured"> Assured</div>}
          </div>
        </div>
      </Link>
      <div className="cart">
        <p>Cart: {value}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
