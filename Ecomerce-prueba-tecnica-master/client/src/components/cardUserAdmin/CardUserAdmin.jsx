import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import useAuth from "../../auth/useAuth";
import { Button, Card, GroupButtons } from "./CArdUserAdminStyles";

const CardUserAdmin = ({ name, email, Master, imgURL, id }) => {
  const { deleteUser, setLoading, updateUser } = useAuth();

  // console.log({name,master})

  const admin =(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("master", e.target.checked);
    updateUser(id, formData)
  }

  const killUser = (id) => {
    if (window.confirm("Estás seguro de que quieres eliminar este producto?")) {
      setLoading(true);
      deleteUser(id);
    }



  };
  return (
    <Card className="card">
      <img src={imgURL} className="card-img-top" alt="hola" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">Master: {Master ? "true" : "false"}</li>
      </ul>
      <GroupButtons className="card-body">
        <input
          type="checkbox"
          className="btn-check"
          id={`btn-check-outlined${id}`}
          autoComplete="off"
          checked={Master}
          onChange={admin}
        />
        <label className="btn btn-outline-primary" htmlFor={`btn-check-outlined${id}`} >
        {Master ? "MASTER" : "READ"}
        </label>
        <Link to={`/editUser/${id}`}>
        <button type="button" className="btn btn-warning">Edit <TbEdit/></button>
        </Link>
        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => killUser(id)}
          >
          Delete <MdDelete />
        </Button>
      </GroupButtons>
    </Card>
  );
};

export default CardUserAdmin;
