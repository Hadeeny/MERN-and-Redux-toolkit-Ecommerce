import { createSlice } from "@reduxjs/toolkit";
import { getOrderDetails } from "./orderService";

const orderDetailsSlice = createSlice({
  name: "detailsOrderSlice",
  initialState: {
    loading: true,
    error: "",
  },
  extraReducers: {
    [getOrderDetails.pending]: (state) => {
      state.loading = true;
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    [getOrderDetails.rejected]: (state) => {
      state.loading = false;
      state.error = "something went wrong.";
    },
  },
});

const { reducer } = orderDetailsSlice;
export default reducer;
