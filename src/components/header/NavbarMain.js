import React from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link className="navbar-brand" to="/">
            Inova3D
          </Link>

          <Nav className="ml-auto">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/litofanias"
            >
              Litofanías
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="placas"
            >
              Placas personalizadas
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="otros"
            >
              Otros
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
