import axios from "axios";

export const axiosConfig = () => {
  const token = localStorage.getItem("token");
  axios.defaults.baseURL = "https://ufilma.com/api";

  axios.defaults.headers.common["authorization"] = token;
};
