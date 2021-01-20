import React from "react";

import { Routes } from "./routes";

import axios from "axios";

const App = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API;

  return <Routes />;
};

export default App;
