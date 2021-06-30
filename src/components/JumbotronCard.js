import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const JumbotronCard = (props) => (
  
    <Jumbotron fluid>
    <Container className="p-4">
      <h1>{props.titulo}</h1>
      <p className="font-italic">
        {props.frase}
    </p>
      <br></br>
      <br></br>
      <br></br>
      <p className="text-success">
       {props.info}
      </p>
    </Container>
    </Jumbotron>
  
);

export default JumbotronCard;

