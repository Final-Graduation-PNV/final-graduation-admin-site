import axios from "axios";
import { getToken } from "../utils/localStorageUtils";

const http = axios.create({
  baseURL: "http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/"
})

http.interceptors.request.use(
  (config) => {
    if (!(config.url.includes("login") || config.url.includes("register"))) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
  },
  (error) => Promise.reject(error.response)
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => Promise.reject(error.response)
)

export default http