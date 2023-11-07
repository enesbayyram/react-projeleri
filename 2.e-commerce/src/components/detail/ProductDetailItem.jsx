import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Button } from "@mui/material";

function ProductDetailItem({ productDetail }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (productDetail.rating?.count > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <img src={productDetail.image} alt="" style={{ width: "400px" }} />
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8}>
        <div>
          <Typography variant="h3" color="text.secondary">
            {productDetail.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: "20px", marginTop: "25px" }}
          >
            {productDetail.description}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: "20px", marginTop: "25px" }}
          >
            Oran : {productDetail.rating?.rate}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: "20px", marginTop: "25px" }}
          >
            Adet : {productDetail.rating?.count}
          </Typography>

          <Typography
            variant="h2"
            sx={{ color: "black", marginTop: "20px", fontWeight: "550" }}
          >
            {productDetail.price} TL
          </Typography>

          <div style={{ fontSize: "35px", display: "flex", margin: "10px" }}>
            <div
              onClick={() => decrement()}
              style={{ marginRight: "15px" }}
              className="hover"
            >
              -
            </div>
            <div className="hover">{quantity}</div>
            <div
              onClick={() => increment()}
              style={{ marginLeft: "15px" }}
              className="hover"
            >
              +
            </div>
          </div>
          <Button
            size="small"
            sx={{ marginTop: "10px" }}
            color="primary"
            variant="contained"
          >
            Sepete Ekle
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProductDetailItem;
