import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import PersonelOperations from "../pages/PersonelOperations";
import ZimmetOperations from "../pages/ZimmetOperations";
import PrivateRoutes from "./PrivateRoutes";
import sessionService from "../services/StorageService";
import { useDispatch, useSelector } from "react-redux";

function RouterConfig() {
  const { isAuthenticate } = useSelector((store) => store.app);

  return (
    <div>
      {isAuthenticate ? (
        <PrivateRoutes>
          <Routes>
            <Route
              path="/personel-operations"
              element={<PersonelOperations />}
            />
            <Route path="/zimmet-operations" element={<ZimmetOperations />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Dashboard/>}/>
          </Routes>
        </PrivateRoutes>
      ) : (
        <Routes>
          {["/" , "/login"].map((path)=>  <Route path={path} element={<LoginPage />} />)}
        </Routes>
      )}
    </div>
  );
}
export default RouterConfig;
