import React from "react";
import  Inaiapicture from '../assets/images/inaia.jpeg';
import Qrcode from '../assets/images/qrcode.png';
import "./AboutMe.css";
import {Card} from "react-bootstrap";
import "react-bootstrap";
import Video from "../assets/video/background2.mp4";

//functional component.
 function AboutMe() {
  return (
    <>
    <div className="backgroundvideo">
     <video className="video" src={Video} autoPlay loop muted
        style={{ position:"absolute", objectFit:"cover", zIndex:"-1"}}/> 
   
<Card className="Cardaboutme">
      <Card.Img  style={{  width: '15rem', border:"15"}} src={Inaiapicture}  />
      <a
          href="https://docs.google.com/document/d/1yOadZ6xjOhjUliVfG67TEzYHTqOhzdbc/edit#heading=h.gjdgxs"
          className="resume"
          target="_blank"
          rel="noreferrer"
        >
          {" "}Resume{" "}
        </a> 
        <Card.Img style={{  width: '15rem', border:"15"}} variant="top"  src={Qrcode}  />
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
      </Card.Body>
    </Card>
   </div>
    
    </>   
  );
};

export default AboutMe; 


