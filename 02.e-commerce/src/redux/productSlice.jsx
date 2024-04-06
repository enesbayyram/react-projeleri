import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ROOT_URL = "https://fakestoreapi.com";

const initialState = {
  products: [],
  loading: false,
  productDetail: {},
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios.get(`${ROOT_URL}/products`);
  console.log("response", response);
  return await response.data;
});

export const getProductById = createAsyncThunk("getProductById", async (id) => {
  const response = await axios.get(`${ROOT_URL}/products/${id}`);
  return await response.data;
});

export const getProductsByCategoryName = createAsyncThunk(
  "getProductsByCategoryName",
  async (categoryName) => {
    const response = await axios.get(
      `${ROOT_URL}/products/category/${categoryName}`
    );
    console.log(response);
    return await response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.payload;
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getProductsByCategoryName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductsByCategoryName.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProductsByCategoryName.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
