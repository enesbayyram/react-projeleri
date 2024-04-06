import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalPrice,
  fillProductsToState,
} from "../../redux/cardSlice";
import CardItem from "../basket/CardItem";
import Typography from "@mui/material/Typography";

function BasketDetails() {
  const dispatch = useDispatch();

  const { cards, totalPrice } = useSelector((store) => store.cardSlice);

  useEffect(() => {
    dispatch(fillProductsToState());
    dispatch(calculateTotalPrice());
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
      <div>
        <Typography
          sx={{
            marginTop: "25px",
            height: "100vh",
            display: "flex",
            justifyContent: "flex-end",
          }}
          variant="h5"
        >
          Toplam Tutar : <span style={{ color: "red" }}> {totalPrice} ₺</span>
        </Typography>
      </div>
    </div>
  );
}

export default BasketDetails;
