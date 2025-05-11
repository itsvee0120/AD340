import React from "react";
import products from "../data/products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Product Catalog</h2>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
