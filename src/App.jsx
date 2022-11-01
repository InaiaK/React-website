import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imported functional components.
import TopNavBar from "./components/TopNavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

// Routes working.
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
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
