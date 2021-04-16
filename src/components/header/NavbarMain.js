import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarMain = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand  font-weight-bold h5 mr-5 " to="/">
            Inova3D
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link h5 mr-5 "
              exact
              to="/litofanias"
            >
              Litofanías
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link h5 mr-5 "
              exact
              to="placas"
            >
              Placas personalizadas
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link h5 mr-5 "
              exact
              to="otros"
            >
              Otros
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
