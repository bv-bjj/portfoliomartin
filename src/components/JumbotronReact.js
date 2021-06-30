import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import JumbotronCard from "./JumbotronCard";

class JumbotronReact extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo: "Proyectos",
          frase: "Para eso se necesita locura; locura, ¿oyes? ¡El todo por el todo!”, Zorba el griego, Nikos Kazantzakis",
          info: "En esta sección encontrarás algunos de mis proyectos.  Principalmente se encuentran aquellos relacionados con el  desarrollo web; algunos son proyectos de clase y otros son o bien para aprender o tienen una perspectiva profesional. Al final de la página también se muestran otros proyectos de otros ámbitos."
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
      {this.state.tarjetas.map((tarjeta) => (
        <JumbotronCard
          titulo={tarjeta.titulo}
         frase={tarjeta.frase}
         info={tarjeta.info}
          
        />
      ))};
      </React.Fragment>
    );
  }
}

export default JumbotronReact;
