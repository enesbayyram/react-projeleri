import React from "react";
import PostList from "./post/PostList";
import Container from "@mui/material/Container";

function Home() {
  return (
    <Container
    maxWidth="md"
      sx={{
        backgroundColor: "#f0f5ff",
        marginTop: "66px",
      }} >
      <PostList/>
    </Container>
  );
}

export default Home;
