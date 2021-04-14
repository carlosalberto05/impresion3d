import React from "react";
import { Jumbotron, CardColumns, Card } from "react-bootstrap";

const Galeria = () => {
  return (
    <>
      <h4 className="text-center">Galería</h4>
      <Jumbotron>
        <CardColumns>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Jumbotron>
    </>
  );
};

export default Galeria;
