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
  Account,
} from "../pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

export const routes = {
  home: "/",
  login: "/hyr",
  register: "/regjistrohu",
  movies: "/filma",
  categories: "/kategorite",
  favorites: "/te-preferuar",
  account: "/llogaria",
};

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Auth Routes */}
        <AuthRoute exact path={routes.login} component={Login} />
        <AuthRoute exact path={routes.register} component={Register} />

        {/* Private Routes */}
        <PrivateRoute exact path={routes.favorites} component={Favorites} />
        <PrivateRoute exact path={routes.account} component={Account} />

        {/* Routes */}
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.movies} component={Movies} />
        <Route exact path={routes.categories} component={Categories} />
        <Route exact path={`${routes.movies}/:id`} component={Movie} />
        <Route exact path={`${routes.categories}/:id`} component={Category} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
