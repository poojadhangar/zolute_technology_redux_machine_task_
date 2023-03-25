import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/reducer/ProductReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
  }
});
