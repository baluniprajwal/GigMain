import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: `${apiBaseUrl}/api/auth`,
  withCredentials: true, // IMPORTANT for cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
