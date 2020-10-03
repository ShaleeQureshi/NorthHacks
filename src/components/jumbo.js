import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Jumbo = (props) => {
  return (
    <Jumbotron fluid className="jumbo-style">
      <Container>{props.elements}</Container>
    </Jumbotron>
  );
};
export default Jumbo;
