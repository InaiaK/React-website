import React from 'react';
import { Card, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Portfolio.css";
//Assets
import Real from "../assets/images/realfakeeb.gif";
import Note from "../assets/images/note.gif";
// import Password from "../assets/images/password.gif";
// import Coming from "../assets/images/coming.gif";


const Portfolio = () => {
  const cardData = [
  {
    img: Real,
    altText:"picture",
    title:"Real Fake Store",
    deployed:"https://real-fake-store.herokuapp.com/",
    description:"A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.",
  },
  {
    img: Note,
    altText:"picture",
    title:"Note Taker",
    deployed:"https://real-fake-store.herokuapp.com/",
    description:"A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.",

  }
];


const renderCard = (card,index)  => {
  return (
  <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={card.img} alt={card.altText}/>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
    {card.description}
        </Card.Text>
        <Button >
          <a href={card.deployed}
          target="_blank"
          rel="noreferrer noopener">
            Visit {card.title}
          </a>
          </Button>
      </Card.Body>
    </Card>
  );
};

return (
<div className='grid'> {cardData.map(renderCard)}</div>
);
};
   
            
export default Portfolio;
