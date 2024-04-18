import React from "react";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Sidebar children={children} />
    </div>
  );
}

export default Layout;
