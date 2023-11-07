import React from "react";
import TextField from "@mui/material/TextField";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { Button, InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import "../../css/NavbarRight.css";

function NavbarRight() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        sx={{ marginRight: "20px" }}
        size="small"
        id="searchField"
        label="Bir şeyler arayın."
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <AiOutlineSearch />
              </IconButton>
            </InputAdornment>
          ),
          style: {
            borderRadius: "10px",
            padding: "2px",
          },
        }}
      />
      <div className="iconsDiv">
        <IconButton>
          <AiOutlineHeart size={27} style={{ marginRight: "2px" }} />
        </IconButton>

        <IconButton>
          <Badge badgeContent={4} color="primary" style={{ marginLeft: "2px" }}>
            <SlBasket size={27} />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
}

export default NavbarRight;
