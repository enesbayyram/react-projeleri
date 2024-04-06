import React, { useEffect } from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import { useDispatch } from "react-redux";
import { fillProductsToState } from "../../redux/cardSlice";

function Navbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillProductsToState());
  }, [dispatch]);

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
