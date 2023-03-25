import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../src/redux/todos/todos";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
});
