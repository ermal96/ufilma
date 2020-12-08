import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { config } from "./config";

config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
