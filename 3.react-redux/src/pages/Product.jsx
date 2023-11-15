import React, { useState } from "react";
import ProductModal from "../components/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Product() {
  const { products, keyword } = useSelector((store) => store.product);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "20px 5px",
      }}
    >
      <ProductModal />
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Product;
