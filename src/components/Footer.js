import React from "react";
import {
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Col1 */}
          <div className="col">
            INAIA MARTIN
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
          </div>
           <hr></hr>
          <div className="footer-allright">
            <p>
              &copy;{new Date().getFullYear()} INAIA MARTIN | All right reserved
              | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
