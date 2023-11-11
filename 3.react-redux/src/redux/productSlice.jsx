import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { addNewProduct } = productSlice.actions;
export default productSlice.reducer;
