import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Col1 */}
          <div className="col">
            <h2>INAIA MARTIN</h2>
            <ul className="list">
              <li>     
        <a href="https://github.com/InaiaK" className="github" target="_blank" rel="noreferrer"> GitHub </a></li>
        <li><a href="https://www.linkedin.com/in/inaia-martin/" className="linkedin" target="_blank" rel="noreferrer"> Linkedin </a></li>
              <li>inaiakenia15@gmail.com</li>
            </ul>
          </div>
          {/* Col2 */}
          <hr></hr>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} INAIA MARTIN | All right reserved
              | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
