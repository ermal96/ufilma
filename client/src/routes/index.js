import React from "react";
import {
  Home,
  Login,
  Register,
  Movie,
  Categories,
  Movies,
  Category,
  Favorites,
} from "../pages";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  movies: "/movies",
  categories: "/categories",
  favorites: "/favorites",
};

export const Routes = () => {
  return (
    <Switch>
      {/* Auth Routes */}
      <AuthRoute path={routes.login} component={Login} />
      <AuthRoute path={routes.register} component={Register} />

      {/* Private Routes */}
      <PrivateRoute exact path={routes.favorites} component={Favorites} />

      {/* Routes */}
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.movies} component={Movies} />
      <Route exact path={routes.categories} component={Categories} />
      <Route path={`${routes.movies}/:id`} component={Movie} />
      <Route path={`${routes.categories}/:id`} component={Category} />
    </Switch>
  );
};
