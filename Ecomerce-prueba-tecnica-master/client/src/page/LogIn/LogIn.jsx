import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { Button, Container, ContainerAux, Formulario, Img } from "./LoginStyles";

/** Formulario para dar ingreso a los usuarios y asi definir y separar las dos categorias de usuarios que existen
 * , sin embargo en mi proyecto yo tengo previstos tres tipos de usuarios, Master, Reader, y no logueado, 
 * que tiene similitud con el reader ya que solo puede ver, pero no puede tener acceso a las propiedades y 
 * formularios de editar su información
 */

const LogIn = () => {
  const { getUserByEmail, message } = useAuth();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });


  if(message){
    alert(message)
    window.location.reload()
  }
  const handlerChange = (e) =>{
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }

  const handler = (e) => {
    e.preventDefault();
    getUserByEmail(info.email, info.password);
  };

  return (
    <Container>
      <Formulario onSubmit={handler}>
        <Img
          src="https://osnetpr.com/wp-content/uploads/2023/01/Mesa-de-trabajo-1.jpg"
          className="img-fluid"
          alt="logo"
        />
        <div className="form-floating col-10">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@@osnetpr.com"
            value={info.email}
            name="email"
            onChange={handlerChange}
            required
          />
          <label htmlFor="floatingInput">name@osnetpr.com</label>
        </div>
        <div className="form-floating col-10">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
            value={info.password}
            name="password"
            onChange={handlerChange}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <ContainerAux>
          <Button type="submit" className="btn btn-primary" onClick={handler}>
            Log In
          </Button>
          <Link to={"/register"}>
          <Button type="button" className="btn btn-success">
            Sign up
          </Button>
          </Link>
        </ContainerAux>
      </Formulario>
    </Container>
  );
};

export default LogIn;

