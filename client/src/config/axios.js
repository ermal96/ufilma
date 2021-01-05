import axios from "axios";

export const axiosConfig = () => {
  const token = localStorage.getItem("token");
  axios.defaults.baseURL = process.env.REACT_APP_API;

  axios.defaults.headers.common["authorization"] = token;
};
