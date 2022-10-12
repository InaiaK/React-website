import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
       } else{
        setButton(true)
       }
  };

  window.addEventListener('resize',showButton)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          IM <i className="fab fa-typo3" />
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
            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign-up 
            </Link>
          </li>
        </ul>
        {/* STATE */}
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
