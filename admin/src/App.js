import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/actions/userActions";
import { Routes } from "./routes";

const App = () => {
  const dispatch = useDispatch();
  const isAppReady = useSelector((state) => state.user.loaded);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  if (isAppReady) {
    return <Routes />;
  } else {
    return <p>loading...</p>;
  }
};

export default App;
