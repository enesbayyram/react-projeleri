import React from "react";
import Container from "@mui/material/Container";

function TodoContainer({ children }) {
  return <Container maxWidth="sm">{children}</Container>;
}

export default TodoContainer;
