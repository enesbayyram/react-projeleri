import React, { useState } from "react";
import ProductModal from "../components/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Product() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  return (
    <div>
      <ProductModal />
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Product;
