import styled from "styled-components";

export const Container = styled.div`
  background-color: #0193cc;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  padding: 40px 50px;
  /* @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));
  }  */
`;

export const AuxConatiner = styled.div`
  background-color: #23a6da;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
