import React from "react";
import { FaMailBulk, FaLinkedin, FaGithub, FaSave } from "react-icons/fa";
import "./About.css";
//Assets
import Inaiapicture from "../assets/images/inaia.jpeg";
import Qrcode from "../assets/images/qrcode.png";
import Video from "../assets/video/background2.mp4";

//functional component.
function About() {
  return (
    <>
      <div>
        <video
          className="backgroundvideo"
          src={Video}
          autoPlay
          loop
          muted
          style={{ position: "absolute", objectFit: "cover", zIndex: "-1" }}
        />
        <section className="body">
          <h1>Inaia Martin</h1>
          <p>
            I am a dedicated professional looking for a front end developer role
            following my completion of the University of Denver’s FullStack
            BootCamp. I’m a dynamic learner (I speak native Portuguese, English
            and Spanish), and hard working (I completed DU’s bootcamp while
            working full time), and I’m excited to learn and grow in this new
            career. Currently working as a Freelance to improve my skills.
          </p>
          <img className="img-qrcode" src={Qrcode} alt="Qrcode" />
          <img className="img-about-me" src={Inaiapicture} alt="Profile" />

          <ul>
            {" "}
            Contact
            <li>
              {" "}
              <FaSave></FaSave>
              <a
                href="https://docs.google.com/document/d/1yOadZ6xjOhjUliVfG67TEzYHTqOhzdbc/edit#heading=h.gjdgxs"
                className="resume"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              {" "}
              <FaGithub></FaGithub>
              <a
                href="https://github.com/InaiaK"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                GitHub{" "}
              </a>
            </li>
            <li>
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
            </li>
            <li>
              <FaMailBulk></FaMailBulk> inaiakenia15@gmail.com
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default About;
