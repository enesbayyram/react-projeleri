import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moneyFormat } from "../utils/helpers";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";

import {
  addBasket,
  calculateBasket,
  removeBasket,
} from "../redux/productSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const { id, title, price, image } = product;
  const { basket, totalAmount, money } = useSelector((store) => store.product);
  const currentProduct = basket.find((item) => item.id == id);

  const buy = () => {
    const request = {
      id,
      title,
      price,
      count: 1,
    };
    dispatch(addBasket(request));
  };

  const sell = () => {
    dispatch(removeBasket(product));
  };

  return (
    <Card sx={{ minWidth: "25%" }}>
      <CardActionArea sx={{ padding: "0px" }}>
        <CardMedia
          component="img"
          height="230"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left", color: "green", fontSize: "23px" }}
          >
            $ {moneyFormat(price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <hr style={{ border: "0.1px solid lightgrey" }} />
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          disabled={!currentProduct}
          sx={{ textTransform: "none", width: "120px" }}
          onClick={sell}
          variant="contained"
          size="small"
        >
          Sat
        </Button>
        <span
          style={{
            fontSize: "25px",
            margin: "10px",
          }}
        >
          {(currentProduct && currentProduct.count) || 0}
        </span>
        <Button
          sx={{ textTransform: "none", width: "120px" }}
          disabled={!(money - totalAmount >= product.price)}
          onClick={buy}
          variant="contained"
          size="small"
          color="success"
        >
          Satın Al
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
