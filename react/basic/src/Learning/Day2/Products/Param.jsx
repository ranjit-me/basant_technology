import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./product";

function Param() {
  const { prodId } = useParams();

  // Convert prodId (string) → number
  const product = products.find((item) => item.id === Number(prodId));

  // If product not found
  if (!product) {
    return <h1>Product Not Found ❌</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      {/* Handle image OR video */}
      {product.image.endsWith(".mp4") ? (
        <video src={product.image} autoPlay muted loop width="300" />
      ) : (
        <img src={product.image} alt={product.title} width="300" />
      )}

      <h2>Price: ₹{product.price}</h2>
      <p>Old Price: ₹{product.oldPrice}</p>
      <p>Discount: {product.discount}%</p>

      <h3>Features:</h3>
      <ul>
        {product.features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>{product.exchange}</p>
      <p>{product.bankOffer}</p>

      {product.assured && <p>✔ Assured Product</p>}
    </div>
  );
}

export default Param;
