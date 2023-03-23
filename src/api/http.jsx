import axios from "axios";
import { getToken } from "../utils/localStorageUtils";

const http = axios.create({
  baseURL: "https://codenguoi.site/api/"
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