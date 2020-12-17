import React from "react";
import { Home, Login } from "../containers";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";
import Register from "../containers/Register/Register";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path={routes.login} component={Login} />
        <AuthRoute path={routes.register} component={Register} />
        <PrivateRoute path={routes.home} component={Home} />
      </Switch>
    </Router>
  );
};

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  movies: "/movies",
  addMovie: "/add-movie",
  categories: "/categories",
  addCategory: "/add-category",
};
