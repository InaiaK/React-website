import React from "react";
import "./Home.css";
import Video from "../assets/video/background2.mp4";

//functional component.
function Home() {
  return (
    <div className="header">
      <video
        className="video"
        src={Video}
        autoPlay
        loop
        muted
        style={{ position: "absolute", objectFit: "cover", zIndex: "-1" }}
      />
      <h1>Inaia Martin</h1>
      <h2> Software Engineer</h2>
    </div>
  );
}

export default Home;
