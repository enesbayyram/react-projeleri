import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const navigate = useNavigate();
  return (
    <Card
      className="productCard"
      sx={{ width: 340, height: 480, margin: "20px" }}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <CardMedia
        sx={{ height: 200, padding: 1 }}
        image={product.image}
        title="green iguana"
      />
      <CardContent id="xx" style={{ height: "200px" }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title.substring(1, 80)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.substring(1, 100)}
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{ textAlign: "left", marginTop: "15px" }}
        >
          {product.price}
        </Typography>
      </CardContent>
      <Button
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        Detaya git
      </Button>
    </Card>
  );
}

export default ProductItem;
