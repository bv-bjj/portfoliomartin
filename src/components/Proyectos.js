import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "./Footer";
import ProyectosPersonales from "./ProyectosPersonales";
import EstudiosPersonales from "./EstudiosPersonales";
import JumbotronReact from "./JumbotronReact";
import Tarjeta from "./TarjetaInfoSkills";
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
      ],
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <JumbotronReact />
        
        <h3 className="m-4 d-flex justify-content-center">Formación en desarrollo web</h3>
        <div className=" d-flex flex-sm-row flex-column align-items-center justify-content-center">
                {this.state.tarjetas.map((tarjeta) => (
            <EstudiosPersonales
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              anos={tarjeta.anos}
            />
          ))}
        </div>

      <Tarjeta/>

        <div className="d-flex justify-content-center align-items-center flex-column mt-5" >
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
          
          
          
         
        </div>
        <Footer /> 
      </React.Fragment>
     
    );
  }
}

export default Proyectos;
