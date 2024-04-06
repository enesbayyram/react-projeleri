import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../redux/productSlice";

function Basket() {
  const { basket, basketTotalAmount } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  // const sortedBasket = [...basket.sort((a, b) => (a.price > b.price ? 1 : -1))];
  // console.log(sortedBasket);

  useEffect(() => {
    dispatch(calculate());
  }, [basket]);

  return (
    <Card sx={{ width: 330 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SEPETİM
        </Typography>
        <Stack>
          {basket &&
            basket.map((item) => (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <img width={120} src={item.image} alt="" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.title} x {item.count} = ${" "}
                  {(item.price * item.count).toLocaleString()}
                </Typography>
              </Stack>
            ))}
        </Stack>

        {basket.length > 0 && (
          <Typography
            sx={{ fontSize: 14, marginTop: "25px" }}
            color="text.secondary"
            gutterBottom
          >
            Toplam Tutar : {basketTotalAmount.toLocaleString()}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default Basket;
