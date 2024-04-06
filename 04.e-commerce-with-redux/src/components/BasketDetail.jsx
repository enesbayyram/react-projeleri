import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateAmount,
  changeDrawerOpenClose,
  deleteProductFromBasket,
} from "../redux/slices/basketDetailSlice";

function BasketDetail() {
  const dispatch = useDispatch();

  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basketDetail
  );

  const deleteProduct = (id) => {
    dispatch(deleteProductFromBasket(id));
    dispatch(calculateAmount());
  };

  useEffect(() => {
    dispatch(calculateAmount());
  }, []);
  return (
    <div>
      <Drawer
        open={drawer}
        onClose={() => dispatch(changeDrawerOpenClose(false))}
        anchor="right"
      >
        <Stack sx={{ width: "600px", margin: "10px" }}>
          <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            SEPETİNİZ
            <hr style={{ border: "0.4px solid lightgrey" }} />
          </Typography>
          {products.length > 0 &&
            products.map((product, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "10px",
                  }}
                  src={product.image}
                  alt=""
                />

                <div style={{ width: "100%" }}>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "10px", fontWeight: "bold" }}
                  >
                    {product.title.substring(0, 60)}({product.count})
                  </Typography>
                  <Typography variant="body2">
                    {product.description.substring(0, 90)}
                  </Typography>
                  <div style={{ fontWeight: "bold" }}> {product.price} TL</div>
                </div>
                <Button
                  onClick={() => deleteProduct(product.id)}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  Sil
                </Button>
              </div>
            ))}
          <Typography variant="body1" sx={{ textAlign: "right" }}>
            Tutar : {totalAmount}
          </Typography>
        </Stack>
      </Drawer>
    </div>
  );
}

export default BasketDetail;
