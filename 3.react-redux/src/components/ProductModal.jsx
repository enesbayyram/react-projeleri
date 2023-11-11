import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changeModalStatus } from "../redux/modalSlice";
import { addNewProduct } from "../redux/productSlice";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ProductModal() {
  const dispatch = useDispatch();
  const { modal } = useSelector((store) => store.modal);
  const { products } = useSelector((store) => store.product);

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const handleAddProduct = () => {
    dispatch(addNewProduct(productInfo));
    dispatch(changeModalStatus());
    clearInputs();
  };

  const clearInputs = () => {
    setProductInfo({
      name: "",
      price: "",
      url: "",
    });
  };

  const handleClose = () => {
    dispatch(changeModalStatus());
  };

  const onChangeFunc = (e) => {
    if (e.target.name == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ marginBottom: "15px" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Ürün Oluştur
          </Typography>

          <TextField
            id="name"
            name="name"
            onChange={(e) => onChangeFunc(e)}
            variant="outlined"
            fullWidth
            placeholder="Ürün İsmini giriniz"
            size="small"
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            id="price"
            name="price"
            onChange={(e) => onChangeFunc(e)}
            variant="outlined"
            fullWidth
            placeholder="Fiyat giriniz"
            size="small"
          />

          <input
            id="url"
            name="url"
            onChange={(e) => onChangeFunc(e)}
            type="file"
            style={{ marginTop: "15px" }}
          />

          <Button
            onClick={handleAddProduct}
            sx={{ marginTop: "15px" }}
            fullWidth
            size="small"
            variant="contained"
          >
            Ürün Ekle
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductModal;
