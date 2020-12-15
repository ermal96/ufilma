import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, Login, Categories, Movies } from "./containers/Admin";
import { routes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/actions/userActions";
import { PrivateRoute, AuthRoute } from "./routes/";
import Home from "./containers/Home";

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
          <Route exact path={routes.home} component={Home} />

          <Route exact path={routes.adminMovies} component={Movies} />

          <AuthRoute path={routes.adminLogin} component={Login} />

          <PrivateRoute path={routes.adminCategories} component={Categories} />
          <PrivateRoute path={routes.admin} component={Dashboard} />
        </Switch>
      </Router>
    );
  } else {
    return <p>App Loading</p>;
  }
};

export default App;
