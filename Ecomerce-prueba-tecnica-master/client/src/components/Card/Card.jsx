import React from "react";
import { Link } from "react-router-dom";
import { BackGround, Tittle } from "./CArdStyles";

//**Componente card que se renderiza en Home */

const Card = ({ name, price, imageUrl, id }) => {
  return (
    <BackGround className="card">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <Tittle className="card-title">{name}</Tittle>
        <p className="card-text font-weight-bold">$ {price}</p>
        <Link to={`/detail/${id}`}>
          <button className="btn btn-primary">Show More</button>
        </Link>
      </div>
    </BackGround>
  );
};

export default Card;

