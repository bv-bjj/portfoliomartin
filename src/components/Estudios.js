import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "./Footer";
import EstudiosPersonales from "./EstudiosPersonales";

class Estudios extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo: "Bootcamp Full-Stack Web Development",
          descripcion: "Factoria F5",
          anos: "Enero 2021-Marzo 2021",
        },
        {
          titulo: "Bootcamp Front-End Web Development",
          descripcion: "Factoria F5",
          anos: "Enero 2021-Marzo 2021",
        },
        {
          titulo: "Master en Relaciones Internacionales",
          descripcion: "Universidad Autónoma de Barcelona",
          anos: "2016-2017",
        },
        {
          titulo: "Grado en Ciencias Políticas",
          descripcion: "Universidad Autónoma de Barcelona",
          anos: "2012-2016",
        },
      ],
      
    };
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container className="p-4">
            <h1>About</h1>
            <p className="font-italic">
              “Siento que usted será algo esencial para lo que tengo que hacer,
              aunque todavía no me doy cuenta de la razón”, El túnel, Ernesto
              Sábato.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-success">Mi formación procede del ámbito de las ciencias sociales, concretamente las Ciencias Políticas y las Relaciones Internacionales. También me he formado en construcción de paz y resolución de conflictos a través de diferentes formación. Sin embargo, desde 2021 decidí dar un vuelco e iniciar mi camino en el mundo de la programación y el desarrollo web. </p>
          </Container>
        </Jumbotron>
        <div className=" d-flex flex-sm-row flex-column align-items-center justify-content-center">
          {this.state.tarjetas.map((tarjeta) => (
            <EstudiosPersonales
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              anos={tarjeta.anos}
            />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Estudios;
