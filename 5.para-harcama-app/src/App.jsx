import { useEffect, useState } from "react";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, fillState } from "./redux/productSlice";
import ProductItem from "./components/ProductItem";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import BasketItem from "./components/BasketItem";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { moneyFormat } from "./utils/helpers";

function App() {
  const dispatch = useDispatch();

  const { products, basket, totalAmount } = useSelector(
    (store) => store.product
  );
  console.log("basket", basket);

  const clear = () => {
    dispatch(clearBasket());
  };

  useEffect(() => {
    dispatch(fillState());
  }, []);

  return (
    <div className="container">
      <Header />
      <Container maxWidth="lg">
        <Stack
          className="products"
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "50px" }}
        >
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Stack>

        <Stack
          className="baskets"
          sx={{
            backgroundColor: "#fff",
            marginTop: "20px",
            border: "1px solid lightgrey",
            padding: "20px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "left",
              color: "black",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Alışveriş Detayları
          </Typography>
          {basket.length > 0 &&
            basket.map((basketItem) => (
              <BasketItem key={basketItem.id} basketItem={basketItem} />
            ))}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: "arial",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            <div> Toplam Tutar : ${moneyFormat(totalAmount)}</div>
            <div>
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                size="small"
                onClick={clear}
                color="inherit"
              >
                Sepeti Temizle
              </Button>
            </div>
          </div>
        </Stack>

        {/* <RouterConfig /> */}
      </Container>
    </div>
  );
}

export default App;
