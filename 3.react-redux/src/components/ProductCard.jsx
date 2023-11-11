import React from "react";

function ProductCard({ product }) {
  const { name, price, url } = product;
  console.log(name, price, url);
  return <div>Product Card</div>;
}

export default ProductCard;
