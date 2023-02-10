import styled from "styled-components";

export const Container = styled.div`
  background-color: #0193cc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const Form = styled.form`
  width: 80%;
  background-color: #145454;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 15px 15px 5px black;
  border: solid gray;
`;

export const Label = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #ffffff;
`;
