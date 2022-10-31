import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
//Assets
import Real from "../assets/images/realfakeeb.gif";
import Note from "../assets/images/note.gif";
import Password from "../assets/images/password.gif";
import Coming from "../assets/images/coming.gif";

const Portfolio = () => {
  const cardData = [
    {
      img: Real,
      altText: "app.gif",
      title: "Real Fake Store",
      deployed: "https://real-fake-store.herokuapp.com/",
      description:
        "A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.",
    },
    {
      img: Note,
      altText: "app.gif",
      title: "Note Taker",
      deployed: "https://tranquil-dawn-45157.herokuapp.com/",
      description:
        "Handy Note Taker live deployed on Heroku which will allow the user to write and store notes!",
    },

    {
      img: Password,
      altText: "app.gif",
      title: "Password Generator",
      deployed: "https://inaiak.github.io/Password-generator/",
      description:
        " An application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.clean and polished, responsive user interface that adapts to multiple screen sizes.",
    },
    {
      img: Coming,
      altText: "app.gif",
      title: "Future Project",
      deployed: " ",
      description: " ",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card key={index} className="cardbox">
        <Card.Img variant="top" src={card.img} alt={card.altText} />
        <Card.Body className="cardbody">
            <Button className="buttonportfolio">
            <a className="aportfolio" href={card.deployed} target="_blank" rel="noreferrer noopener">
               {card.title}
            </a>
          </Button>
          {/* <Card.Title>{card.title}</Card.Title> */}
          <Card.Text>{card.description}</Card.Text>
        
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid"> {cardData.map(renderCard)}</div>;
};

export default Portfolio;
