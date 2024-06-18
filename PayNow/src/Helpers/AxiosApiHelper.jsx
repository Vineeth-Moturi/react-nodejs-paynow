import axios from "axios";
import { API_BASE_URL } from "../Config";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // This allows axios to send cookies with requests
});

export default axiosInstance;