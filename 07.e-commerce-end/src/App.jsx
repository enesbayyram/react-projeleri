import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Product from "./components/Product";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Basket from "./components/Basket";

function App() {
  const { products, basket } = useSelector((store) => store.product);
  console.log(basket);
  return (
    <div>
      <Header />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Stack direction="row" gap={2} flexWrap="wrap" width="50%">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </Stack>
        <Basket />
      </Stack>
    </div>
  );
}

export default App;
