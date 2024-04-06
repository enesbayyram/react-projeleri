import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { calculateBasket } from "../redux/productSlice";
import { moneyFormat } from "../utils/helpers";
function Header() {
  const { money, basket, totalAmount } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [basket]);
  return (
    <div
      style={{
        backgroundColor: "#58c473",
        padding: "20px",
        position: "sticky",
        top: "0",
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontSize: "24px", fontWeight: "300" }}
      >
        {totalAmount > 0 && (
          <>
            {" "}
            Harcayacak{" "}
            <span style={{ fontWeight: "bold" }}>
              {moneyFormat(money - totalAmount)}
            </span>{" "}
            $ kaldı.{" "}
          </>
        )}
        {totalAmount == 0 && (
          <>
            Şuanda
            <span
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                margin: "0px 5px",
                letterSpacing: "1px",
              }}
            >
              ${moneyFormat(money)}
            </span>
            paranız bulunmaktadır.
          </>
        )}
        {money - totalAmount == 0 && <>Paranız bitti fakir </>}
      </Typography>
    </div>
  );
}

export default Header;
