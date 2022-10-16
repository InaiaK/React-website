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
              <li>Link github</li>
              <li>Link linkedin</li>
              <li>email</li>
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
