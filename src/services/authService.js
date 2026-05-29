import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Register User

export const registerUser = async (userData) => {
  const { data } = await axios.post(
    `${API_URL}/api/auth/register`,
    userData
  );

  if (data) {
    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );
  }

  return data;
};

// Login User

export const loginUser = async (userData) => {
  const { data } = await axios.post(
    `${API_URL}/api/auth/login`,
    userData
  );

  if (data) {
    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );
  }

  return data;
};

// Logout User

export const logoutUser = () => {
  localStorage.removeItem("user");
};