import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
// import Video from "../src/assets/video/Floor - 1662.mp4";

// imported functional components.
import TopNavBar from "./components/TopNavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

//Routes working.

function App() {
  return (
    <>
  
      <div>
        <Router>    
          <TopNavBar />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contactme" element={<ContactMe />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
