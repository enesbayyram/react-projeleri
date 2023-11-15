import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productSlice";
import { changeModalStatus } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { id, name, price, url } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openEdit, setOpenEdit] = useState(false);

  const handleUpdateProduct = () => {
    dispatch(changeModalStatus());
    setOpenEdit(false);
    navigate(`?update=${id}`);
  };

  return (
    <div
      style={{
        width: "250px",
        height: "250px",
        margin: "0px 10px",
        position: "relative",
      }}
    >
      <img src={url} alt="" style={{ width: "100%", height: "100%" }} />

      <div
        style={{
          textAlign: "left",
          border: "1px solid lightgrey",
          padding: "4px",
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h4">{price} £</Typography>
      </div>

      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          color: "#fff",
          backgroundColor: "black",
          cursor: "pointer",
        }}
        onClick={() => setOpenEdit(!openEdit)}
      >
        <HiOutlineDotsVertical size={28} />
      </div>

      {openEdit && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            width: "150px",
            position: "absolute",
            top: "35px",
            right: "0",
          }}
        >
          <Button
            size="small"
            fullWidth
            variant="contained"
            color="error"
            sx={{ margin: "2px 0px" }}
            onClick={() => dispatch(deleteProduct(id))}
          >
            Sil
          </Button>
          <Button
            onClick={handleUpdateProduct}
            size="small"
            fullWidth
            variant="contained"
          >
            Güncelle
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
