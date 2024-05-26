import axios from "axios";
import envServerConfig from "./evnServer";

export const axiosInstanceServer = axios.create({
    baseURL: envServerConfig.API_URL,
    withCredentials: true
  })