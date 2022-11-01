import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
// Assets
import REAL from "../assets/images/realfakeeb.gif";
import NOTE from "../assets/images/note.gif";
import PASSWORD from "../assets/images/password.gif";
import COMING from "../assets/images/coming.gif";

const Portfolio = () => {
  const cardData = [
    {
      img: REAL,
      altText: "An animation showing use of the Real Fake Store app",
      title: "Real Fake Store",
      deployed: "https://real-fake-store.herokuapp.com/",
      description:
        "A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.",
    },
    {
      img: NOTE,
      altText: "An animation showing use of the Note app",
      title: "Note Taker",
      deployed: "https://tranquil-dawn-45157.herokuapp.com/",
      description:
        "Handy Note Taker live deployed on Heroku which will allow the user to write and store notes!",
    },

    {
      img: PASSWORD,
      altText: "An animation showing use of the Password app",
      title: "Password Generator",
      deployed: "https://inaiak.github.io/Password-generator/",
      description:
        " An application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.clean and polished, responsive user interface that adapts to multiple screen sizes.",
    },
    {
      img: COMING,
      altText: "An animation showing coming word",
      title: "Future Project",
      deployed: " ",
      description: " ",
    },
  ];

  const renderCard = ({img, altText, title, description, deployed}, index) => {
    return (
      <Card key={`portfolio-card-${index}`} className="card-box">
        <Card.Img  src={img} alt={altText} />
        <Card.Body className="card-body">
          <Button className="bttn-portfolio">
            <a
              className="a-portfolio"
              href={deployed}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}
            </a>
          </Button>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid"> {cardData.map(renderCard)}</div>;
};

export default Portfolio;
