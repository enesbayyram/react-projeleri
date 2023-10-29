import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Popup({ isOpen, duration, message, level, onCLose }) {
  const handleClose = () => {
    onCLose({ type: "success", isOpen: false });
  };
  return (
    <Snackbar
      onClose={handleClose}
      open={isOpen}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity={level} sx={{ width: "100%" }} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Popup;
