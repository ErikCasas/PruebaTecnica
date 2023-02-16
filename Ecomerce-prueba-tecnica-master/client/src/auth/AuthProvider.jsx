import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const baseURL = "https://pruebatecnica-production.up.railway.app";

  //estados para enviar mensajes y/o mantenerlos constates por todos los componentes
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [detail, setDetail] = useState(null);
  const [allUsers, setAllUsers] = useState([])
  const [change, setChange] = useState(false)
  // console.log({ user });

  /**
   * Es una función con la que hago una petición de tipo post, creando un nuevo ususario
   * @param {data} data es el objeto con todas las propiedades ya listas para enviar y crear
   */
  const createUser = async (data) => {
    try {
      const datos =await axios.post(`${baseURL}/create-user`, data);
      setChange(!change)
      console.log("esta es la data ==>",datos)
    } catch (error) {
      console.error(error);
    }
  };
  
  const createProduct = async (data) => {
    try {      
      console.log("esta es la data ==>", {data});
      await axios.post(`${baseURL}/create-product`, data);
      setChange(!change)
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Es una funcion con la que le paso el Id del producto para eliminarlo
   */
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${baseURL}/delete-product/${id}`);
      setChange(!change);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseURL}/delete-user/${id}`)
      setChange(!change);
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Esta es una función con la que busco la existencia del email en la Db
   */
  const getUserByEmail = async (email, password) => {
    setMessage(null)
    try {
      const response = await axios.get(`${baseURL}/user/${email}`);
      // console.log({ response });
      const { data } = response;
      if (data.error === "user not found") {
        setMessage("User Not Found");
        setUser(null);
      } else if (data.passwordHash !== password) {
        setMessage("Password Incorrect");
      } else {
        setUser(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Traigo el detail del producto, a segun el nombre de este
   */

  const getProductDetail = async (id) => {
    try {
      const product = await axios.get(`${baseURL}/product/${id}`);
      // console.log(product)
      setLoading(false);
      setDetail(product);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * traigo todos los productos para el home q
   */
  const getAllProducts = async () => {
    try {
      const data = await axios.get(`${baseURL}/products`);
      setLoading(false);
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const {data} = await axios.get(`${baseURL}/users`)
      setLoading(false)
      setAllUsers(data)
    } catch (error) {
      console.log({error})
    }
  }

/**
 * Tomo el id y la data como parametro para asi hacer la peticion PUT
 * del producto exacto en la base de datos
 * @param {id product} id 
 * @param {nueva info} data 
 */
  const updateProduct = async (id, data) => {
    try {
      console.log({id},{data})
      await axios.put(`${baseURL}/update-product/${id}`,data)
      setChange(!change)
    } catch (error) {
      console.log(error)
    }
  }   
  
  const updateUser = async (id, data) => {
    console.log({id},{data})
    try {
      const algo = await axios.put(`${baseURL}/update-user/${id}`,data)
      console.log({algo})
      setChange(!change)
    } catch (error) {
      console.log(error)
    }
  }
  

  /**
   * Deslogue del usuario
   */ const LogOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        detail,
        change,
        LogOut,
        loading,
        message,
        allUsers,
        createUser,
        updateUser,
        deleteUser,
        setLoading,
        getAllUsers,
        allProducts,
        updateProduct,
        createProduct,
        deleteProduct,
        getUserByEmail,
        getAllProducts,
        getProductDetail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
