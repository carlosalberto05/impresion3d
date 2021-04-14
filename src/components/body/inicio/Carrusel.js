import React from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";
import { carousel } from "../../../data/carousel";
import "../Screens.css";
import "./Inicio.css";

const Carrusel = () => {
  return (
    <div>
      <Jumbotron className="jm-carousel mt-5">
        <Container>
          <Carousel>
            {carousel.map((item) => {
              return (
                <Carousel.Item
                  key={item.id}
                  interval={2000}
                  className="carousel-item"
                >
                  <img className="fluid w-100 " src={item.img} alt="Placas" />
                  <Carousel.Caption>
                    <h3 className="caption-h3">{item.message}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Carrusel;
