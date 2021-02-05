import React from "react";
import { Home, Login, Register, Movie, Categories, Movies, Category, Favorites } from "../pages";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
// import NotFound from "../pages/NotFound/NotFound";

import { Router } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

export const routes = {
  home: "/",
  login: "/hyr",
  register: "/regjistrohu",
  movies: "/filma",
  categories: "/kategorite",
  favorites: "/te-preferuar",
};

export const Routes = () => {
  const history = createBrowserHistory();

  history.listen((location) => {
    ReactGA.initialize("G-KM3RZC1YLK");
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return (
    <Router history={history}>
      <Switch>
        {/* Auth Routes */}
        <AuthRoute exact path={routes.login} component={Login} />
        <AuthRoute exact path={routes.register} component={Register} />

        {/* Private Routes */}
        <PrivateRoute exact path={routes.favorites} component={Favorites} />

        {/* Routes */}
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.movies} component={Movies} />
        <Route exact path={routes.categories} component={Categories} />
        <Route exact path={`${routes.movies}/:id`} component={Movie} />
        <Route exact path={`${routes.categories}/:id`} component={Category} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};
