import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./index";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routes.login,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
