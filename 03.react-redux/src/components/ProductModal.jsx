import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changeModalStatus } from "../redux/modalSlice";
import { addNewProduct, updateProduct } from "../redux/productSlice";
import TextField from "@mui/material/TextField";
import { useLocation, useNavigate } from "react-router-dom";

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

  const location = useLocation();
  const navigate = useNavigate();

  let locationValue = location.search.split("=")[1];

  useEffect(() => {
    if (locationValue) {
      //update etmek istiyor demektir
      setProductInfo(products.find((product) => product.id == locationValue));
    }
  }, [locationValue]);

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const handleAddProduct = () => {
    dispatch(addNewProduct({ ...productInfo, id: products.length + 1 }));
    dispatch(changeModalStatus());
    clearInputs();
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct({ ...productInfo, id: locationValue }));
    dispatch(changeModalStatus());
    navigate("/");
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
            {locationValue ? "Ürün Güncelle" : " Ürün Oluştur"}
          </Typography>

          <TextField
            id="name"
            name="name"
            value={productInfo.name}
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
            value={productInfo.price}
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
            onClick={locationValue ? handleUpdateProduct : handleAddProduct}
            sx={{ marginTop: "15px" }}
            fullWidth
            size="small"
            variant="contained"
          >
            {locationValue ? "Ürün Güncelle" : " Ürün Ekle"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductModal;
