import React, { useState } from "react";
import { CardColumns, Card, Container, Modal, Image } from "react-bootstrap";
import { galeria } from "../../../data/galeria";

const Galeria = () => {
  const [imagen, setImagen] = useState([]);
  const [show, setShow] = useState(false);
  // const [file, setFile] = useState(false);

  const handleShow = (id) => {
    const arrayFiltrado = galeria.filter((item) => item.id === id);
    setImagen(...arrayFiltrado);
    console.log(...arrayFiltrado);
    setShow(true);
  };

  // const kindFile = (id) => {

  // }

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <h2 className="text-center">Galería</h2>
      <Container>
        <CardColumns>
          {galeria.map(({ id }) => {
            return (
              <Card key={id} className="galeria-card">
                <Card.Img
                  variant="top"
                  src={`../../../assets/galeria/${id}.jpg`}
                  // src={file ? `../../../assets/galeria/${id}.jpg` : }
                  onClick={() => handleShow(id)}
                />
              </Card>
            );
          })}

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Dialog>
              <Image
                src={`../../../assets/galeria/${imagen.id}.jpg`}
                fluid
                rounded
              />
            </Modal.Dialog>
          </Modal>
        </CardColumns>
      </Container>
    </>
  );
};

export default Galeria;
