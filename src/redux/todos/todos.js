import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{ id: "", name: "", completed: "", createdAt: "" }],
  loading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    pending(state) {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    errored(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchTodosSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    },
    postTodoSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: "",
        data: [action.payload, ...state.data],
      };
    },
  },
});

// Destructure and export the plain action creators
export const { pending, errored, fetchTodosSuccess, postTodoSuccess } =
  todoSlice.actions;

export default todoSlice.reducer;

// create a thunk that dispatches action creators
export const fetchTodos = () => async (dispatch, getState) => {
  dispatch(pending());
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      dispatch(fetchTodosSuccess(data.products));
    })
    .catch((error) => {
      dispatch(errored(error.message));
    });
};
