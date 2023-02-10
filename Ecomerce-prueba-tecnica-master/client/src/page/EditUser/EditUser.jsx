import React, { useEffect } from 'react'
import useAuth from '../../auth/useAuth';
import CardUserAdmin from '../../components/cardUserAdmin/CardUserAdmin';
import Loader from '../../components/loader/Loader';
import { Container } from './editUserStyles';


/**
 *Se da una previsualización de la info de cada usuario registrado, dando 
 * acceso facil a la opción de cambiar el estado del usuario de read a master o viveversa con 
 * tan solo un boton   
*/

const EditUser = () => {

  const {allUsers, getAllUsers, setLoading, loading, change } = useAuth()

  // console.log("estee",user)

  useEffect(() => {
      setLoading(true)
      getAllUsers()
  }, [])

  useEffect(()=>{
    getAllUsers()
  },[change])

// console.log(allUsers)
  return (
    <>
    {loading?(<Loader/>):
    <Container>
      {allUsers.map((el,i)=>{
        return(<CardUserAdmin
        key={i}
        id={el._id}
        imgURL={el.image.secure_url}
        Master={el.master}
        name={el.name}
        email={el.email}
        />)
      })}

    </Container>
    }
    </>
  )
}

export default EditUser

