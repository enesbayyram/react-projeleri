import React from "react";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import Layout from "../pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { menuList } = useSelector((store) => store.menu);

  const isAccessMenu = () => {
    console.log(menuList);
    let result = false;
    menuList.map((menu) => {
      if (menu.menuLink === window.location.pathname) {
        result = true;
      }
    });
    return result;
  };

  return (
    <>
      <Layout children={children} />
    </>
  );
}

export default PrivateRoutes;
