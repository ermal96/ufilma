import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { config } from "./config";
import ReactGA from "react-ga";
import "swiper/swiper.scss";
import "./styles/index.scss";

config();

ReactGA.initialize("UA-59YYQCQ42C");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
