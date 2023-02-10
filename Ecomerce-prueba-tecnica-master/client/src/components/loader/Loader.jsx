import React from "react";
import { Container } from "./LoaderStyles";


const Loader = () => {
  return (
    <>
    <Container>
    <div className="spinner-border text-danger" role="status" style={{width: "10rem", height: "10rem"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </Container>
</>
  );
};

export default Loader;


