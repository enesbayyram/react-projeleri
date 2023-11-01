import React from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import "../../css/Navbar.css";
function NavbarRight() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <TextField
        id="searchInput"
        className="search"
        label="Bir şeyler arayın.."
        variant="outlined"
        size="small"
        sx={{
          outline: "none",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <BsSearch style={{ color: "black" }} />
              </IconButton>
            </InputAdornment>
          ),
          style: {
            borderRadius: "50px",
            fontSize: "18px",
            backgroundColor: "#ebebeb",
          },
        }}
      />
      <Stack
        direction="row"
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <AiOutlineHeart size={25} />
        <Badge badgeContent={4} color="error">
          <SlBasket size={25} />
        </Badge>
      </Stack>
    </div>
  );
}

export default NavbarRight;
