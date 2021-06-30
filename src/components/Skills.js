import React from "react";
import {
  Jumbotron,
  Container,
  } from "react-bootstrap";
import Footer from "./Footer";
import Tarjeta from "./TarjetaInfoSkills";


class Skills extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="">
          <Container>
            <h1>Skills</h1>
            <p>
              “Me había levantado para irme a casa; porque ya era tarde, y todo
              estaba oscuro”, El paseo, Robert Walser.
            </p>
          </Container>
        </Jumbotron>
               
       
        <Tarjeta />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Skills;
