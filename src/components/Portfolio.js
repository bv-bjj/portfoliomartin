import React from "react";
import CardSkills from "./CardSkills";
import Footer from "./Footer";
import CardPortfolio from "./CardPortfolio";
import CardFormacionWeb from "./CardFormacionWeb";
import JumbotronReact from "./JumbotronReact";
import Badalona from "../img/Badalona.png";
import DrunkBee from "../img/drunkbee.png";
import Consultora from "../img/consultora.png";
import Flores from "../img/flores.png";
import Hit from "../img/hit.png";
import Sushi from "../img/sushi.png";
import Agorax from "../img/Agorax.png";
import PortfolioFoto from "../img/portfolio.png";
import DoggyF from "../img/doggyF.png";


class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      desarrolloWeb: [
        {
          titulo: "DoggyF",
          tipo: "Front-End & Back-End",
          tecnologia: "HTML, CSS, Bootstrap, Javascript/Vue/VueX, PHP/Laravel, Mysql, GitHub, Figma.",
          descripcion: "DoggyF es una comunidad de dueños de perros y paseadores, de uso totalmente gratuito. Los usuarios pueden publicar anuncios y contactar con otros usuarios para proceder en el intercambio. La aplicación tiene características de Red Social y de Gestión de contenidos. Está desarrollada con Mysql + Laravel/Sanctum + Vue/Vuex, con manejo de estado, funciones complejas y API’s. No está en producción. ",
          imagenUrl: DoggyF,
          enlace: "https://github.com/MuyDiversos/Vue-DoggyF",
        },
        {
          titulo: "Portfolio personal",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Bootstrap, Javascript, React, GitHub, Figma.",
          descripcion: "Portfolio desarrollado en React. Fue creado con la idea de usarlo como CV y juntar todos mis proyectos. Está en producción en Netlify.",
          imagenUrl: PortfolioFoto,
          enlace: "https://github.com/martindejos/portfoliomartin",
        },
        {
          titulo: "Agorax",
          tipo: "Back-End.",
          tecnologia: "HTML, CSS, Tailwinds, Laravel, Blade, GitHub, Figma.",
          descripcion: "App de gestión y creación de eventos desarrollada con Laravel + Blade, realizada en 2 sprints de 2 semanas. Proyecto para profundizar en la arquitectura MVC. La App dispone de tres tipos de usuarios (anónimos, registrados y admins) con habilidades diferentes. El admin hace CRUD de los eventos y los registrados pueden apuntarse. Por último, comenzamos a trabajar con API's. Está en producción en Heroku.",
          imagenUrl: Agorax,
          enlace: "https://github.com/Diversxs/AgoraxDEV",
        },
        {
          titulo: "Badalona Jiu Jitsu",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Bootstrap, Javascript, React, GitHub, Figma.",
          descripcion:
            "Primera página web con cliente real. Badalona Jiu Jitsu es el gimnasio donde imparto clases de jiujitsu y decidí empezar a maquetar al completo la página, tanto para otorgarle otra plataforma digital como para aprender. Por un lado incluye los contenidos, por otro el código. Primero la prototipé en Figma y luego la organicé con HTML, CSS y Javascript. Finalmente la dividí por components y la puse en React. No está terminada.",
          imagenUrl: Badalona,
          enlace: "https://github.com/martindejos/Badalonajiujitsu",
        },
        {
          titulo: "Consultoría LosTinchos",
          tipo: "Back-End.",
          tecnologia: "HTML, CSS, Bootstrap, PHP, MySQL, GitHub, Figma, Trello.",
          descripcion:
            "El primer CRUD en Vanilla. Se trata de una aplicación Web  que permite pedir cita a los desarrolladores y equipos para solucionar problemas técnicos con la ayuda del formador o CTO. Está en producción en GH pages.",
          imagenUrl: Consultora,
          enlace: "https://github.com/losTinchos/Consultora",
        },
        {
          titulo: "Wheel of Doom TheDrunkBee",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "The Drunk Bee fue el primer proyecto del BootCamp de Full-Stack. Consiste en una apliación Wheel Of Doom de selección de sacrificios, ambientada en las abejas y el alcohol. Se realizó en dos sprints de una semana. Está en producción en GH pages.",
          imagenUrl: DrunkBee,
          enlace: "https://github.com/martindejos/TheDrunkBee",
        },
        {
          titulo: "Floristeria La Casa de las flores",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "Siguiendo la estructura de la App de comida a domicilio, en este proyecto se utilizó Javascript de manera más completa, manipulando datos en Front. No está en producción.",
          imagenUrl: Flores,
          enlace: "https://github.com/vchacin/Floristeria-AR",
        },
        {
          titulo: "El sushi",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "El sushi fue un proyecto de una App de comida a domicilio. Se trata de una App más desarrollada a nivel de CSS, pero sobre todo el aprendizaje fue con Javascript: recorrer arrays, imprimir en HTML, cambio de estilos y onClicks. También utilicé la estructura del Atomic Design. No está en producción.",
            imagenUrl: Sushi,
          enlace: "https://github.com/martindejos/AppRestaurante",
        },
        {
          titulo: "Hit the Doombom",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "Hit the Doombom fue el primer proyecto en el que usé Javascript. La App consistía en crear una batería que funcionase a tiempo real. Cada click a los botones fue dinamizado mediante event listeners. No está en producción.",
          imagenUrl: Hit,
          enlace: "https://github.com/vchacin/Hit-the-Domboom",
        },
      ],
      tarjetas: [
        {
          titulo: "Bootcamp Full-Stack Web Development",
          descripcion: "Factoría F5, Barcelona",
          anos: "Abril 2021 - Actualmente",
          horas: "850h",
        },
        {
          titulo: "Bootcamp Front-End Web Development",
          descripcion: "Factoria F5, Barcelona",
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
          tecnologia6: "Saas",
        },
        {
          tecnologia1: "React",
          tecnologia2: "Vue",
          tecnologia3: "PHP",
          tecnologia4: "Laravel",
          tecnologia5: "Mysql",
          tecnologia6: "Diseño UX/UI",
        },
        {
          tecnologia1: "Github",
          tecnologia2: "Figma",
          tecnologia3: "Canva",
          tecnologia4: "Wordpress/Elementor",
          tecnologia5: "Trello",
          tecnologia6: "Metodologías agile y Scrum",
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
            <CardSkills
              tecnologia1={tarjeta.tecnologia1}
              tecnologia2={tarjeta.tecnologia2}
              tecnologia3={tarjeta.tecnologia3}
              tecnologia4={tarjeta.tecnologia4}
              tecnologia5={tarjeta.tecnologia5}
              tecnologia6={tarjeta.tecnologia6}
            />
          ))}
        </div>

        <h2 className="mt-5 text-center" >Formación en desarrollo web</h2>
        <div className=" d-flex flex-sm-row flex-column align-items-center justify-content-center mt-2">
          {this.state.tarjetas.map((tarjeta) => (
            <CardFormacionWeb
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
            <CardPortfolio
              imagenUrl={desarrolloWeb.imagenUrl}
              titulo={desarrolloWeb.titulo}
              enlace={desarrolloWeb.enlace}
              descripcion={desarrolloWeb.descripcion}
              tipo={desarrolloWeb.tipo}
              tecnologia={desarrolloWeb.tecnologia}
              
            />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Portfolio;
