import React from "react";
import Skills from "./Skills";
import Footer from "./Footer";
import ProyectosPersonales from "./ProyectosPersonales";
import EstudiosPersonales from "./EstudiosPersonales";
import JumbotronReact from "./JumbotronReact";
import Badalona from "../img/Badalona.png";
import DrunkBee from "../img/drunkbee.png";
import Consultora from "../img/consultora.png";
import Flores from "../img/flores.png";
import Hit from "../img/hit.png";
import Sushi from "../img/sushi.png";

class Proyectos extends React.Component {
  constructor() {
    super();
    this.state = {
      desarrolloWeb: [
        {
          titulo: "Portfolio personal",
          tipo: "Proyecto Front-End",
          descripcion: "Desarrollada con React",
          imagenUrl: Consultora,
          enlace: "https://github.com/losTinchos/Consultora",
        },
        {
          titulo: "Gestor de eventos ",
          tipo: "Proyecto Back-End",
          descripcion: "Desarrollada con React",
          imagenUrl: Consultora,
          enlace: "https://github.com/losTinchos/Consultora",
        },
        {
          titulo: "Badalona Jiu Jitsu",
          tipo: "Proyecto Front-End",
          descripcion:
            "Primera página web con cliente real. Badalona Jiu Jitsu es el gimnasio donde imparto clases de jiujitsu y decidí empezar a maquetar al completo la página, tanto para otorgarle otra plataforma digital como para aprender. Por un lado incluye los contenidos, por otro el código. Primero la prototipé en Figma y luego la organicé con HTML, CSS y Javascript. Finalmente la dividí por components y la puse en React. No está terminada.",
          imagenUrl: Badalona,
          enlace: "https://github.com/losTinchos/Consultora",
        },
        {
          titulo: "Consultoría LosTinchos",
          tipo: "Proyecto Back-End",
          descripcion:
            "El primer CRUD en Vanilla. Se trata de una aplicación Web  que permite pedir cita a los desarrolladores y equipos para solucionar problemas técnicos con la ayuda del formador o CTO. Tecnologías: HTML, CSS, Bootstrap, PHP, MySQL, GitHub. Está en producción en GH pages.",
          imagenUrl: Consultora,
          enlace: "https://github.com/losTinchos/Consultora",
        },
        {
          titulo: "Wheel of Doom TheDrunkBee",
          tipo: "Proyecto Front-End",
          descripcion:
            "The Drunk Bee fue el primer proyecto del BootCamp de Full-Stack. Consiste en una apliación Wheel Of Doom de selección de sacrificios, ambientada en las abejas y el alcohol. Se realizó en dos sprints de una semana. Tecnologías: HTML, CSS, JS, GitHub. Está en producción en GH pages.",
          imagenUrl: DrunkBee,
          enlace: "https://github.com/martindejos/TheDrunkBee",
        },
        {
          titulo: "Floristeria La Casa de las flores",
          tipo: "Proyecto Front-End",
          descripcion:
            "Siguiendo la estructura de la App de comida a domicilio, en este proyecto se utilizó Javascript de manera más completa, manipulando datos en Front. ecnologías: HTML, CSS, Javascript, GitHub, Figma, Trello. No está en producción.",
          imagenUrl: Flores,
          enlace: "https://github.com/vchacin/Floristeria-AR",
        },
        {
          titulo: "El sushi",
          tipo: "Proyecto Front-End",
          descripcion:
            "El sushi fue un proyecto de una App de comida a domicilio. Se trata de una App más desarrollada a nivel de CSS, pero sobre todo el aprendizaje fue con Javascript: recorrer arrays, imprimir en HTML, cambio de estilos y onClicks. También utilicé la estructura del Atomic Design. Tecnologías: HTML, CSS, Javascript, GitHub, Figma, Trello. No está en producción.",
            imagenUrl: Sushi,
          enlace: "https://github.com/martindejos/AppRestaurante",
        },
        {
          titulo: "Hit the Doombom",
          tipo: "Proyecto Front-End",
          descripcion:
            "Hit the Doombom fue el primer proyecto en el que usé Javascript. La App consistía en crear una batería que funcionase a tiempo real. Cada click a los botones fue dinamizado mediante event listeners. Tecnologías: HTML, CSS, Javascript, GitHub, Figma, Trello. No está en producción.",
          imagenUrl: Hit,
          enlace: "https://github.com/vchacin/Hit-the-Domboom",
        },
      ],
      tarjetas: [
        {
          titulo: "Bootcamp Full-Stack Web Development",
          descripcion: "Factoria F5 - Barcelona",
          anos: "Abril 2021 - Actualmente",
          horas: "850h",
        },
        {
          titulo: "Bootcamp Front-End Web Development",
          descripcion: "Factoria F5 - Barcelona",
          anos: "Enero 2021 - Marzo 2021",
          horas: "300h",
        },
      ],
      skills: [
        {
          tecnologia1: "HTML",
          tecnologia2: "CSS",
          tecnologia3: "Javascript",
          tecnologia4: "Bootstrap",
          tecnologia5: "Tailwinds",
        },
        {
          tecnologia1: "Saas",
          tecnologia2: "React",
          tecnologia3: "Vue",
          tecnologia4: "PHP",
          tecnologia5: "Laravel",
        },
        {
          tecnologia1: "Mysql",
          tecnologia2: "Github",
          tecnologia3: "Figma",
          tecnologia4: "Canva",
          tecnologia5: "Metodologías ágiles",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <JumbotronReact />
        <h2 className=" d-flex justify-content-center" >Skills</h2>

        <div className=" d-flex flex-column flex-sm-col flex-md-col flex-lg-row align-items-center justify-content-center mt-2">
          {this.state.skills.map((tarjeta) => (
            <Skills
              tecnologia1={tarjeta.tecnologia1}
              tecnologia2={tarjeta.tecnologia2}
              tecnologia3={tarjeta.tecnologia3}
              tecnologia4={tarjeta.tecnologia4}
              tecnologia5={tarjeta.tecnologia5}
            />
          ))}
        </div>

        <h2 className="mt-5 text-center" >Formación en desarrollo web</h2>
        <div className=" d-flex flex-sm-row flex-column align-items-center justify-content-center mt-2">
          {this.state.tarjetas.map((tarjeta) => (
            <EstudiosPersonales
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              anos={tarjeta.anos}
              horas={tarjeta.horas}
            />
          ))}
        </div>
        <h2 className="mt-5 text-center">Portfolio</h2>
        <div className="d-flex justify-content-center align-items-center flex-column mt-2 mb-5">
          {this.state.desarrolloWeb.map((desarrolloWeb) => (
            <ProyectosPersonales
              imagenUrl={desarrolloWeb.imagenUrl}
              titulo={desarrolloWeb.titulo}
              enlace={desarrolloWeb.enlace}
              descripcion={desarrolloWeb.descripcion}
              tipo={desarrolloWeb.tipo}
              
            />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Proyectos;
