import React from "react";
import { Card } from "react-bootstrap";


const CardFormacionWeb = (props) => (
  <div className="d-flex justify-content-center items-center">
    <Card style={{ width: "18rem", margin: "10px", height: "18rem" }} className="shadow-lg">
      <Card.Title className="m-3 d-flex justify-content-center items-center">
        {props.titulo}
      </Card.Title>

      <Card.Body>
         <Card.Text className="text-dark pr-2" id="font">
         <b>Descripción: </b>{props.descripcion}
          
        </Card.Text> 
        <Card.Text className="text-dark pr-2" id="font">
          <b>Fecha: </b> {props.anos}
          
        </Card.Text> 
        <Card.Text className="text-dark pr-2" id="font">
        <b>Horas: </b> {props.horas}
          
        </Card.Text> 
        
      </Card.Body>
    </Card>
  </div>
);

export default CardFormacionWeb;