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
          titulo: "Máster en Relaciones Internacionales, Seguridad y Desarrollo",
          descripcion: "Universidad Autónoma de Barcelona",
          anos: "2016-2017",
        },
        {
          titulo: "Grado en Ciencias Políticas y Gestión Pública",
          descripcion: "Universidad Autónoma de Barcelona",
          anos: "2012-2016",
        },
      ],
      libros: [
        {
          titulo: "Iniciación al Fula",
          rol: "Editor",
          tipologia: "Libro de idiomas",
          descripcion:
            "Libro de Moussa Diallo. El objetivo de este libro de iniciación es ayudar a las personas que quieran aprender la lengua y la cultura fula.",
          imagenUrl: Fula,
          fecha: "5-6-2021",
          enlace:
            "https://www.amazon.es/Iniciaci%C3%B3n-al-fula-Fudorde-pular/dp/B096LWMBYW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=iniciaci%C3%B3n+al+fula&qid=1625051843&s=books&sr=1-1",
        },

        {
          titulo: "El siglo de Asia",
          rol: "Colaborador y Editor",
          tipologia: "Ensayo de política internacional",
          descripcion:
            "Libro de Mateo Madridejos. Encargado de la organización, aspectos de edición, contacto con la editorial y promoción. Su lectura proporciona una visión rigurosa, profunda y didáctica del desarrollo político-económico de la cuenca del Pacífico con artículos sobre China, Taiwán, Japón, India, Singapur, Hong-Kong. ",
          imagenUrl: Asia,
          fecha: "17-2-2021",
          enlace:
            "https://www.amazon.es/El-siglo-Asia-desaf%C3%ADo-China/dp/8413856647",
        },

        {
          titulo: "Viaje por la última frontera de Europa",
          rol: "Autor",
          tipologia: "Literatura de viajes",
          descripcion:
            "Un libro de aventuras con historia, política y reflexiones viajeras, sobre mis experiencias en un viaje de cuatro meses por las fronteras de Europa. Recorrí lugares poco transitados como Kaliningrado, Minsk, el este de Ucrania, Transnistria, Gagauzia, el País Sículo, el Kurdistán turco y Chipre del Norte.",
          imagenUrl: Viaje,
          fecha: "7-6-2020",
          enlace:
            "https://www.amazon.es/Viaje-por-%C3%BAltima-frontera-Europa/dp/B089TWR2MT",
        },
        {
          titulo: "Barrioviajero.com",
          rol: "Autor",
          tipologia: "Blog",
          descripcion:
            "Blog personal que a modo de biblioteca ha albergado muchos de mis escritos, en temas como política internacional, literatura, viajes, filosofía, cine y demás temas variados ",
          imagenUrl: Descarga,
          fecha: "2012-actualidad",
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
              “Siento que usted será algo esencial para lo que tengo que hacer,
              aunque todavía no me doy cuenta de la razón”, El túnel, Ernesto
              Sábato.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-success">
            Bienvenido/a. Aquí encontrarás información sobre mis estudios y mis proyectos personales.
            </p>
          </Container>
        </Jumbotron>
        
        <h2 className="m-4 d-flex justify-content-center mt-5" >Estudios</h2>
        <div className=" d-flex flex-sm-row flex-column align-items-center justify-content-center">
                {this.state.tarjetas.map((tarjeta) => (
            <CardProyectosPersonales
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              anos={tarjeta.anos}
            />
          ))}
        </div>

        <h2 className="m-4 d-flex text-center justify-content-center mt-5">Proyectos personales</h2>
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
