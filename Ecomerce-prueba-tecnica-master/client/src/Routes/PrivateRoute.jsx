import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";
/**
 * es un componente para definir si hay un logueo local
 * y darle acceso a componentes que manejan información a segun el usuario
 * @param {la ruta solicitada} props 
 * @returns redirige o lleva a la ruta segun el condicional if
 */
const PrivateRoute = (props) => {
  //si no hay un logue, se restringe el acceso
  const { user } = useAuth();
  // console.log(user)
  if (!user) return <Redirect to={"/login"} />;

  return <Route {...props} />;
};

export default PrivateRoute;
