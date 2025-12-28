import axios from "axios";

import { Token } from "@/libs/token";

const { VITE_BACKEND_URL } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Token.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
