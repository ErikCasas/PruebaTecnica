import React from "react";
import { Link } from "react-router-dom";
import supermarke from "../../svg/supermarke.svg";
import { AuxContainer1, AuxContainer2, Button, Container, Img, Name, P, Tittle } from "./LandingStyles";


/** Esta es la Landing Page, con la que doy una pequeña introducción del objetivo de la pagina, 
 * cabde resaltar que este es el unico componente NO RESPONSIVE
 */
const Landing = () => {
  return (
    <>
      <Container className="container-fluid d-flex align-items-center">
        <AuxContainer1>
          <div className="text-center">
            <Tittle className="font-weight-bold">
              Welcome to my technical test
            </Tittle>
          </div>
        </AuxContainer1>
        <Name>
          <h1 className="font-weight-bold">
            I'm Erik Santiago Hernandez Casas
          </h1>
        </Name>

        <Img src={supermarke} alt="svg" />
        <AuxContainer2 className=" col-6">
          <P className="lead">
            This page is made with the MERN stack, this page is an inventory of
            supermarket products where I have categorized users into two types,
            Read, those who can only see the products, and the Master, who can
            modify, read, edit users and products as they please. I have used
            technologies like cloudinary to handle image file uploads and other
            things like a local login. I hope you like it
          </P>
        </AuxContainer2>
        <Link to={"/login"}>
        <Button className="btn btn-danger btn-lg">START</Button>
        </Link>
      </Container>
    </>
  );
};

export default Landing;

