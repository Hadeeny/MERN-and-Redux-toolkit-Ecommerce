import { createSlice } from "@reduxjs/toolkit";
import { orderPay } from "./orderService";

const orderPaySlice = createSlice({
  name: "orderPay",
  initialState: {},
  reducers: {
    payOrderReset: (state) => {
      state = null;
    },
  },
  extraReducers: {
    [orderPay.pending]: (state) => {
      state.loading = true;
    },
    [orderPay.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [orderPay.rejected]: (state) => {
      state.loading = false;
      state.error = "something went wrong.";
    },
  },
});

const { reducer, actions } = orderPaySlice;
export const { payOrderReset } = actions;
export default reducer;
