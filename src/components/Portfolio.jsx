import React from 'react';
import { Card, CardGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Portfolio.css";
//Assets
import Real from "../assets/images/realfakeeb.gif";
import Note from "../assets/images/note.gif";
import Password from "../assets/images/password.gif";
import Coming from "../assets/images/coming.gif";


const portfolioData =[
  {
    id:"card1",
    img: Real,
    title:"Real Fake Store",
    deployed:"https://real-fake-store.herokuapp.com/",
    description:"A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.",
  },
];

const Portfolio = () => {
     return ( 

<CardGroup>
  {portfolioData.map (
    ({
      id,
      img,
      title,
      deployed,
      description,
    }) => {
      return (

        <Card>
<Card.Img  className='img-portfolio' variant="top" src={img}/>
 <Card.Body className='card-portfolio'>
          <Card.Title><a
          href={deployed}
          className="real-link"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a> </Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>

    }




  
  
export default Portfolio;  




//           href="https://inaiak.github.io/Password-generator/"
//           className="event-link"
//           target="_blank"
//           rel="noreferrer"
//         >
//           {" "}Password Generator{" "}
//         </a></Card.Title>
//             <Card.Text>
//             An application that enables employees to generate random passwords based on criteria that they’ve selected. 
//             This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.{' '}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Technologies:HTML, CSS, JavaScript</small>
//           </Card.Footer>
//         </Card>

//         {/* CARD 03 */}
//         <Card>
//           <Card.Img className='img-portfolio' variant="top" src={Note} />
//           <Card.Body className='card-portfolio'>
//             <Card.Title><a
//           href="https://tranquil-dawn-45157.herokuapp.com/"
//           className="event-link"
//           target="_blank"
//           rel="noreferrer"
//         >
//           {" "}Note Taker {" "}
//         </a></Card.Title>
//             <Card.Text>
//             Note Taker that can be used to write and save notes.
//                        </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Technologies:Bootstrap, JavaScript, Express.js</small>
//           </Card.Footer>
//         </Card>
//         {/* CARD 04  */}

//         <Card>
//           <Card.Img className='img-portfolio' variant="top" src={Coming} />
//           <Card.Body>
//             <Card.Title>Future Project</Card.Title>
//             <Card.Text>
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Technologies</small>
//           </Card.Footer>
//         </Card>       
//       </CardGroup>
   






//plan b 

//   return (
  //     <Carousel >
  //       <Carousel.Item interval={1000} className='carousel'>
  //         <img
  //           className="d-block w-100"
  //           src={Event}
  //           alt="First slide"
  //         />
  //         <Carousel.Caption>
  //           <h3>Project: EventeListner</h3>
  //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //           <a 
  //           href="https://inaiak.github.io/eventListener/" 
  //           className='event'
  //           target="_blank"
  //         rel="noreferrer"
  //         >
  //           {''}
  //         </a>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <img
  //           className="d-block w-100"
  //           src={Note}
  //           alt="Second slide"
  //         />
  
  //         <Carousel.Caption>
  //           <h3>Second slide label</h3>
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <img
  //           className="d-block w-100"
  //           src={Real}
  //           alt="Third slide"
  //         />
  //  <Carousel.Caption>
  //           <h3>Second slide label</h3>
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <img
  //           className="d-block w-100"
  //           src={Password}
  //           alt="Third slide"
  //         />
  //         <Carousel.Caption>
  //           <h3>Third slide label</h3>
  //           <p>
  //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //           </p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //     </Carousel>
  //   );
  