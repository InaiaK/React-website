import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

// navbar componentes links
 import Home from "./components/Home";
 import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
// import ContactMe from "./components/Navbar/ContactMe";

export default function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          {/* <Route path="/contactme" element={<ContactMe/>}/> */}
        </Routes>
      </Router>
  );
}

