import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./orderService";

const initialState = {};

const createOrderSlice = createSlice({
  name: "create-order",
  initialState,
  reducers: {
    createOrderReset: (state) => {
      state = null;
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.order = action.payload;
      localStorage.removeItem("cartItem");
    },
    [createOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.message;
      // state.message = action.payload;
      state.order = null;
    },
  },
});

export const { reset } = createOrderSlice.actions;
export default createOrderSlice.reducer;
