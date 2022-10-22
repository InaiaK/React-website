import React from "react";
import {Container, Navbar,Nav} from "react-bootstrap";
import  "./Home";
import "./AboutMe";


   
function TopNavBar() {
  return (
    <Navbar fixed="top" className="Navbar" expand="lg" color="pink">
      <Container>
        <Navbar.Brand href="#home">Inaia Martin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">AboutMe</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contactme">ContactMe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
    
export default TopNavBar;


// import "./Navbar.css";
// import Container from 'react-bootstrap/Container';
//import 'react-bootstrap/Nav';
    // <Navbar expand="lg" variant="light" bg="light" fixed="top" aria-controls="responsive-navbar-nav" >
    //   <Link to="/" className="navtitle">
    //     <h1>Inaia Martin</h1>
    //   </Link>
    //   <div className="navlink" >
    //     <ul>
    //       <li>
    //         <Link className="link" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/aboutme">
    //           AboutMe
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/portfolio">
    //           Portfolio
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/contactme">
    //           Contactme
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </Navbar>