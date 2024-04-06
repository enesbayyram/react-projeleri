import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import basketDetailSlice from "./slices/basketDetailSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    basketDetail: basketDetailSlice,
  },
});
