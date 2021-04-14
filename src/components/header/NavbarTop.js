import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const NavbarTop = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Text>
          <a
            href="https://www.facebook.com/Litofan%C3%ADas-3D-107902834449557"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none "
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            <strong>Visitanos en Facebook</strong>
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a
            href="https://m.me/litofaniasyplacas3D"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} className="mr-2" />
            Envíanos un mensaje a Facebook
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
          Carrito
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
