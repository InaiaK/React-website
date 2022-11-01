import React from "react";
import "./Home.css";
// Assets
import Video from "../assets/video/background2.mp4";

// Functional component.
function Home() {
  return (
    <div className="header">
      <video className="video" src={Video} autoPlay loop muted />
      <h1 className="home-title">Inaia Martin</h1>
      <h2 className="home-subtitle"> Software Engineer</h2>
    </div>
  );
}

export default Home;
