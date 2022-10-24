import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "react-bootstrap";


// imported functional components. 
import TopNavBar from "./components/TopNavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


//Routes working. 

function App (){
    return (
      <>
      <TopNavBar/>
    <div>
      <Router>
         <Routes>
          <Route path="home" element={<Home/>} />
         <Route path="aboutme" element={<AboutMe />} /> 
         <Route path="portfolio" element={<Portfolio />} /> 
         <Route path="contactme" element={<ContactMe />} /> 
          </Routes>
      </Router>
      </div>
      <Footer/>
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




