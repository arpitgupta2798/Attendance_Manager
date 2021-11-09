import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand>Attendance Manager</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
