import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Dashboard, Login, Categories, Movies } from "./containers";
import { routes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/actions/userActions";
import { PrivateRoute, AuthRoute } from "./routes/";

const App = () => {
  const dispatch = useDispatch();
  const isAppReady = useSelector((state) => state.user.isLoaded);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  if (isAppReady) {
    return (
      <Router>
        <Switch>
          <AuthRoute path={routes.login} component={Login} />
          <PrivateRoute path={routes.movies} component={Movies} />
          <PrivateRoute path={routes.categories} component={Categories} />
          <PrivateRoute path={routes.dashboard} component={Dashboard} />
        </Switch>
      </Router>
    );
  } else {
    return <p>App Loading</p>;
  }
};

export default App;
