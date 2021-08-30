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
          descripcion: "DoggyF is a community of dog owners and walkers, completely free to use. Users can post advertisements and contact other users to proceed with the exchange. The application has Social Network and Content Management features. It is developed with Mysql + Laravel / Sanctum + Vue / Vuex, with state management, complex functions and APIs. It is not deployed. ",
          imagenUrl: DoggyF,
          enlace: "https://github.com/MuyDiversos/Vue-DoggyF",
        },
        {
          titulo: "Portfolio personal",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Bootstrap, Javascript, React, GitHub, Figma.",
          descripcion: "Portfolio developed in React. It was created with the idea of ​​using it as a CV and putting all my projects together. It is deployed on Netlify.",
          imagenUrl: PortfolioFoto,
          enlace: "https://github.com/martindejos/portfoliomartin",
        },
        {
          titulo: "Agorax",
          tipo: "Back-End.",
          tecnologia: "HTML, CSS, Tailwinds, Laravel, Blade, GitHub, Figma.",
          descripcion: "Event management and creation app developed with Laravel + Blade, carried out in 2 sprints of 2 weeks. Project to delve into MVC architecture. The App has three types of users (anonymous, registered and admins) with different skills. The admin CRUDs the events and the registered ones can sign up. Finally, we start working with API's. It is deployed on Heroku.",
          imagenUrl: Agorax,
          enlace: "https://github.com/Diversxs/AgoraxDEV",
        },
        {
          titulo: "Badalona Jiu Jitsu",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Bootstrap, Javascript, React, GitHub, Figma.",
          descripcion:
            "First web page with real client. Badalona Jiu Jitsu is the gym where I teach jiujitsu classes and I decided to start designing the entire page, both to give it another digital platform and to learn. On the one hand it includes the contents, on the other the code. First I prototyped it in Figma and then I organized it with HTML, CSS and Javascript. Finally I divided it by components and put it in React. ",
          imagenUrl: Badalona,
          enlace: "https://github.com/martindejos/Badalonajiujitsu",
        },
        {
          titulo: "Consultoría LosTinchos",
          tipo: "Back-End.",
          tecnologia: "HTML, CSS, Bootstrap, PHP, MySQL, GitHub, Figma, Trello.",
          descripcion:
            "The first CRUD in Vanilla. It is a Web application that allows developers and teams to request an appointment to solve technical problems with the help of the trainer or CTO. It is deployed on GH pages.",
          imagenUrl: Consultora,
          enlace: "https://github.com/losTinchos/Consultora",
        },
        {
          titulo: "Wheel of Doom TheDrunkBee",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "The Drunk Bee was the first Full-Stack BootCamp project. It consists of a Wheel Of Doom application of selection of sacrifices, set in bees and alcohol. It was done in two one-week sprints.",
          imagenUrl: DrunkBee,
          enlace: "https://github.com/martindejos/TheDrunkBee",
        },
        {
          titulo: "Floristeria La Casa de las flores",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "Following the structure of the Food Delivery App, in this project Javascript was used more extensively, manipulating data in Front. It is not in production.",
          imagenUrl: Flores,
          enlace: "https://github.com/vchacin/Floristeria-AR",
        },
        {
          titulo: "El sushi",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "The sushi was a project of a food delivery app. It is a more developed App at the CSS level, but above all the learning was with Javascript: manipulating arrays, printing in HTML, changing styles and onClicks. I also used the Atomic Design structure. ",
            imagenUrl: Sushi,
          enlace: "https://github.com/martindejos/AppRestaurante",
        },
        {
          titulo: "Hit the Doombom",
          tipo: "Front-End.",
          tecnologia: "HTML, CSS, Javascript, GitHub, Figma, Trello.",
          descripcion:
            "Hit the Doombom was the first project I used Javascript on. The App consisted of creating a battery that worked in real time. Each click to the buttons was dynamized by event listeners. ",
          imagenUrl: Hit,
          enlace: "https://github.com/vchacin/Hit-the-Domboom",
        },
      ],
      tarjetas: [
        {
          titulo: "Bootcamp Full-Stack Web Development",
          descripcion: "Factoría F5, Barcelona",
          anos: "April 2021 - Now",
          horas: "850h",
        },
        {
          titulo: "Bootcamp Front-End Web Development",
          descripcion: "Factoria F5, Barcelona",
          anos: "January 2021 - March 2021",
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

        <h2 className="mt-5 text-center" >Training in web development</h2>
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
