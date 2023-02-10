import React from 'react'
import { Container } from './NotFoundPageStyles'
import NotPages from "../../images/NotPages.jpg" 

/**Pagina en caso de que se tope con una ruta no contemplada */

const NotPage = () => {
  return (
    <>
    <Container>
        <img src={NotPages} alt="404" style={{width:"100vh"}}/>
    </Container>
    </>
  )
}

export default NotPage