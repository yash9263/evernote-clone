import react, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import useAuth, { getUser } from "../useAuth";

export default function PrivateRoute({ children, loading, ...rest }) {
  let auth = getUser();
  useEffect(() => {}, [auth]);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signin", state: { from: location } }} />
        )
      }
    />
  );
}
