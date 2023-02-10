import styled from "styled-components";



export const Container = styled.div`
  background-color: #00d5ff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

export const Tittle = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
font-family: 'Oswald', sans-serif;
font-weight: 800;
`

export const Mail = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
font-family: 'Oswald', sans-serif;
font-size: 25px;
border-radius: 10px;
color: #ffffff;
background-color: #a70000;
padding: 5px;
font-weight: 500;
`

export const Button = styled.div`
  font-weight: 700;
  padding: 5 10px 5 10px;
`

export const NoMaster = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
font-family: 'Oswald', sans-serif;
  background-color: red;
  border-radius: 15px  ;
  display: block;
  color: white;
  padding: 15px;
`

export const Master = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
font-family: 'Oswald', sans-serif;
  background-color: green;
  border-radius: 15px  ;
  display: block;
  color: white;
  padding: 15px;
`