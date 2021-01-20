import React from "react";
import {
  Home,
  // Login,
  // Register,
  Movie,
  Categories,
  Movies,
  Category,
} from "../pages";
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import AuthRoute from "./AuthRoute";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  movies: "/movies",
  categories: "/categories",
};

export const Routes = () => {
  return (
    <Switch>
      {/* Auth Routes */}
      {/* <AuthRoute path={routes.login} component={Login} />
      <AuthRoute path={routes.register} component={Register} /> */}

      {/* Private Routes */}
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.movies} component={Movies} />
      <Route exact path={routes.categories} component={Categories} />
      <Route path={`${routes.movies}/:id`} component={Movie} />
      <Route path={`${routes.categories}/:id`} component={Category} />
    </Switch>
  );
};
