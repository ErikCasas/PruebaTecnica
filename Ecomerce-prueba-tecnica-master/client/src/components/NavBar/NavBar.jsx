import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  AiOutlineHome,
  AiOutlineUpload,
  AiOutlineUserDelete,
  AiOutlineUserAdd,
  
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import useAuth from "../../auth/useAuth";
const NavBar = () => {
  const { user, LogOut } = useAuth();

  //btn para desloguear al usuario de su cuenta
  const Logout = () => {
    LogOut()
  }

  // console.log("user", user);
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <Navbar.Brand>
              Home <AiOutlineHome size={25} />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll >

              {user && user.master?( <>
              <NavDropdown title="Admin" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link
                    to={"/admin/editUser"}
                    className="text-decoration-none"
                    style={{ color: "gray" }}
                  >
                    Edit Users
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to={"/admin/editProduct"}
                    className="text-decoration-none"
                    style={{ color: "gray" }}
                  >
                    Edit Product
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <AiOutlineUpload size={25}/>
                  <Link
                    to={"/admin/newProduct"}
                    className="text-decoration-none"
                    style={{ color: "gray" }}
                  >
                    Add Product
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <AiOutlineUserAdd size={25}/>
                  <Link
                    to={"/admin/newUser"}
                    className="text-decoration-none"
                    style={{ color: "gray" }}
                  >
                    Add User
                  </Link>
                </NavDropdown.Item> 

              </NavDropdown>
              </>):null}

            </Nav>
            <Nav>
              <Navbar.Brand>
                {user ? (
                  <Link
                    to={"/profile"}
                    className="text-decoration-none"
                    style={{ color: "gray" }}
                  >
                    <BiUser size={30}/>
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className="text-decoration-none"
                    style={{ color: "whitesmoke" }}
                  >
                    <AiOutlineUserAdd size={30} />
                  </Link>
                )}
              </Navbar.Brand>
            </Nav>

          </Navbar.Collapse>
          {user?
          (<Navbar.Brand>
              <Link
                to={"/login"}
                className="text-decoration-none"
                style={{ color: "whitesmoke" }}
                ><Button variant="danger" onClick={Logout} style={{marginLeft:"10px"}} ><AiOutlineUserDelete size={25}/></Button>
                
              </Link>
            </Navbar.Brand>):null
              }
        </Container>
      </Navbar>
    </>
    // <div>
    //   <Link to={"/login"}><p>login</p></Link>
    // </div>
  );
};

export default NavBar;
