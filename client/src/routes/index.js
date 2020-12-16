import React from "react";
import { Dashboard, Login } from "../containers";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path={routes.login} component={Login} />
        <PrivateRoute path={routes.dashboard} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export const routes = {
  dashboard: "/",
  login: "/login",
  movies: "/movies",
  addMovie: "/add-movie",
  categories: "/categories",
  addCategory: "/add-category",
};
