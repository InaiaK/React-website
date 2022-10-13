import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  return (
    <nav className="navbar">
      <Link to="/" className="navtitle">
        Inaia Martin
      </Link>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/aboutme">AboutMe</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contactme">Contactme</Link>
        </li>
      </ul>
    </nav>
  );
}
