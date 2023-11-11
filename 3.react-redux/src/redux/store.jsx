import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    product: productSlice,
  },
});
