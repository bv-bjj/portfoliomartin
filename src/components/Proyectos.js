import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "./Footer";
import ProyectosPersonales from "./ProyectosPersonales";
import Viaje from "../img/viaje.jpg";
import Fula from "../img/fula.jpg";
import Asia from "../img/asia.jpg";
import JumbotronReact from "./JumbotronReact";
import Descarga from "../img/descarga.png";
import DrunkBee from "../img/drunkbee.png";
import Consultora from "../img/consultora.png";

class Proyectos extends React.Component {
  constructor() {
    super();
    this.state = {
      desarrolloWeb: [
        {
          titulo: "Portfolio personal",
          descripcion: "Desarrollada con React",
          imagenUrl: Consultora,
          fecha: "XX",
          enlace: "https://github.com/losTinchos/Consultora"
        },
        {
          titulo: "Badalona Jiu Jitsu",
          descripcion: "Estilos propios con algo de Boostrap",
          imagenUrl: Consultora,
          fecha: "XX",
          enlace: "https://github.com/losTinchos/Consultora"
        },
        {
          titulo: "Consultoría LosTinchos",
          descripcion: "Aplicación 'CRUD' Web en PHP que permita pedir cita a los desarrolladores y equipos para solucionar problemas técnicos con la ayuda del formador o CTO. Frontend: HTML, CSS, Bootstrap; Backend: PHP; Bases de datos: MySQL.",
          imagenUrl: Consultora,
          fecha: "XX",
          enlace: "https://github.com/losTinchos/Consultora"
        },
        {
          titulo: "Wheel of Doom TheDrunkBee",
          descripcion: "The Drunk Bee is a multiplatform application (suitable for mobile phones, tablets and computers) designed by Los Tinchos that allows you to play a sacrifice selection system. Tecnologías: HTML, CSS, JS, GitHub. Está en producción en GH pages",
          imagenUrl: DrunkBee,
          fecha: "XX",
          enlace: "https://github.com/martindejos/TheDrunkBee"
        },
        
      ],      
      libros: [
        {
          titulo: "Iniciación al Fula",
          descripcion: "Editor. El objetivo de este libro de iniciación es ayudar a las personas que quieran aprender la lengua y la cultura fula.",
          imagenUrl: Fula,
          fecha: "5-6-2021",
          enlace: "https://www.amazon.es/Iniciaci%C3%B3n-al-fula-Fudorde-pular/dp/B096LWMBYW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=iniciaci%C3%B3n+al+fula&qid=1625051843&s=books&sr=1-1"
        },

        {
          titulo: "El siglo de Asia",
          descripcion: "Colaborador y editor en el libro de mi abuelo Mateo Madridejos. Encargado de la organización, aspectos de edición, contacto con la editorial y promoción. Su lectura proporciona una visión rigurosa, profunda y didáctica del desarrollo político-económico de la cuenca del Pacífico con artículos sobre China, Taiwán, Japón, India, Singapur, Hong-Kong. ",
          imagenUrl: Asia,
          fecha: "17-2-2021",
          enlace: "https://www.amazon.es/El-siglo-Asia-desaf%C3%ADo-China/dp/8413856647"
        },

        {
          titulo: "Viaje por la última frontera de Europa",
          descripcion: "Autor. Un libro de aventuras con historia, política y reflexiones viajeras, sobre mis experiencias en un viaje de cuatro meses por las fronteras de Europa. Recorrí lugares poco transitados como Kaliningrado, Minsk, el este de Ucrania, Transnistria, Gagauzia, el País Sículo, el Kurdistán turco y Chipre del Norte.",
          imagenUrl: Viaje,
          fecha: "7-6-2020",
          enlace: "https://www.amazon.es/Viaje-por-%C3%BAltima-frontera-Europa/dp/B089TWR2MT"
        },
        {
          titulo: "Barrioviajero.com",
          descripcion: "Blog personal que a modo de biblioteca a albergado muchos de mis escritos, en temas como política internacional, literatura, viajes, filosofía, cine y demás temas variados ",
          imagenUrl: Descarga,
          fecha: "2012-actualidad",
          enlace: "http://www.barrioviajero.com/"
        },
        ],
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <JumbotronReact />
        
        <div className="d-flex justify-content-center align-items-center flex-column " >
        <h3 className="m-4">Desarrollo web</h3>
          {this.state.desarrolloWeb.map((desarrolloWeb) => (
            <ProyectosPersonales
              imagenUrl={desarrolloWeb.imagenUrl}
              titulo={desarrolloWeb.titulo}
              enlace={desarrolloWeb.enlace}
              descripcion={desarrolloWeb.descripcion}
              fecha={desarrolloWeb.fecha}
              
            />
          ))}
          
          
          
          <h3 className="m-4">Proyectos personales</h3>
          {this.state.libros.map((libros) => (
            <ProyectosPersonales
              imagenUrl={libros.imagenUrl}
              titulo={libros.titulo}
              enlace={libros.enlace}
              descripcion={libros.descripcion}
              fecha={libros.fecha}
              
            />
          ))}
        </div>
        <Footer /> 
      </React.Fragment>
     
    );
  }
}

export default Proyectos;
