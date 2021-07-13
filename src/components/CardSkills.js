import React from "react";
import { Card } from "react-bootstrap";


const CardSkills = (props) => (
  <div className="d-flex justify-content-center items-center">
    <Card style={{ width: "18rem", margin: "10px", height: "18rem" }} className="shadow-lg">
      <Card.Title className="m-3 d-flex justify-content-center items-center">
        {props.tecnologia1}
      </Card.Title>
      <Card.Title className="m-3 d-flex justify-content-center items-center">
        {props.tecnologia2}
      </Card.Title>
      <Card.Title className="m-3 d-flex justify-content-center items-center">
        {props.tecnologia3}
      </Card.Title>
      <Card.Title className="m-3 d-flex justify-content-center items-center">
        {props.tecnologia4}
      </Card.Title>
      <Card.Title className="m-3 d-flex justify-content-center items-center">
        {props.tecnologia5}
      </Card.Title>

      
    </Card>
  </div>
);

export default CardSkills;