import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import PersonelOperations from "../pages/PersonelOperations";
import ZimmetOperations from "../pages/ZimmetOperations";
import PrivateRoutes from "./PrivateRoutes";
import sessionService from "../services/StorageService";
import { useDispatch, useSelector } from "react-redux";
import RoleAuthorization from "../pages/RoleAuthorization";
import LoginLogoutTrace from "../pages/LoginLogoutTrace";
import AMenusu from '../pages/AMenusu'
import BMenusu from '../pages/BMenusu'

function RouterConfig() {
  const { isAuthenticate } = useSelector((store) => store.app);
  const navigate = useNavigate();


  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
  } , [])


  return (
    <div>
      {isAuthenticate ? (
        <>
        <PrivateRoutes>
          <Routes>
            <Route
              path="/personel-operations"
              element={<PersonelOperations />}
            />
            <Route path="/zimmet-operations" element={<ZimmetOperations />} />
            <Route path="/profil" element={<Profile />} ></Route>
            <Route path="/role-authorization" element={<RoleAuthorization />} />
            <Route path="/login-logout-trace" element={<LoginLogoutTrace />} />
            <Route path="/a-menusu" element={<AMenusu />} />
            <Route path="/b-menusu" element={<BMenusu />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route path="*" element={<Dashboard/>}/>
          </Routes>
        </PrivateRoutes>
       
        </>
      ) : (
        <Routes>
          
           {["/login"].map((path , index)=>  <Route key={index} path={path} element={<LoginPage />} />)}
        </Routes>
      )}
    </div>
  );
}
export default RouterConfig;
