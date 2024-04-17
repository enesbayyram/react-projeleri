import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const { isAuthenticate } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
