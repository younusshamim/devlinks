import { getLocalStorage } from "@/lib/localStorage";
import axios from "axios";

// const API_BASE_URL = "http://localhost:5000";
const API_BASE_URL = "https://devlinks-server.vercel.app/";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getLocalStorage("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
