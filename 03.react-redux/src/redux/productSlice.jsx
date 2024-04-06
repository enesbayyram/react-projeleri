import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  keyword: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sortingProducts: (state, action) => {
      state.products = [
        ...state.products.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ];
    },
    addNewProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },

    deleteProduct: (state, action) => {
      state.products = [
        ...state.products.filter((product) => product.id != action.payload),
      ];
    },
    updateProduct: (state, action) => {
      state.products = [
        ...state.products.map((product) =>
          product.id == action.payload.id
            ? { ...product, ...action.payload }
            : product
        ),
      ];
    },
    filterProducts: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  addNewProduct,
  deleteProduct,
  updateProduct,
  sortingProducts,
  filterProducts,
} = productSlice.actions;
export default productSlice.reducer;
