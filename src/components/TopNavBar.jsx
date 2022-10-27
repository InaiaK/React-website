import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./TopNavBar.css";
// Componentes
import "./Home";
import "./About";
import "./Portfolio";

function TopNavBar() {
  return (
    <Navbar fixed="top" className="Navbar" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="home">
          Inaia Martin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Link to={"about"}>About</Link>
            {/* <Nav.Link href="aboutme">AboutMe</Nav.Link> */}
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
