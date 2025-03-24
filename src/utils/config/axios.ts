import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: VITE_BACKEND_URL,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
