import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

/**
 * Si el usuario esta logueado y es administrador, tendra acceso a 
 * las opciones de administrado.
 * @returns El componente de la ruta con sus props.
 */
const AdminteRoute = (props) => {
  //debe existir un logue y debe ser Master
  const { user } = useAuth();
  // console.log(user)
  if (!user && user.master) return <Redirect to={"/home"} />;

  return <Route {...props} />;
};

export default AdminteRoute;
