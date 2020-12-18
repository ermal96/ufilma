import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { config } from "./config";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import "react-aspect-ratio/aspect-ratio.css";
import GlobalStyle from "./theme/global";

// start project config
config();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
