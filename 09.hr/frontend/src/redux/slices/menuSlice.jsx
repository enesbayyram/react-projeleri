import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuList: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menuList = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
