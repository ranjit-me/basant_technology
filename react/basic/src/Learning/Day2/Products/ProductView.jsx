import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./product";

const ProductView = () => {
  const [cart, setCartCount] = useState({});

  const addToCart = (product) => {
    setCartCount((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));

    console.log("Added:", product);
  };
  return (
    <div>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          value={cart[item.id] || 0}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductView;
