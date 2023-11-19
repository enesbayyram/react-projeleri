import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../redux/slices/productSlice";
import { Button, Typography } from "@mui/material";
import { addProductToBasket } from "../redux/slices/basketDetailSlice";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

function ProductDetail() {
  const { productId } = useParams();
  const { product } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addProduct = () => {
    if (count == 0) {
      alert("Sepete eklemek için en az 1 adet almalısınız");
      return;
    }
    const newProduct = {
      id: product.id,
      price: product.price,
      title: product.title,
      description: product.description,
      image: product.image,
      count: count,
    };

    dispatch(addProductToBasket(newProduct));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <img
        src={product.image}
        alt=""
        style={{ width: "25%", marginRight: "20px" }}
      />
      <div
        style={{
          padding: "30px",
          border: "1px solid lightgrey",
          boxShadow: "0px 0px 20px 0px #888888",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          {product.title}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          Oran : {product.rating?.rate} Stok : {product.rating?.count}
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "5px" }}>
          Fiyat : {product.price}
        </Typography>

        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            onClick={increment}
            style={{ cursor: "pointer", fontSize: "30px" }}
          >
            +
          </div>
          <Typography variant="h5" sx={{ margin: "5px 25px" }}>
            {count}
          </Typography>
          <div
            onClick={decrement}
            style={{ cursor: "pointer", fontSize: "30px" }}
          >
            -
          </div>
        </div>

        <Button
          onClick={addProduct}
          variant="contained"
          size="small"
          sx={{ marginTop: "20px" }}
          color="success"
        >
          Sepete Ekle
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
