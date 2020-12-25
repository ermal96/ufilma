import axios from "axios";

export const axiosConfig = () => {
  const token = localStorage.getItem("token");
  // https://ufilma.com/api
  axios.defaults.baseURL = "http://127.0.0.1:5000/api";

  axios.defaults.headers.common["authorization"] = token;
};
