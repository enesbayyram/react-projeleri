import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../redux/slices/basketDetailSlice";

function ProductCard({ product }) {
  const { id, title, image, description, price, rating, category } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addProduct = () => {
    const newProduct = {
      id: id,
      price: price,
      title: title,
      description: description,
      image: image,
      count: 1,
    };
    dispatch(addProductToBasket(newProduct));
  };
  return (
    <Card
      sx={{
        width: 350,
        height: 550,
        margin: "10px",
        boxShadow: "4px 4px 20px 0px #888888",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: "290px", width: "240px" }}
          image={image}
          onClick={() => navigate(`/detail/${id}`)}
        />
        <CardContent sx={{ height: "130px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {title.substring(0, 41)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substring(0, 75)}
          </Typography>
        </CardContent>
        <CardActions sx={{ width: "75%" }}>
          <Button
            onClick={addProduct}
            size="small"
            variant="contained"
            fullWidth
          >
            SEPETE EKLE
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default ProductCard;
