import React from "react";
import Footer from "./Footer";
import Captura from "../img/Captura.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="d-flex flex-column align-items-center mt-5">
        
         <div  style={{ width: "90%",}}>
          <h3 className="p-3 text-center lh-2">
            Hola mundo, soy Martín Madridejos, <br></br> desarrollador web
            apasionado del mundo Front End
          </h3>
          </div>
          <img
            src={Captura}
            alt="imagen"
            style={{ width: "200px", borderRadius: "100%", }} id="logoBv"
          ></img>
          <h3 className="p-3 text-center lh-1">¡Conóceme más!</h3>
        </div>
        <div className="d-flex flex-column align-items-center m-sm-5">
          <div className="d-flex flex-sm-row flex-column">
            <Button as={Link} to="/estudios" className="m-3 border-0 d-flex justify-content-center align-items-center" id="dot1">About</Button>
            <Button as={Link} to="/portfolio" className="m-3 border-0 d-flex justify-content-center align-items-center" id="dot3">Portfolio</Button>
          </div>
          <p className="mt-5 font-italic">
              “Me había levantado para irme a casa; porque ya era tarde, y todo
              estaba oscuro”, El paseo, Robert Walser.
            </p>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
