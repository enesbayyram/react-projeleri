import React from "react";
import { useSelector } from "react-redux";

function BasketItem({ basketItem }) {
  return (
    <div
      style={{
        fontSize: "18px",
        fontFamily: "arial",
        fontWeight: "500",
      }}
    >
      {basketItem.title} X {basketItem.count}
    </div>
  );
}
export default BasketItem;
