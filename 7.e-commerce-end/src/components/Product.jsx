import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/productSlice";

function Product({ product }) {
  const { id, title, price, image, count } = product;
  const dispatch = useDispatch();
  const { basket } = useSelector((store) => store.product);

  const handleAddProduct = () => {
    const payload = {
      id,
      title,
      price,
      image,
      count: 1,
    };
    dispatch(addProduct(payload));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(id));
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="green iguana"
        sx={{ padding: "2em 1em 0 1em", objectFit: "contain" }}
      />
      <br />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          color="success"
          sx={{ height: "30px" }}
          onClick={handleAddProduct}
        >
          <span style={{ fontSize: "18px" }}> +</span>
        </Button>
        <span style={{ fontSize: "25px" }}>0</span>
        <Button
          variant="contained"
          size="small"
          color="inherit"
          sx={{ height: "30px" }}
          onClick={handleRemoveProduct}
        >
          <span style={{ fontSize: "18px" }}> -</span>
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
