import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import uno from "../../../assets/products/lito1.JPG";
import dos from "../../../assets/products/tin1.png";

import "../Screens.css";

const PlacasInfo = () => {
  return (
    <div className="mt-5">
      <h4 className="text-center">LitoBox</h4>

      <Jumbotron className="jm-carousel">
        <Container>
          <Row className="mt-5">
            <Col lg={6} sm={12}>
              <p className="text-justify">
                Realizamos lámparas personalizadas con 4 imagenes que sean de tu
                elección y las plasmamos en una hermosa caja blanca que al
                iluminarse revela una experiencia única ya que proyecta lo que
                es importante para ti, sin duda es un excelente detalle
                personalizado.
              </p>

              <p className="text-justify ">
                La lámpara LitoBox tiene unas medidas de: 12cm x 12cm x 12cm
              </p>
              <p className="text-justify">Y tiene un precio: $800 pesos MX</p>
              <p className="text-justify ">
                Esta lámpara contiene conector del tipo E27 por lo que puedes
                reemplazar el foco cuando quieras, ya que es del tipo de
                conector que se utilizan en la mayoría de las casas.
              </p>
              <p className="text-justify">
                Este modelo también incluye un foco RGB de 5W con 15 diferentes
                colores que puedes cambiar con su control remoto también
                incluido.
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
