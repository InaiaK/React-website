import React from "react";
import Home from "./components/Home";
import TopNavBar from "./components/TopNavBar";
import AboutMe from "./components/AboutMe";
import "./components/TopNavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <> 
    <TopNavBar/>

      <div>
        {" "}
        this is where an app should go
        {/* <Navbar/> */}
        <AboutMe/>
        <Home />
      </div>
    </>
  );
}

export default App;

// import Navbar from "./components/Navbar";
//import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// navbar componentes links

// import AboutMe from "./components/AboutMe";
// import Portfolio from "./components/Portfolio";
// import ContactMe from "./components/ContactMe";
// import Footer from "./components/Footer";

//       {/* // <Navbar /> */}
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutme" element={<AboutMe />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//        <Route path="/contactme" element={<ContactMe />
//       </Routes>
//  <Footer/>
//     </Router> */}