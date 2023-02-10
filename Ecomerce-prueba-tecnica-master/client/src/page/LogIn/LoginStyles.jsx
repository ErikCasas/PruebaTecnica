import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: #0d6efd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.div`
  width: 130px;
`;

export const Img = styled.img`
  width: 40%;
`;
export const Formulario = styled.form`
  background-color: #009edb;
  border-radius: 20px;
  padding: 2%;
  box-shadow: 15px 20px 20px 5px black;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    width: 90%;
    gap: 30px;
    justify-content: center;
  }
`;

export const ContainerAux = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
`;
