import React from "react";
import Container from "@mui/material/Container";

function PagesContainer({ children }) {
  return <Container maxWidth="xl">{children}</Container>;
}

export default PagesContainer;
