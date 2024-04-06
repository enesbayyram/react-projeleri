import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import NotFoundPage from "../config/NotFoundPage";

function RouterConfig() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail/:productId" element={<ProductDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RouterConfig;
