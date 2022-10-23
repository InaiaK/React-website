import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap";


// import functional components. 

import TopNavBar from "./components/TopNavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
// import Portfolio from "./components/Portfolio";
// import Footer from "./components/Footer";

//FIX PATH 

function App (){
    return (
      <>
      <TopNavBar/>
    <div>
      <Router>
         <Routes>
          <Route path="home" element={<Home/>} />
         <Route path="aboutme" element={<AboutMe />} /> 
        </Routes>
      </Router>
      </div>
      </>
  );
};

export default App;




// function App() {
//   return (
//     <> 
// <TopNavBar/>

//       <div>
//         {" "}    
//         this is where an app should go
//         {/* <Navbar/> */}
//           <Home />
//           <AboutMe/>
//           <Portfolio/>
//           <Footer/>
      
//       </div>
//     </>
//   );
// }

// export default App;




// import Navbar from "./components/Navbar";
//import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";


//       {/* // <Navbar /> */}
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutme" element={<AboutMe />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//        <Route path="/contactme" element={<ContactMe />
//       </Routes>
//  <Footer/>
//     </Router> */}