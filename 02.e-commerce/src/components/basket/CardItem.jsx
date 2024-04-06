import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { calculateTotalPrice, removeBasketCard } from "../../redux/cardSlice";

function CardItem({ card }) {
  const { id, title, description, price, count, image } = card;

  const dispatch = useDispatch();

  const deleteProductFromBasket = (productId) => {
    dispatch(removeBasketCard(productId));
    dispatch(calculateTotalPrice());
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "270px" }}>
        <img
          src={image}
          width={250}
          height={250}
          alt="ürün bulunamadı"
          style={{ margin: "20px 0px" }}
        />
      </div>

      <div style={{ marginLeft: "30px", width: "100%" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography sx={{ marginTop: "15px" }} variant="h4">
          {price} ₺
        </Typography>
        <Typography sx={{ marginTop: "15px" }} variant="h6">
          {count} adet
        </Typography>
        <Button
          onClick={() => deleteProductFromBasket(id)}
          size="small"
          variant="contained"
          color="error"
          sx={{ marginTop: "25px" }}
        >
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default CardItem;
