import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// navbar componentes links
import Home from "./components/Navbar/Routes/Home";
import AboutMe from "./components/Navbar/AboutMe";
import Portfolio from "./components/Navbar/Portfolio";
import ContactMe from "./components/Navbar/ContactMe";
import "./App.css";

export default function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contactme" element={<ContactMe/>}/>
        </Routes>
      </Router>
  );
}

