import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getBasketProductsFromStorage = () => {
  if (localStorage.getItem("basketProducts")) {
    return JSON.parse(localStorage.getItem("basketProducts"));
  }
  return [];
};

const initialState = {
  drawer: false,
  products: getBasketProductsFromStorage(),
  totalAmount: 0,
};

const basketDetailSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    changeDrawerOpenClose: (state, action) => {
      state.drawer = action.payload;
    },
    addProductToBasket: (state, action) => {
      const exist = state.products.find(
        (product) => product.id == action.payload.id
      );
      if (exist) {
        action.payload.count += exist.count;

        const filteredProducts = getBasketProductsFromStorage().filter(
          (product) => product.id != action.payload.id
        );
        state.products = [...filteredProducts, action.payload];
      } else {
        state.products = [...state.products, action.payload];
      }
      localStorage.setItem("basketProducts", JSON.stringify(state.products));
    },
    deleteProductFromBasket: (state, action) => {
      state.products = [
        ...state.products.filter((product) => product.id !== action.payload),
      ];
      localStorage.setItem("basketProducts", JSON.stringify(state.products));
    },
    calculateAmount: (state) => {
      let totalAmount = 0;
      state.products?.map((product) => {
        totalAmount += product.price * product.count;
      });
      state.totalAmount = totalAmount;
    },
  },
});

export const {
  changeDrawerOpenClose,
  addProductToBasket,
  deleteProductFromBasket,
  calculateAmount,
} = basketDetailSlice.actions;
export default basketDetailSlice.reducer;
