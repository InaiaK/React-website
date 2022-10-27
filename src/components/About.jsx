import React from "react";
import { Card } from "react-bootstrap";
import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";
import "./About.css";
//Assets
import Inaiapicture from "../assets/images/inaia.jpeg";
import Qrcode from "../assets/images/qrcode.png";
import Video from "../assets/video/background2.mp4";

//functional component.
function About() {
  return (
    <>
      <div className="backgroundvideo">
        <video
          className="video"
          src={Video}
          autoPlay
          loop
          muted
          style={{ position: "absolute", objectFit: "cover", zIndex: "-1" }}
        />
 <Card.Body>
            <Card.Title>Inaia Martin</Card.Title>
            <Card.Text>
              I am a dedicated professional looking for a front end developer
              role following my completion of the University of Denver’s
              FullStack BootCamp. I’m a dynamic learner (I speak native
              Portuguese, English and Spanish), and hard working (I completed
              DU’s bootcamp while working full time), and I’m excited to learn
              and grow in this new career. Currently working as a Freelance to
              improve my skills.
            </Card.Text>
          </Card.Body>
        <Card className="Cardaboutme">
          <Card.Img
            style={{ width: "15rem", border: "15" }}
            src={Inaiapicture}
          />
          <a
            href="https://docs.google.com/document/d/1yOadZ6xjOhjUliVfG67TEzYHTqOhzdbc/edit#heading=h.gjdgxs"
            className="resume"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Resume{" "}
          </a>
          <Card.Img
            style={{ width: "15rem", border: "15" }}
            variant="top"
            src={Qrcode}
          />
           <FaGithub  className="container"></FaGithub>
       <a
        href="https://github.com/InaiaK"
        className="github"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub{" "}
      </a>
      <FaLinkedin></FaLinkedin>
      <a
        href="https://www.linkedin.com/in/inaia-martin/"
        className="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Linkedin{" "}
      </a>
      <FaMailBulk></FaMailBulk> inaiakenia15@gmail.com
         
        </Card>
      </div>
    </>
  );
}

export default About;
