import React from "react";

import JumbotronCard from "./JumbotronCard";

class JumbotronReact extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo: "Portfolio",
          frase: '"Para eso se necesita locura; locura, ¿oyes? ¡El todo por el todo!”, Zorba el griego, Nikos Kazantzakis',
          info: "Bienvenido a mi portfolio. Aquí encontrarás mi formación, mis skills y mis proyectos relacionados directamente con el desarrollo web. "
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
