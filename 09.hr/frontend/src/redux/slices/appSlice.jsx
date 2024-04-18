import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticate: false,
  currentUser: {},
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
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoading, setIsAuthenticate, setCurrentUser } =
  appSlice.actions;
export default appSlice.reducer;
