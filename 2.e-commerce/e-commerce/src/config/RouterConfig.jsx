import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />s{" "}
      </Routes>
    </div>
  );
}

export default RouterConfig;
