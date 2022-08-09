import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  userInfo: userInfo ? userInfo : null,
  user: {},
  error: false,
  success: false,
  loading: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      return await authService.register(userInfo);
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      //
      return await authService.login(userInfo);
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getProfile",
  async (id, thunkAPI) => {
    try {
      //
      return await authService.getUserDetails(id);
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const updateUserProfile = createAsyncThunk(
//   "auth/updateProfile",
//   async (user, thunkAPI) => {
//     try {
//       //
//       return await authService.updateUserProfile(user);
//     } catch (error) {
//       const message =
//         error.respose && error.response.data.message
//           ? error.response.data.message
//           : error.message;

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const logout = createAsyncThunk("auth/logout", async () => {
  return await authService.logout(userInfo);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.userInfo = null;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.userInfo = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.error = true;
        state.message = action.payload;
      });
    // .addCase(updateUserProfile.pendng, (state) => {
    //   state.loading = true;
    // })
    // .addCase(updateUserProfile.fulfilled, (state, action) => {
    //   state.userInfo = action.payload;
    //   state.loading = false;
    //   state.error = false;
    // })
    // .addCase(updateUserProfile.rejected, (state, action) => {
    //   state.error = true;
    //   state.message = action.payload;
    // });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
