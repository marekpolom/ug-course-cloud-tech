import axios from "axios";

export const defaultAxios = axios.create({
  baseURL: 'http://localhost:5000/calculate',
});