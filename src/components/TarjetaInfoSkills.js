import React from "react";
import SkillsPersonales from "./SkillsPersonales";
import LogoJavascript from "../img/javascript.png";
import LogoHtml from "../img/html.png";
import LogoCss from "../img/css.png";
import LogoReact from "../img/react.png";
import LogoGit from "../img/github.png";
import LogoBoostrap from "../img/bootstrap.png";
import LogoLaravel from "../img/laravel.png";
import LogoPhp from "../img/php.png";
import LogoFigma from "../img/figma.png";
import LogoTrello from "../img/trello.png";
import LogoTailwinds from "../img/tailwinds.png";
import LogoSaas from "../img/saas.png";
import LogoVue from "../img/vue.png";
import LogoMysql from "../img/mysql.png";

class Tarjeta extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo: "HTML",
          imagenUrl: LogoHtml,
          descripcion: "5 meses",
        },
        {
          titulo: "CSS",
          imagenUrl: LogoCss,
          descripcion: "5 meses",
        },

        {
          titulo: "Javascript",
          imagenUrl: LogoJavascript,
          descripcion: "4 meses",
        },

        {
          titulo: "React",
          imagenUrl: LogoReact,
          descripcion: "1 mes",
        },

        {
          titulo: "GitHub",
          imagenUrl: LogoGit,
          descripcion: "5 meses",
        },

        {
          titulo: "Bootstrap",
          imagenUrl: LogoBoostrap,
          descripcion: "2 meses",
        },
        {
          titulo: "Laravel",
          imagenUrl: LogoLaravel,
          descripcion: "2 meses",
        },
        {
          titulo: "PHP",
          imagenUrl: LogoPhp,
          descripcion: "2 meses",
        },

        {
          titulo: "Figma",
          imagenUrl: LogoFigma,
          descripcion: "5 meses",
        },

        {
          titulo: "Trello",
          imagenUrl: LogoTrello,
          descripcion: "5 meses",
        },

        {
          titulo: "Tailwinds",
          imagenUrl: LogoTailwinds,
          descripcion: "1 meses",
        },

        {
          titulo: "Saas",
          imagenUrl: LogoSaas,
          descripcion: "1 mes",
        },

        {
          titulo: "Vue",
          imagenUrl: LogoVue,
          descripcion: "1 mes",
        },

        {
          titulo: "Mysql",
          imagenUrl: LogoMysql,
          descripcion: "1 mes",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
       

        <div id="container">
          {this.state.tarjetas.map((tarjeta) => (
            <SkillsPersonales
              imagenUrl={tarjeta.imagenUrl}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Tarjeta;
