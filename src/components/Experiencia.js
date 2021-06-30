import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "./Footer";

class Experiencia extends React.Component {
  render() {
    return (
    <React.Fragment>
        <Jumbotron fluid>
          <Container className="p-4">
            <h1>Experiencia</h1>
            <p>
            "Prefería no hacerlo" Bartleby, el escribiente, Henry Melville.
            </p>
          </Container>
        </Jumbotron>
        <Footer /> 
    </React.Fragment>
    );
}
}

export default Experiencia;