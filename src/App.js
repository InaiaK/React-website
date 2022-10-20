import React from "react";
import Navbar from "./components/Navbar";
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// navbar componentes links
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div> this is where an app should go </div>
      {/* // <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/contactme" element={<ContactMe />} /> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}
