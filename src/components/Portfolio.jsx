import React from 'react';
import Event from "../assets/images/event2.webp";
import Real from "../assets/images/realfake.jpg";
import Note from "../assets/images/notetaker.jpeg";
import Password from "../assets/images/password.jpeg";
import "./Portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from "react-bootstrap";


function Portfolio() {
     return (
      <CardGroup className='card-portfolio'>
      {/* CARD 01 */}
        <Card>
          <Card.Img  className='img-portfolio' variant="top" src={Event}/>
          <Card.Body>
            <Card.Title>Project - EventeListner</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a 
            href="https://inaiak.github.io/eventListener/" 
            className='event'
            target="_blank"
          rel="noreferrer"
          >

          </a>
            <small className="text-muted">HTML CSS JAVASCRIPT </small>
          </Card.Footer>
        </Card>

{/* CARD 02  */}

        <Card>
          <Card.Img className='img-portfolio' variant="top" src={Real} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        {/* CARD 03 */}
        <Card>
          <Card.Img className='img-portfolio' variant="top" src={Note} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        {/* CARD 04  */}

        <Card>
          <Card.Img className='img-portfolio' variant="top" src={Password} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        {/* CARD 04  */}
        
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
  