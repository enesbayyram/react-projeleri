import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Sorting({ setSorting }) {
  const options = [
    {
      type: "INCREMENT",
      label: "Artan",
    },
    {
      type: "DECREMENT",
      label: "Azalan",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "#fafbfc",
        padding: "10px",
      }}
    >
      <Autocomplete
        size="small"
        id="sorting"
        options={options}
        onChange={(e, newValue) => setSorting(newValue.type)}
        sx={{ width: 130 }}
        renderInput={(params) => <TextField {...params} label="Sıralayınız" />}
      />
    </div>
  );
}

export default Sorting;
