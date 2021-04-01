import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavbarMain = () => {
  return (
    <div>
      <Navbar bbg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Impresion 3D</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Litofanias</Nav.Link>
            <Nav.Link href="#features">Placas personalizadas</Nav.Link>
            <Nav.Link href="#pricing">Otros</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
