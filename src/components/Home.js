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
          <h4 className="p-1 text-center lh-2">
           Martín Madridejos, desarrollador web full-stack <br></br>
            Apasionado del mundo Front End
          </h4>
          </div>
          <img
            src={Captura}
            alt="imagen"
            style={{ width: "120px", borderRadius: "100%", marginBottom: "10px" }} id="logoBv"
          ></img>
         
        </div>
        <div className="d-flex flex-column align-items-center m-sm-5">
          <div className="d-flex flex-sm-row flex-column">
            <Button as={Link} to="/estudios" className="m-3 border-0 d-flex justify-content-center align-items-center" id="dot1">About</Button>
            <Button as={Link} to="/portfolio" className="m-3 border-0 d-flex justify-content-center align-items-center" id="dot3">Portfolio</Button>
          </div>
          <p className="m-3 mt-5 font-italic">
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
