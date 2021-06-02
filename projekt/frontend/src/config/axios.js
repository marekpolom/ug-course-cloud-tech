import axios from "axios";
import Config from "./config"

export const defaultAxios = axios.create({
  baseURL: `${Config.api_host}/calculate`,
});