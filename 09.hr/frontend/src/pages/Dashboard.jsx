import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";

function Dashboard({ children }) {
  const { isAuthenticate } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  return <Layout children={children} />;
}

export default Dashboard;
