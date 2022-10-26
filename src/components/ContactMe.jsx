import React from "react";
import Form from 'react-bootstrap/Form';
//       {/* CREATE DIV FORM 
// ADD BACKGROUND IMG OR MP4
//   CREATE FUNCTION FOR EMAIL.JS 
//   CREATE FORM SPACE  */}

export default function ContactMe() {
 
    return (
      <> 
    <h1>ContactMe</h1>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

     
      <a
        href="https://github.com/InaiaK"
        className="github"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/inaia-martin/"
        className="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Linkedin{" "}
      </a>
          </>
        );
      }
      


