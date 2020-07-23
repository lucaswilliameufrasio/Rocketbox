import axios from "axios";
import env from "../config/env";

const apiUrl = env.apiUrl;

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
