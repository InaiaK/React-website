import React from "react";
import  Inaiapicture from '../assets/images/inaia.jpeg';
import Qrcode from '../assets/images/qrcode.png';
import "./AboutMe.css";
import {Card} from "react-bootstrap";
import "react-bootstrap";

//functional component.
 function AboutMe() {
  return (
    <>
   
<Card>
      <Card.Img style={{  width: '25rem', border:"15"}} variant="top"  src={Inaiapicture}  />
      <a
          href="https://docs.google.com/document/d/1yOadZ6xjOhjUliVfG67TEzYHTqOhzdbc/edit#heading=h.gjdgxs"
          className="resume"
          target="_blank"
          rel="noreferrer"
        >
          {" "}Resume{" "}
        </a>
      <Card.Body>
        <Card.Title>Inaia Martin</Card.Title>
        <Card.Text>
        I am a dedicated professional looking for a front end developer role
        following my completion of the University of Denver’s FullStack
        BootCamp. I’m a dynamic learner (I speak native Portuguese, English and
        Spanish), and hard working (I completed DU’s bootcamp while working full
        time), and I’m excited to learn and grow in this new career. Currently
        working as a Freelance to improve my skills. 
        
        </Card.Text>
        <Card.Img style={{  width: '25rem', border:"15"}} variant="top"  src={Qrcode}  />
       
      </Card.Body>
    </Card>
   
    <Card>
      <Card.Img style={{  width: '25rem', border:"15"}} variant="top"  src={Inaiapicture}  />
      <a
          href="https://docs.google.com/document/d/1yOadZ6xjOhjUliVfG67TEzYHTqOhzdbc/edit#heading=h.gjdgxs"
          className="resume"
          target="_blank"
          rel="noreferrer"
        >
          {" "}Resume{" "}
        </a>
      <Card.Body>
        <Card.Title>Inaia Martin</Card.Title>
        <Card.Text>
        I am a dedicated professional looking for a front end developer role
        following my completion of the University of Denver’s FullStack
        BootCamp. I’m a dynamic learner (I speak native Portuguese, English and
        Spanish), and hard working (I completed DU’s bootcamp while working full
        time), and I’m excited to learn and grow in this new career. Currently
        working as a Freelance to improve my skills. 
        
        </Card.Text>
        <Card.Img style={{  width: '25rem', border:"15"}} variant="top"  src={Qrcode}  />
       
      </Card.Body>
    </Card>
    </>   
  );
};

export default AboutMe; 


