import { createSlice } from "@reduxjs/toolkit";
import data from "../data/products.json";

const initialState = {
  products: data,
  basket: [],
  basketTotalAmount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findResult = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (findResult) {
        findResult.count += 1;

        state.basket = [
          ...state.basket.filter((item) => item.id !== action.payload.id),
          findResult,
        ];
      } else {
        state.basket = [...state.basket, action.payload];
      }
    },
    removeProduct: (state, action) => {
      const findResult = state.basket.find(
        (item) => item.id === action.payload
      );
      findResult.count -= 1;
      if (findResult.count === 0) {
        state.basket = [
          ...state.basket.filter((item) => item.id !== findResult.id),
        ];
      } else {
        state.basket = [
          ...state.basket.filter((item) => item.id !== action.payload),
          findResult,
        ];
      }
    },
    calculate: (state) => {
      if (state.basket.length > 0) {
        let totalAmount = 0;
        state.basket.map((item) => {
          totalAmount += item.price * item.count;
        });
        state.basketTotalAmount = totalAmount;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addProduct, removeProduct, calculate } = productSlice.actions;
export default productSlice.reducer;
