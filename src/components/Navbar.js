import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";

import Portfolio from "./Portfolio";
import Home from "./Home";
import Bv from "../img/bv.png";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav
            variant="tabs"
            defaultActiveKey="/home"
            className="justify-content-center hg p-2 bg-success align-items-center  shadow-lg"
          >
            
            <Nav.Item>
              
              <Nav.Link
                as={Link}
                to="/"
                className="text-white "
                id="nav1"
              >
                <img
                src={Bv}
                as={Link}
                to="/"
                style={{ width: "30px", borderRadius: "100%" }}
              ></img>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/portfolio" className="text-white">
                Portfolio
              </Nav.Link>
            </Nav.Item>
            
             <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-white"
                id="nav1"
              >
                About
              </Nav.Link>
            </Nav.Item>
            
            
          </Nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Navbar;
