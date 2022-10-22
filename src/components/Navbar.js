import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Container from 'react-bootstrap/Container';
// import 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <Navbar expand="lg" variant="light" bg="light" fixed="top" aria-controls="responsive-navbar-nav" >
      <Link to="/" className="navtitle">
        <h1>Inaia Martin</h1>
      </Link>
      <div className="navlink" >
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/aboutme">
              AboutMe
            </Link>
          </li>
          <li>
            <Link className="link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="link" to="/contactme">
              Contactme
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
