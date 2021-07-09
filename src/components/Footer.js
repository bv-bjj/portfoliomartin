import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <div className=" bg-success d-flex justify-content-center shadow-lg mt-2 ">
          <Navbar color="dark" dark>
           
            <Container className="d-md-flex flex-column text-center ">
              <NavbarBrand className="h6 small text-white" id="textoFooter">
               
                Contacto: martindejos@gmail.com
              </NavbarBrand>

             
              <div className="d-md-flex flex-row justify-content-around">
               

                

                <SocialIcon
                  url="https://www.linkedin.com/in/mart%C3%ADn-madridejos-b832a4212/"
                  className="linkedin"
                  bgColor="white"
                  target="_blank"
                  style={{ height: 25, width: 25, margin: "10px" }}
                  style={{ height: 25, width: 25, margin: "5px" }}
                />
              </div>
            </Container>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;

