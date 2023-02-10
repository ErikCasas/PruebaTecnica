import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";


/**Componente CartProductAdmin donde el master tiene una previsualizacion del producto 
 * y puede hacer configuraciones directas al usuario
 */

const CartProductadmin = ({ name, price, brand, description, imgURL, id }) => {
  const { deleteProduct, setLoading } = useAuth();

  const productDelete = (id) => {
    if (window.confirm("Estás seguro de que quieres eliminar a este usuario?")) {
      setLoading(true);
      deleteProduct(id);
    }
  };
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imgURL}
              className="img-fluid rounded-start"
              alt={name}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <span className="card-text">{brand}</span>
              <p className="card-text">{description}</p>
              <p className="card-title" style={{ marginRight: "70px" }}>
                $ {price}
              </p>
              <Link to={`/admin/editProduct/${id}`}>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ marginRight: "20px" }}
                >
                  Edit Info
                  <TbEdit />
                </button>
              </Link>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => productDelete(id)}
              >
                Delete <MdDelete />
              </button>
              <div> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductadmin;
