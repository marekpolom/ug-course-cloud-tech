import axios from "axios";

export const defaultAxios = axios.create({
  baseURL: 'http://localhost/api/calculate',
});