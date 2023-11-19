import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  product: {},
};

const ROOT_URL = "https://fakestoreapi.com";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios.get(`${ROOT_URL}/products`);
  return response.data;
});

export const getProductById = createAsyncThunk(
  "getProductById",
  async (productId) => {
    const response = await axios.get(`${ROOT_URL}/products/${productId}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
