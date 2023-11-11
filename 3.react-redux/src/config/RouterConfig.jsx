import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../pages/Product";

function RouterConfig() {
  return (
    <Routes>
      <Route exact path="/" element={<Product />} />
    </Routes>
  );
}

export default RouterConfig;
