import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const NavbarTop = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Text>Envíos gratis</Navbar.Text>
        <Navbar.Text>Correo</Navbar.Text>
        <Navbar.Text>
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
          Carrito
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
