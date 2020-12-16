import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/actions/userActions";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./theme/global";

const App = () => {
  const dispatch = useDispatch();
  const isAppReady = useSelector((state) => state.user.isLoaded);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  if (isAppReady) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </>
    );
  } else {
    return <p>App Loading</p>;
  }
};

export default App;
