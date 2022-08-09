import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartService";

// get cart from localstorage

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const shippingAddress = JSON.parse(localStorage.getItem("shippingAddress"));

const initialState = {
  cartItems: cartItems ? cartItems : [],
  shippingAddress: shippingAddress ? shippingAddress : {},
  paymentMethod: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.product !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem(
        "shippingAddress",
        JSON.stringify(state.shippingAddress)
      );
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { removeFromCart, saveShippingAddress, savePaymentMethod } =
  cartSlice.actions;
export default cartSlice.reducer;
