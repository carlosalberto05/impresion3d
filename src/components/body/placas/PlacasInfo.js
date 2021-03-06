import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import uno from "../../../assets/products/modelobruno.png";
import dos from "../../../assets/products/tin1.png";

import "../Screens.css";

const PlacasInfo = () => {
  return (
    <div className="mt-5">
      <h4 className="text-center">Placas personalizadas</h4>

      <Jumbotron className="jm-carousel">
        <Container>
          <Row className="mt-5">
            <Col lg={6} sm={12}>
              <p className="text-justify">
                Realizamos placas con el nombre de tu mascota y con un número
                teléfonico. El modelo del huesito cuenta con las siguientes
                medidas y precios:
              </p>

              <p className="text-justify ">
                Pequeña - 60x24mm - Precio: $100 pesos MX
              </p>
              <p className="text-justify">
                Mediana - 75x30mm - Precio: $115 pesos MX
              </p>
              <p className="text-justify ">
                Grande - 90x30mm - Precio: $130 pesos MX
              </p>
              <p className="text-justify">
                En el modelo circular las medidas son: 36x36mm
              </p>
            </Col>

            <Col lg={6} sm={12}>
              <Image src={uno} fluid rounded />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
              className="col-sm-order-first"
            >
              <Image src={dos} fluid rounded />
            </Col>
            <Col
              lg={{ span: 6, order: 2 }}
              md={{ span: 6, order: 2 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className="col-sm-order-last"
            >
              <h3 className="mb-4 text-center">Tecnologías</h3>
              <p className="text-justify">
                Realizamos el diseño de las placas con software de modelado 3D.
                Posteriormente se utiliza un laminador y la tecnología de
                impresión 3D para materializar las placas.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default PlacasInfo;
