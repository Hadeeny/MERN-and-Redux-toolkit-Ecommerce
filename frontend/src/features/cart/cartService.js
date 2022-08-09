import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "addToCart",
  async ({ productId, qty }) => {
    const { data } = await axios.get(`/api/products/${productId}`);
    return {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    };
  }
);
