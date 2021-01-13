import React from "react";
import {
  Home,
  Login,
  Register,
  Movie,
  Categories,
  Movies,
  Category,
  AddMovie,
  AddCategory,
} from "../pages";
import { BrowserRouter as Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  movies: "/movies",
  addMovie: "/add-movie",
  categories: "/categories",
  addCategory: "/add-category",
};

export const Routes = () => {
  return (
    <Switch>
      <AuthRoute path={routes.login} component={Login} />
      <AuthRoute path={routes.register} component={Register} />

      <PrivateRoute exact path={routes.home} component={Home} />
      <PrivateRoute exact path={routes.movies} component={Movies} />
      <PrivateRoute exact path={routes.addMovie} component={AddMovie} />
      <PrivateRoute exact path={routes.categories} component={Categories} />
      <PrivateRoute exact path={routes.addCategory} component={AddCategory} />
      <PrivateRoute path={`${routes.movies}/:id`} component={Movie} />
      <PrivateRoute path={`${routes.categories}/:id`} component={Category} />
    </Switch>
  );
};
