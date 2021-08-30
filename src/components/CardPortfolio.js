import React from "react";
import { Card } from "react-bootstrap";

const CardPortfolio = (props) => (
  <Card
    style={{ width: "80%",  }}
    className="d-flex flex-col flex-sm-row mb-5  align-items-center shadow-lg"
  >
    <Card.Body >
      <Card.Title className=" mb-4 d-flex  h2 " style={{width: "100%", margin: "5px" }}>
        {props.titulo}
      </Card.Title>
      <Card.Text style={{ fontSize: "15px", margin: "5px" }}>
        <b>Description:</b> {props.descripcion}
      </Card.Text>
      <Card.Text style={{ fontSize: "15px", margin: "5px",  }}>
       {props.fecha}
      </Card.Text>
      <Card.Text style={{ fontSize: "15px", margin: "5px",  }}>
      <b>Type:</b> {props.tipo}
      </Card.Text>
      <Card.Text style={{ fontSize: "15px", margin: "5px",  }}>
      <b>Technologies:</b> {props.tecnologia}
      </Card.Text>
      <a className="btn btn-success mt-3  " href={props.enlace} target="_blank">More information</a>
    </Card.Body>
    
    <Card.Img className="d-flex justify-content-center align-items-center overflow-hidden"
      variant="top"
      src={props.imagenUrl}
      style={{ width: "10rem", margin: "7px" }}
    />
      
      
  </Card>
  
);

export default CardPortfolio;
