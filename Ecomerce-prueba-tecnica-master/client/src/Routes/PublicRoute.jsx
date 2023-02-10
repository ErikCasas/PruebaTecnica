import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

/**
 * Si existe un logue local, le restringe el acceso al usuario a rutas 
 * como de logue de nuevo 
 */
const PublicRoute = (props) => {
  const { user } = useAuth();
  // console.log(user)
  if (user) return <Redirect to={"/home"} />;

  return <Route {...props} />;
};

export default PublicRoute;
