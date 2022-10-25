import React from 'react';
import Real from "../assets/images/realfakeeb.gif";
import Note from "../assets/images/note.gif";
import Password from "../assets/images/password.gif";
import Coming from "../assets/images/coming.gif";
import "./Portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup} from "react-bootstrap";



function Portfolio() {
     return (
      
      <CardGroup className='card-portfolio'>
      {/* CARD 01 */}
        <Card>
          <Card.Img  className='img-portfolio' variant="top" src={Real}/>
          <Card.Body>
            <Card.Title><a
          href="https://real-fake-store.herokuapp.com/"
          className="event-link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}RealFake Store{" "}
        </a> </Card.Title>
            <Card.Text>
            A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.
            Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.
            </Card.Text>
          </Card.Body>
          <Card.Footer>

          <small className="text-muted">Technologies: MongoDB, Express.js,Node.js, React.js, Heroku & GraphQL 
              
            </small>
          </Card.Footer>
        </Card>

{/* CARD 02  */}

        <Card>
          <Card.Img className='img-portfolio' variant="top" src={Password} />
          <Card.Body>
            <Card.Title><a
          href="https://inaiak.github.io/Password-generator/"
          className="event-link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}Password Generator{" "}
        </a></Card.Title>
            <Card.Text>
            An application that enables employees to generate random passwords based on criteria that they’ve selected. 
            This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes..{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Technologies:HTML, CSS, JavaScript</small>
          </Card.Footer>
        </Card>

        {/* CARD 03 */}
        <Card>
          <Card.Img className='img-portfolio' variant="top" src={Note} />
          <Card.Body>
            <Card.Title><a
          href="https://tranquil-dawn-45157.herokuapp.com/"
          className="event-link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}Note Taker {" "}
        </a></Card.Title>
            <Card.Text>
            Note Taker that can be used to write and save notes.
            This application will use an Express.js back end and will save and retrieve note data from a JSON file.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Technologies:Bootstrap, JavaScript, Express.js</small>
          </Card.Footer>
        </Card>
        {/* CARD 04  */}

        <Card>
          <Card.Img className='img-portfolio' variant="top" src={Coming} />
          <Card.Body>
            <Card.Title>Future Project</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Technologies</small>
          </Card.Footer>
        </Card>       
      </CardGroup>
    );
  }
  
export default Portfolio;  






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
  