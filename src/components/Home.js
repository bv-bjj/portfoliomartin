import React from "react";
import Footer from "./Footer";
import Captura from "../img/Captura.png";


class Home extends React.Component {
  render() {
    return (
      <React.Fragment  >
        
        <div className="d-flex flex-column align-items-center mt-3 mt-sm-5 ">
        
         <div  style={{ width: "90%",}}>
          <h5 className="p-1 text-center lh-2">
          Martín Madridejos, Full-Stack web developer focused on Front-End
          </h5>
          </div>
          <img
            src={Captura}
            alt="imagen"
            style={{ width: "150px", borderRadius: "100%", marginTop: "30px" }} id="logoBv" className="shadow-lg"
          ></img>
         
        </div>
        <div className="d-flex flex-column align-items-center m-sm-5 overflow-hidden">
          
          <p className="m-3 mt-5  font-italic " style={{ marginBottom: "50px" }} id="fraseHome">
              “I had risen up, to go home; for it was late now, and everything was dark”, The walk, Robert Walser.
            </p>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
