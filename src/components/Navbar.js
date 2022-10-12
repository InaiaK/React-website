import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          INAIA <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        Hello!
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutme" className="nav-links" onClick={closeMobileMenu}>
            AboutMe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactme" className="nav-links" onClick={closeMobileMenu}>
              ContactMe 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="//signup" className="nav-links" onClick={closeMobileMenu}>
              Sign-up 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
