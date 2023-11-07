import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "25px",
      }}
    >
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
}

export default Navbar;
