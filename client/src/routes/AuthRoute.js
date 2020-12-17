import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./index";

const AuthRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          !isLoggedIn ? (
            <Component {...props} exact />
          ) : (
            <Redirect
              to={{
                pathname: routes.home,
                state: { from: props.location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default AuthRoute;
