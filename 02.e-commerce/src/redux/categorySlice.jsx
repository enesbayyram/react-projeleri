import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ROOT_URL = "https://fakestoreapi.com";

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("categories", async () => {
  const response = await axios.get(`${ROOT_URL}/products/categories`);
  return await response.data;
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
