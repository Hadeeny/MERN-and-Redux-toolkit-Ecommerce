<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./features/products/productListSlice";
import productDetailSlice from "./features/products/productDetailSlice";
import authSlice from "./features/users/authSlice";
import cartSlice from "./features/cart/cartSlice";
import createOrderSlice from "./features/order/createOrderSlice";
import orderDetailsSlice from "./features/order/orderDetailsSlice";
// import userDetailsSlice from "./features/users/userDetailsSlice";
import orderPaySlice from "./features/order/orderPaySlice";

const rootReducer = {
  productList: productListSlice,
  productDetails: productDetailSlice,
  userAuth: authSlice,
  cart: cartSlice,
  orderCreate: createOrderSlice,
  orderDetails: orderDetailsSlice,
  orderPay: orderPaySlice,
  // userDetails: userDetailsSlice,
=======
// import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from "./reducers/orderReducers";
// import { productDetailsSlice } from "./features/products/productSlice";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
});

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
