import React, { useEffect } from "react";
import { Routes } from "./routes";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  });

  return <Routes />;
};

export default App;
