import axios, { AxiosInstance } from "axios";

export const base_url = "http://localhost:3001";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: base_url,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
