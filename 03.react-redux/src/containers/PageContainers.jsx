import React from "react";
import Container from "@mui/material/Container";

function PageContainers({ children }) {
  return <Container maxWidth="xl">{children}</Container>;
}

export default PageContainers;
