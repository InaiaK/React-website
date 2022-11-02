import React from "react";
import { Card } from "react-bootstrap";
//import { FaMailBulk, FaLinkedin, FaGithub, FaSave } from "react-icons/fa";
import "./About.css";
// Assets
import INAIA_IMG from "../assets/images/inaia.jpeg";
import MERN from "../assets/images/MERN1.png";
// import QR_CODE from "../assets/images/qrcode.png";
//import VIDEO from "../assets/video/background2.mp4";

// Functional component.

const About = () => {
  const aboutData = [
    {
      img: MERN,
      altText: "image of MERN stack as my skills",
      title: "Skills",
      description: "skills",
    },
    {
      img: INAIA_IMG,
      altText: "image of MERN stack as my skills",
      title: "Skills",
      description: "skills",
    },
    {
      img: MERN,
      altText: "image of MERN stack as my skills",
      title: "Skills",
      description: "skills",
    },
  ];

  const renderAbout = ({ img, altText, title, description }, index) => {
    return (
      <Card key={`about-card-${index}`} className="about-box">
        <Card.Img src={img} alt={altText} />
        <Card.Body className="card-body">
          {title}
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid"> {aboutData.map(renderAbout)}</div>;
};

export default About;
