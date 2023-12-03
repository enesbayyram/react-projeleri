import { createSlice, current } from "@reduxjs/toolkit";
import products from "../data/products.json";

const initialState = {
  money: 1000000,
  products: [],
  basket: [],
  totalAmount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fillState: (state) => {
      state.products = [...products];
    },
    clearBasket: (state) => {
      state.basket = [];
      state.totalAmount = 0;
    },
    calculateBasket: (state) => {
      let totalAmount = 0;
      if (state.basket.length > 0) {
        state.basket.map((product) => {
          totalAmount += product.count * product.price;
        });
        state.totalAmount = totalAmount;
      }
    },
    addBasket: (state, action) => {
      const checkBasket = state.basket.find(
        (product) => product.id === action.payload.id
      );
      if (checkBasket) {
        checkBasket.count += 1;
        state.basket = [
          ...state.basket.filter((item) => item.id !== checkBasket.id),
          checkBasket,
        ];
      } else {
        state.basket = [...state.basket, action.payload];
      }
    },
    removeBasket: (state, action) => {
      const currentProduct = state.basket.find(
        (item) => item.id == action.payload.id
      );
      currentProduct.count -= 1;

      if (currentProduct.count == 0) {
        state.basket = [
          ...state.basket.filter((item) => item.id != currentProduct.id),
        ];
      } else {
        state.basket = [
          ...state.basket.filter((item) => item.id != currentProduct.id),
          currentProduct,
        ];
      }
    },
  },
  extraReducers: (builder) => {},
});

export const {
  fillState,
  addBasket,
  removeBasket,
  calculateBasket,
  clearBasket,
} = productSlice.actions;
export default productSlice.reducer;
