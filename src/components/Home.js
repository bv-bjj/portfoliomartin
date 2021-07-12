import React from "react";
import Footer from "./Footer";
import Captura from "../img/Captura.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="d-flex flex-column align-items-center mt-3">
        
         <div  style={{ width: "90%",}}>
          <h5 className="p-1 text-center lh-2">
           Martín Madridejos, desarrollador web full-stack <br></br>
            Apasionado del mundo Front End
          </h5>
          </div>
          <img
            src={Captura}
            alt="imagen"
            style={{ width: "150px", borderRadius: "100%", marginTop: "30px" }} id="logoBv"
          ></img>
         
        </div>
        <div className="d-flex flex-column align-items-center m-sm-5">
          
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
