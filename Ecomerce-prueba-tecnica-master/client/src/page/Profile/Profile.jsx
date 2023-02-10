import React from "react";
import { AiOutlineMail , AiFillRead} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { FaUserCheck } from "react-icons/fa"
import { Button, Container, Mail, Master, NoMaster, Tittle } from "./ProfilleStyles";

/**En esta pagina, el usuario puede ver el detalle, unicamente de su perfil, la igual que se
 * le da acceso a la edición de los datos de su perfil 
 */

const Profile = () => {

const { user } = useAuth()
  console.log(user)

  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src={user.image.secure_url} 
              className="rounded-circle mb-3" 
              style={{width:"350px", height:"350px"}} 
              alt={user.name}
            />
            <Tittle className="mb-3">{user.name}</Tittle>
            <Mail className="text-muted">
              <AiOutlineMail size={42} /> {user.email}
            </Mail>
            {user.master?(<>
            <Master>
              <strong>You are a Master user <FaUserCheck/></strong>
            </Master>
            </>):
            <NoMaster className="mb-3">
              <strong>you are a reader user type <AiFillRead/> </strong>
            </NoMaster>
            }
            <Link to={`/editUser/${user._id}`}>
              <Button type="button" className="btn btn-warning">
                Edit my info
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;

