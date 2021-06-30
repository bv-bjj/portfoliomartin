import React from "react";
import { Card } from "react-bootstrap";

const SkillsPersonales = (props) => (
  
    <Card style={{ width: "6rem", margin: "10px" }} className="d-flex justify-content-center align-items-center ">
      <Card.Img variant="top" src={props.imagenUrl} style={{ width: "3rem", marginTop: "7px" }} />
      <Card.Title className="m-3 d-flex justify-content-center items-center h5 small">
        {props.titulo}
      </Card.Title>
      <Card.Text style={{ fontSize: "12px", margin: "5px" }}>
      {props.descripcion}
      </Card.Text>
    </Card>
  
);

export default SkillsPersonales;
