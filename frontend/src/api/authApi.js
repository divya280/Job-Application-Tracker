import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;
 
console.log("Auth API URL:", import.meta.env.VITE_API_URL);

// Sign Up
export const signup = async (user) => {
  // user should be an object like { email, password }
  const res = await axios.post(`${API_URL}/signup`, user);
  return res.data;
};

// Log In
export const login = async (user) => {
  // user should be an object like { email, password }
  const res = await axios.post(`${API_URL}/login`, user);
  return res.data;
};

// Optional: Get current user info (if you have JWT auth)
export const getCurrentUser = async (token) => {
  const res = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
