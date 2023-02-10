import React, { useState } from "react";
import useAuth from "../../auth/useAuth";
import { useHistory } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { Container, Form, Label, Tittle } from "./RegistSteyles";


/**Aqui se hace un pequeño formulario de registro de un nuevo usuario, 
 * siin embargo para que un usuario pase de Read a Master, esto se debe hacer directmente de otro
 * master o a traves de la base de datos 
 */

const Register = () => {
  const { createUser } = useAuth();

  const history = useHistory();

  const [info, setInfo] = useState({
    name: "",
    passwordHash: "",
    ConfirmPasswordHash: "",
    email: "",
  });

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const heandlerChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const createNewUser = (e) => {
    e.preventDefault();
    if (info.passwordHash !== info.ConfirmPasswordHash) {
      return alert("Passwords do not match");
    }
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("passwordHash", info.passwordHash);
    formData.append("email", `${info.email}@osnetpr.com`);
    formData.append("master", false);
    formData.append("image", file);
    createUser(formData);
    history.push("/login");
  };

  return (
    <Container>
      <Tittle>Be part of the family Osnet Wireless</Tittle>
      <Form className="row g-3 " onSubmit={createNewUser}>
        <div className="col-md-12 position-relative">
          <Label htmlFor="Name" className="form-label">
            Name
          </Label>
          <input
            id="Name"
            type="text"
            name="name"
            maxLength="14"
            minLength="3"
            value={info.name}
            className="form-control mb-3"
            placeholder="New name..."
            onChange={heandlerChangeInfo}
            required
          />
        </div>

        <div className="input-group mb-3">
          <input
            id="email"
            type="text"
            name="email"
            maxLength="14"
            minLength="3"
            value={info.email}
            aria-label="Username"
            className="form-control"
            onChange={heandlerChangeInfo}
            aria-describedby="basic-addon1"
            placeholder="Recipient's username"
            required
          />
          <span className="input-group-text" id="basic-addon2">
            @osnetpr.com
          </span>
        </div>

        <div className="col-md-12 position-relative mb-3">
          <Label htmlFor="passwordHash" className="form-label">
            Password
          </Label>
          <input
            type="password"
            maxLength="14"
            minLength="3"
            name="passwordHash"
            id="passwordHash"
            value={info.passwordHash}
            className="form-control"
            placeholder="New password"
            onChange={heandlerChangeInfo}
            required
          />
        </div>

        <div className="col-md-12 position-relative mb-3">
          <Label htmlFor="ConfirmPasswordHash" className="form-label">
            Confimr Password
          </Label>
          <input
            type="password"
            maxLength="14"
            minLength="3"
            name="ConfirmPasswordHash"
            id="ConfirmPasswordHash"
            value={info.ConfirmPasswordHash}
            className="form-control"
            placeholder="confirm password"
            onChange={heandlerChangeInfo}
            required
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="formFile" className="form-label">
            Choise a image
          </Label>
          <input
            type="file"
            name="image"
            id="formFile"
            value={info.image}
            className="form-control"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">
          submit <IoMdCreate size={20} />
        </button>
      </Form>
    </Container>
  );
};
export default Register;
