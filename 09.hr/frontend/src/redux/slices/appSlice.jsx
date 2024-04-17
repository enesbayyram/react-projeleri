import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticate: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsAuthenticate: (state, action) => {
      state.isAuthenticate = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoading, setIsAuthenticate } = appSlice.actions;
export default appSlice.reducer;
