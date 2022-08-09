import axios from "axios";

// Register user
const register = async (userInfo) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post("/api/users", userInfo, config);

  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userInfo) => {
  const response = await axios.post("/api/users/login", userInfo);

  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("userInfo");
};
// User Profile
const getUserDetails = (id) => async (getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.get(`/api/users/${id}`, config);
  return data;
};

// Update user profile
const updateUserProfile = (user) => async (getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.post(`/api/users/profile`, user, config);
  return data;
};

const authService = {
  register,
  logout,
  login,
  getUserDetails,
  updateUserProfile,
};

export default authService;
