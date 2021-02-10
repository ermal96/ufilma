import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { config } from "./config";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

// start project config
config();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
