import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorerflp-api.onrender.com"
})