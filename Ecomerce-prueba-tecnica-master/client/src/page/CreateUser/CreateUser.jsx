import React, { useState } from "react";
import { IoMdCreate } from "react-icons/io";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Container, Form, Label } from "./CreateUserStyles";

const CreateUSer = () => {
  const { createUser } = useAuth();

  const history = useHistory();

  // console.log(user.master);

  const [file, setFile] = useState(null);

  const [info, setInfo] = useState({
    name: "",
    passwordHash: "",
    master: false,
    email: "",
  });

  const heandlerChangeCheckBox = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const heandlerChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const updateProducts = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("passwordHash", info.passwordHash);
    formData.append("email", `${info.email}@osnetpr.com`);
    formData.append("master", info.master);
    if (file) {
      formData.append("image", file);
    }
    // console.log({info});
    // console.log(formData);
    createUser(formData);
    history.push("/admin/editUser");
  };
  return (
    <>
      <Container>
        <Form className="row g-3 " onSubmit={updateProducts}>
          <div className="col-md-12 position-relative">
            <Label htmlFor="Name" className="form-label">
              Name
            </Label>
            <input
              id="Name"
              type="text"
              name="name"
              maxLength="14"
              value={info.name}
              className="form-control"
              placeholder="New name..."
              onChange={heandlerChangeInfo}
            />
          </div>

          <div className="col-md-12 position-relative mb-3">
            <Label htmlFor="passwordHash" className="form-label">
              Password
            </Label>
            <input
              type="text"
              maxLength="14"
              name="passwordHash"
              id="passwordHash"
              value={info.passwordHash}
              className="form-control"
              placeholder="New password"
              onChange={heandlerChangeInfo}
            />
          </div>

          <div className="input-group mb-3">
            <input
              id="email"
              type="text"
              name="email"
              maxLength="14"
              value={info.email}
              aria-label="Username"
              className="form-control"
              onChange={heandlerChangeInfo}
              aria-describedby="basic-addon1"
              placeholder="Recipient's username"
            />
            <span className="input-group-text" id="basic-addon2">
              @osnetpr.com
            </span>
          </div>
              <input
                name="master"
                type="checkbox"
                autoComplete="off"
                className="btn-check"
                id="btn-check-outlined"
                onChange={heandlerChangeCheckBox}
              />
              <label
                className="btn btn-outline-danger"
                htmlFor="btn-check-outlined"
              >
                Admin {info.master ? <AiFillLike /> : <AiFillDislike />}
              </label>

          <div className="mb-3">
            <Label htmlFor="formFile" className="form-label">
              Choise a image
            </Label>
            <input
              type="file"
              name="image"
              id="formFile"
              accept="image/*"
              value={info.image}
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-warning">
            submit <IoMdCreate size={20} />
          </button>
        </Form>
      </Container>
    </>
  );
};

export default CreateUSer;

