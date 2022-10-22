import React from "react";
import  '../components/assets/images/inaia.jpeg';
  // HOW TO TRANSFER IMAGE 
    import "./AboutMe.css";
    import {Card} from "react-bootstrap";


//functional component.
 function AboutMe() {
  return (
    <>
   
<Card style={{ width: '50rem', border:"15"}}>
      <Card.Img variant="top" src="inaia.jpeg/100px180" />
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

    </>   
  );
};

export default AboutMe; 


