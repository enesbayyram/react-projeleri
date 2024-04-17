import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/slices/appSlice";
import menuReducer from "../redux/slices/menuSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    menu: menuReducer,
  },
});
