import React from "react";
import {
  Login,
  Register,
  EditMovie,
  Categories,
  Movies,
  AddMovie,
  AddCategory,
  EditCategory,
  Dashboard,
} from "../pages";
import { BrowserRouter as Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";
import Users from "../pages/Users/Users";

export const routes = {
  dashboard: "/",
  login: "/login",
  register: "/register",
  movies: "/movies",
  addMovie: "/add-movie",
  categories: "/categories",
  addCategory: "/add-category",
  users: "/users",
};

export const Routes = () => {
  return (
    <Switch>
      <AuthRoute path={routes.login} component={Login} />
      <AuthRoute path={routes.register} component={Register} />

      <PrivateRoute exact path={routes.dashboard} component={Dashboard} />
      <PrivateRoute exact path={routes.movies} component={Movies} />
      <PrivateRoute exact path={routes.addMovie} component={AddMovie} />
      <PrivateRoute exact path={routes.categories} component={Categories} />
      <PrivateRoute exact path={routes.addCategory} component={AddCategory} />
      <PrivateRoute exact path={routes.users} component={Users} />
      <PrivateRoute path={`${routes.movies}/:id`} component={EditMovie} />
      <PrivateRoute
        path={`${routes.categories}/:id`}
        component={EditCategory}
      />
    </Switch>
  );
};
