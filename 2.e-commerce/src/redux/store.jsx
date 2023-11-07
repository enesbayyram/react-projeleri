import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    categorySlice: categorySlice,
    productSlice: productSlice,
  },
});
