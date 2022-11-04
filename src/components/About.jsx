import React from "react";
import { Card } from "react-bootstrap";
import { FaMailBulk, FaLinkedin, FaGithub, FaSave } from "react-icons/fa";
import "./About.css";
// Assets
import INAIA_IMG from "../assets/images/inaia.jpeg";
import CONTACT from "../assets/images/contact.webp";
import SKILL from "../assets/images/skillimg.jpg";
import VIDEO from "../assets/video/background2.mp4";

// Functional component.

const About = () => {
  const aboutData = [
    {
      img: SKILL,
      altText: "image of MERN stack as my skills",
      title: " TECHNICAL Skills",
      description: (
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Heroku</li>
        </ul>
      ),
    },
    {
      img: INAIA_IMG,
      altText: "image of MERN stack as my skills",
      title: "Hey there, I'm Inaia Martin",
      description:
        "I am a dedicated professional looking for a front end developer role following my completion of the University of Denver’s FullStack BootCamp. I’m a dynamic learner (I speak native Portuguese, English and Spanish), and hard working (I completed DU’s bootcamp while working full time), and I’m excited to learn and grow in this new career. Currently working as a Freelance to improve my skills.",
    },
    {
      img: CONTACT,
      altText: "image of MERN stack as my skills",
      title: "",
      description: (
        <ul>
          <li>
            <FaSave></FaSave>
            <a
              href="file:///C:/Users/Owner/Downloads/Inaia%20Martin%20(m).docx%20(2).pdf"
              className="resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <FaGithub></FaGithub>
            <a
              href="https://github.com/InaiaK"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
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
              Linkedin
            </a>
          </li>
          <li>
            <FaMailBulk></FaMailBulk> inaiakenia15@gmail.com
          </li>
        </ul>
      ),
    },
  ];

  const renderAbout = ({ img, altText, title, description }, index) => {
    return (
      <Card key={`about-card-${index}`} className="about-box">
        <Card.Img className="about-img" src={img} alt={altText} />
        <Card.Body className="card-body">
          {title}
          <Card.Text className="about-text">{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="grid">
      {" "}
      <video className="video" src={VIDEO} autoPlay loop></video>
      {aboutData.map(renderAbout)}
    </div>
  );
};

export default About;
