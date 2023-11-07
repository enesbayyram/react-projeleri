import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../components/detail/ProductDetail";

function RouteConfig() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default RouteConfig;
