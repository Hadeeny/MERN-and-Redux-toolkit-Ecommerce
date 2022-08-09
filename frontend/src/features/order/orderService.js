import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const crtOrder =
//   (order) =>
//   async ({ getState }) => {
//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };
//     const { data } = await axios.post(`/api/orders`, order, config);
//     return data;
//   };

// order, thunkAPI, { getState }
export const createOrder = createAsyncThunk(
  "createOrder",
  async (order, { getState }) => {
    try {
      // crtOrder(order);
      // const {
      //   userLogin: { userInfo },
      // } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTgzYTM0OTllNDc4MWE1NGNiNzY1OCIsImlhdCI6MTY1NDAyOTY2NSwiZXhwIjoxNjU2NjIxNjY1fQ.7zSXloOm9KBqGZr9EYL5xwfxlfMLKm-695db9D6cIyo`,
        },
      };
      const { data } = await axios.post(`/api/orders`, order, config);
      return data;
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      // return thunkAPI.rejectWithValue(message);
      return message;
    }
  }
);

// export const createOrder = createAsyncThunk(
//   "createOrder",
//   async (order, { getState }) => {
//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const { data } = await axios.post("/api/orders", order, {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     });
//     console.log(userInfo.token);
//     return data;
//   }
// );

export const getOrderDetails = createAsyncThunk(
  "detailsOrder",
  async (orderId, { getState }) => {
    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const { data } = await axios.get(`/api/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTgzYTM0OTllNDc4MWE1NGNiNzY1OCIsImlhdCI6MTY1NDAyOTY2NSwiZXhwIjoxNjU2NjIxNjY1fQ.7zSXloOm9KBqGZr9EYL5xwfxlfMLKm-695db9D6cIyo`,
      },
    });

    return data;
  }
);

export const orderPay = createAsyncThunk(
  "orderPay",
  async ({ order, paymentResult }, { getState }) => {
    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const { data } = await axios.put(
      `/api/orders/${order._id}/pay`,
      paymentResult,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTgzYTM0OTllNDc4MWE1NGNiNzY1OCIsImlhdCI6MTY1NDAyOTY2NSwiZXhwIjoxNjU2NjIxNjY1fQ.7zSXloOm9KBqGZr9EYL5xwfxlfMLKm-695db9D6cIyo`,
        },
      }
    );

    return data;
  }
);
