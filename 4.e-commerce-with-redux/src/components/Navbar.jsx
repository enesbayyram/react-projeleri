import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import { IconButton } from "@mui/material";
import { CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { changeDrawerOpenClose } from "../redux/slices/basketDetailSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(false);
  const { products } = useSelector((store) => store.basketDetail);

  useEffect(() => {
    const root = document.querySelector("#root");
    if (theme) {
      root.style.backgroundColor = "#4f4f4f";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  }, [theme]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "25px",
      }}
    >
      <div>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          LOGO
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          id="searchField"
          label="Bir şeyler arayın."
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton>
                <CiSearch />
              </IconButton>
            ),
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ cursor: "pointer" }}>
            {theme ? (
              <IoMoon
                onClick={() => setTheme(!theme)}
                size={24}
                style={{ margin: "0px 10px" }}
              />
            ) : (
              <CiLight
                onClick={() => setTheme(!theme)}
                size={26}
                style={{ margin: "0px 10px" }}
              />
            )}
          </div>
          <IconButton onClick={() => dispatch(changeDrawerOpenClose(true))}>
            <Badge badgeContent={products.length} color="primary">
              <SlBasket size={24} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
