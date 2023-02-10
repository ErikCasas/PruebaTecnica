import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { IoMdCreate } from "react-icons/io";
import { Container, Form, Label } from "./FormeditProductStyles";


/** Formulario controlado para editar nueva información del productos, 
 * definiendo el tipo de dato que lleva cada espacio y permitiendo al usuario tan solo llenar 
 * tan solo los espacios que desea cambiar
 */

const FormEditProduct = () => {
  const { updateProduct } = useAuth();

  const history = useHistory()

  const { id } = useParams();
  // console.log(id);

  const [file, setFile] = useState(null);

  const [info, setInfo] = useState({
    name: "",
    brand: "",
    description: "",
    category: "",
    stock: "",
    price: "",
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
    formData.append("brand", info.brand);
    formData.append("description", info.description);
    formData.append("category", info.category);
    formData.append("price", info.price);
    formData.append("stock", info.stock);
    if (file) {
      formData.append("image", file);
    }
    updateProduct(id, formData);
    setTimeout(function(){
      history.push("/admin/editProduct")
  }, 2000);
    
  };
  return (
    <>
      <Container>
        <Form className="row g-3 " onSubmit={updateProducts}>
          <div className="col-md-12 position-relative">
            <Label htmlFor="Name" className="form-label">
              Name Product
            </Label>
            <input
              type="text"
              name="name"
              value={info.name}
              className="form-control"
              id="Name"
              maxLength="14"
              placeholder="Name..."
              onChange={heandlerChangeInfo}
            />
            {/* <div className="valid-tooltip">Looks good!</div> */}
          </div>

          <div className="col-md-6 position-relative">
            <Label htmlFor="brand" className="form-label">
              Brand
            </Label>
            <input
              type="text"
              name="brand"
              className="form-control"
              value={info.brand}
              id="brand"
              maxLength="14"
              placeholder="Brand..."
              onChange={heandlerChangeInfo}
            />
            {/* <div className="valid-tooltip">Looks good!</div> */}
          </div>

          <div className="col-6">
            <Label htmlFor="stock" className="form-label">
              Stock
            </Label>
            <input
              max="1000"
              value={info.stock}
              min="1"
              name="stock"
              type="number"
              className="form-control"
              id="stock"
              placeholder="Stock..."
              onChange={heandlerChangeInfo}
            />
          </div>

          <div className="col-6">
            <Label htmlFor="price" className="form-label">
              Price
            </Label>
            <input
              max="1000"
              value={info.price}
              min="1"
              name="price"
              type="number"
              className="form-control"
              id="price"
              placeholder="Stock..."
              onChange={heandlerChangeInfo}
            />
          </div>

          <div className="col-md-6 position-relative">
            <Label htmlFor="category" className="form-label">
              Category
            </Label>
            <input
              type="text"
              className="form-control"
              name="category"
              id="category"
              value={info.category}
              maxLength="14"
              placeholder="category..."
              onChange={heandlerChangeInfo}
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>

          <div className="mb-3">
            <Label htmlFor="description" className="form-label">
              Description
            </Label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              placeholder="A simpla description"
              maxLength="110"
              onChange={heandlerChangeInfo}
              value={info.description}
            ></textarea>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>

          <div className="mb-3">
            <Label htmlFor="formFile" className="form-label">
              Choise a image
            </Label>
            <input
              type="file"
              name="image"
              accept="image/*"
              value={info.image}
              className="form-control"
              onChange={handleFileChange}
              id="formFile"
            />
          </div>
          <button type="submit" className="btn btn-warning">
            submit
            <IoMdCreate size={20} />
          </button>
        </Form>
      </Container>
    </>
  );
};

export default FormEditProduct;

