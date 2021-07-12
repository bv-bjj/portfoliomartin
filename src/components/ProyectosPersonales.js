import React from "react";
import { Card } from "react-bootstrap";

const ProyectosPersonales = (props) => (
  <Card
    style={{ width: "80%",  }}
    className="d-flex flex-col flex-sm-row mb-5 justify-content-center align-items-center shadow-lg"
  >
    <Card.Body>
      <Card.Title className="mt-2 mb-5 d-flex  h2 " style={{width: "100%", margin: "5px" }}>
        {props.titulo}
      </Card.Title>
      <Card.Text style={{ fontSize: "15px", margin: "5px" }}>
        {props.descripcion}
      </Card.Text>
      <Card.Text style={{ fontSize: "15px", margin: "5px", fontWeight: "bold" }}>
       {props.fecha}
      </Card.Text>
      <Card.Text style={{ fontSize: "15px", margin: "5px", fontWeight: "bold" }}>
        {props.tipo}
      </Card.Text>
      <a className="btn btn-success mt-3  " href={props.enlace} target="_blank">Más información</a>
    </Card.Body>
    
    <Card.Img className="d-flex justify-content-center align-items-center overflow-hidden"
      variant="top"
      src={props.imagenUrl}
      style={{ width: "10rem", margin: "7px" }}
    />
      
      
  </Card>
  
);

export default ProyectosPersonales;
