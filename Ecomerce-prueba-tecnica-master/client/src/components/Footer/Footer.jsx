import React from 'react'
import styled from 'styled-components'
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { VscGithub, VscBriefcase } from "react-icons/vsc"
import { MdCatchingPokemon } from "react-icons/md"

/**Es unn Footer el cual hice con la intención de dar una sensación de que es una pagina completa
 * en estilos
 */

const Footer = () => {
  return (
    <>
  <footer className="bg-dark py-3">
  <div className="container">
    <div className="row d-flex justify-content-around">
      <div className="col-sm-2">
        <Botton className="btn btn-primary mx-10" href="https://www.linkedin.com/in/erik-desarrolladorweb/" target="_blank" rel="noopener noregerrer">LinkedIn <AiOutlineLinkedin size={25}/></Botton>
        <Botton className="btn btn-dark mx-10" href="https://github.com/ErikCasas" target="_blank" rel="noopener noregerrer" >GitHub <VscGithub/></Botton>
      </div>
      <div className="col-sm-2">
        <Botton className="btn btn-success mx-10" href="https://wa.link/inz9pw" target="_blank" rel="noopener noregerrer">Whatsapp <AiOutlineWhatsApp/></Botton>
        <Botton className="btn btn-danger mx-10" href="mailto:santicasas667@gmail.com">Gmail <AiOutlineMail/></Botton>
      </div>
      <div className="col-sm-2">
        <Botton className="btn btn-warning mx-10" href="https://erikcasas.github.io/" target="_blank" rel="noopener noregerrer">Briefcase <VscBriefcase/></Botton>
        <Botton className="btn btn-info mx-10" href="https://poke-page-tt22.vercel.app/" target="_blank" rel="noopener noregerrer" >PokePage <MdCatchingPokemon/></Botton>
      </div>
    </div>
    <div className="row mt-1">
      <div className="col text-center">
        <p className="text-white">This page was made by Erik Hernandez &copy; 2023</p>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer

const Botton = styled.a`
margin: 2px;
height: 40px;
width: 140px;
border: solid 2px whitesmoke;
`

