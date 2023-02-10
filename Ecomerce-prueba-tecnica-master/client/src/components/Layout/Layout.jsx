import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


//**De este modo puedo Renderizar siempre en pantalla el footer y la navbar con los componentes de por medio*/
const Layout = ({children}) => {
  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    
    </>
  )
}

export default Layout