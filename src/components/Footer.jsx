import React from "react";
import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

//functional component.
function Footer() {
  return (
    // <div className="main-footer">
    // <div className="container">
    //   INAIA MARTIN
    //   <FaGithub  className="container"></FaGithub>
    //   <a
    //     href="https://github.com/InaiaK"
    //     className="github"
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     {" "}
    //     GitHub{" "}
    //   </a>
    //   <FaLinkedin></FaLinkedin>
    //   <a
    //     href="https://www.linkedin.com/in/inaia-martin/"
    //     className="linkedin"
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     {" "}
    //     Linkedin{" "}
    //   </a>
    //   <FaMailBulk></FaMailBulk> inaiakenia15@gmail.com
    // </div>
    // <hr></hr>
    <div className="container">
      <p>
        &copy;{new Date().getFullYear()} INAIA MARTIN | All right reserved |
        Privacy
      </p>
    </div>
  );
}

export default Footer;
