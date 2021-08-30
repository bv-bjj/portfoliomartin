import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "./Footer";
import CardProyectosPersonales from "./CardProyectosPersonales";
import CardAbout from "./CardAbout";
import Viaje from "../img/viaje.jpg";
import Fula from "../img/fula.jpg";
import Asia from "../img/asia.jpg";
import Descarga from "../img/descarga.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo:
            "Master in International Relations, Security and Development",
          descripcion: "Autonomous University of Barcelona",
          anos: "2016-2017",
        },
        {
          titulo: "Bachelor in Political Science and Public Management",
          descripcion: "Autonomous University of Barcelona",
          anos: "2012-2016",
        },
      ],
      libros: [
        {
          titulo: "Iniciación al Fula",
          rol: "Editor",
          tipologia: "Languages",
          descripcion:
            "Moussa Diallo's book. The aim of this introductory book is to help people who want to learn the Fula language and culture.",
          imagenUrl: Fula,
          fecha: "5-6-2021",
          enlace:
            "https://www.amazon.es/Iniciaci%C3%B3n-al-fula-Fudorde-pular/dp/B096LWMBYW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=iniciaci%C3%B3n+al+fula&qid=1625051843&s=books&sr=1-1",
        },

        {
          titulo: "El siglo de Asia",
          rol: "Contributor and Editor",
          tipologia: "International politics essay",
          descripcion:
            "Book of Mateo Madridejos. In charge of the organization, editing aspects, contact with the publisher and promotion. His reading provides a rigorous, deep and didactic vision of the political-economic development of the Pacific with articles on China, Taiwan, Japan, India, Singapore, Hong-Kong. ",
          imagenUrl: Asia,
          fecha: "17-2-2021",
          enlace:
            "https://www.amazon.es/El-siglo-Asia-desaf%C3%ADo-China/dp/8413856647",
        },

        {
          titulo: "Viaje por la última frontera de Europa",
          rol: "Author",
          tipologia: "Travel literature",
          descripcion:
            "An adventure book with history, politics and traveling reflections, about my experiences on a four-month trip across the borders of Europe. I traveled places like Kaliningrad, Minsk, eastern Ukraine, Transnistria, Gagauzia, Siculus Country, Turkish Kurdistan and Northern Cyprus.",
          imagenUrl: Viaje,
          fecha: "7-6-2020",
          enlace:
            "https://www.amazon.es/Viaje-por-%C3%BAltima-frontera-Europa/dp/B089TWR2MT",
        },
        {
          titulo: "Barrioviajero.com",
          rol: "Author",
          tipologia: "Blog",
          descripcion:
            "Blog personal que a modo de biblioteca ha albergado muchos de mis escritos, en temas como política internacional, literatura, viajes, filosofía, cine y demás temas variados ",
          imagenUrl: Descarga,
          fecha: "2012-now",
          enlace: "http://www.barrioviajero.com/",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="shadow-sm">
          <Container className="p-4">
            <h1 class="gradient">About</h1>
            <p className="font-italic">
              "I feel that you will be essential for what I have to do, although
              I still do not realize why", El túnel, Ernesto Sábato.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-success">
              Welcome. Here you will find information about my studies and my
              personal projects.
            </p>
          </Container>
        </Jumbotron>

        <h2 className="m-4 d-flex justify-content-center mt-5">Studies</h2>
        <div className=" d-flex flex-sm-row flex-column align-items-center justify-content-center">
          {this.state.tarjetas.map((tarjeta) => (
            <CardProyectosPersonales
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              anos={tarjeta.anos}
            />
          ))}
        </div>

        <h2 className="m-4 d-flex text-center justify-content-center mt-5">
         Personal projects
        </h2>
        <div className=" d-flex flex-sm-column flex-column align-items-center justify-content-center mb-5">
          {this.state.libros.map((libros) => (
            <CardAbout
              imagenUrl={libros.imagenUrl}
              titulo={libros.titulo}
              enlace={libros.enlace}
              descripcion={libros.descripcion}
              fecha={libros.fecha}
              rol={libros.rol}
              tipologia={libros.tipologia}
            />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
