import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "products",
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
    fetchProductSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    },
  },
});

// Destructure and export the plain action creators
export const { pending, errored, fetchProductSuccess } =
productSlice.actions;

export default productSlice.reducer;

// create a thunk that dispatches action creators
export const fetchTodos = () => async (dispatch, getState) => {
  dispatch(pending());
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);
      dispatch(fetchProductSuccess(data.products));
    })
    .catch((error) => {
      dispatch(errored(error.message));
    });
};
