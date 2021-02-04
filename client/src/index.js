import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { config } from "./config";
import "swiper/swiper.scss";
import "./styles/index.scss";

config();

ReactGA.initialize("G-KM3RZC1YLK");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
