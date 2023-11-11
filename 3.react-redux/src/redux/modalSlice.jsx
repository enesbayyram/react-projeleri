import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModalStatus: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { changeModalStatus } = modalSlice.actions;
export default modalSlice.reducer;
