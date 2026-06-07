import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Register User
export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/api/auth/register`,
    userData
  );

  if (response.data) {
    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );
  }

  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/api/auth/login`,
    userData
  );

  if (response.data) {
    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );
  }

  return response.data;
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("user");
};