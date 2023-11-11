import React, { useState } from "react";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { BsSearchHeart } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { changeModalStatus } from "../redux/modalSlice";

function Navbar() {
  const dispatch = useDispatch();

  const options = [
    { label: "Artan", value: "asc" },
    { label: "Azalan", value: "desc" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        backgroundColor: "#e6e9ed",
      }}
    >
      <div>
        <Typography variant="h5">React & Redux</Typography>
      </div>

      <Stack
        direction="row"
        spacing={3}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Autocomplete
          size="small"
          options={options}
          sx={{
            width: 150,
          }}
          renderInput={(params) => <TextField {...params} label="Seçiniz." />}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "50px",
          }}
        >
          <TextField
            id="searchField"
            label="Arama yapınız."
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <BsSearchHeart size={28} />
                </IconButton>
              ),
              style: {
                padding: "3px",
              },
            }}
          />

          <IconButton
            onClick={() => dispatch(changeModalStatus())}
            style={{ marginLeft: "10px", marginTop: "5px" }}
          >
            <IoMdAddCircle size={30} />
          </IconButton>
        </div>
      </Stack>
    </div>
  );
}

export default Navbar;
