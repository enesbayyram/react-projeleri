import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import User from "../User";
import NotFound from "../router/NotFound";
import Auth from "../Auth";

function RoutesConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/users/:userId"
          element={localStorage.getItem("userId") ? <User /> : <Auth />}
        ></Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default RoutesConfig;
