import React from "react";

import JumbotronCard from "./JumbotronCard";

class JumbotronReact extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo: "Portfolio",
          frase: '“You have everything but one thing: madness. A man needs a little madness or else - he never dares cut the rope and be free.”, Zorba the greek, Nikos Kazantzakis',
          info: "Welcome. Here you will find everything related to web development: skills, studies and portfolio."
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
