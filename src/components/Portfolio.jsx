import React from 'react';
//import { Card, CardGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Portfolio.css";
//Assets
import Real from "../assets/images/realfakeeb.gif";
import Note from "../assets/images/note.gif";
// import Password from "../assets/images/password.gif";
// import Coming from "../assets/images/coming.gif";


const portfolioData =[
  {
    key:"card1",
    img: Real,
    altText:"picture",
    title:"Real Fake Store",
    deployed:"https://real-fake-store.herokuapp.com/",
    description:"A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.",
  },
  {
    key:"card2",
    img: Note,
    altText:"picture",
    title:"Real Fake Store",
    deployed:"https://real-fake-store.herokuapp.com/",
    description:"A place for intergalactic travelers to find the products they need to keep sane on their long journeys through space.Whether they want something unique or something real fake, the real fake store has it all. Our application is web responsive, easily visible on a mobile device or from your spaceship’s console.",

  }
];

      const Portfolio = () => {
        return (
          <main>
            <section className="gridRow">
              {portfolioData.map(
                ({
                  key,
                  img,
                  altText,
                  title,
                  deployed,
                  description,
                }) => {
                  return (
                    <div key={key} className="card">
                      <img className="card-img-top" src={img} alt={altText} />
                      <div className="card-body">
                        <h5 className="text-center">
                          <a
                            className="card-title text-white"
                            href={deployed}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                           
                          </a>
                        </h5>{title}
                        <p className="card-text text-center">   {description}</p>
                        <a
                          href={deployed}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Github Page
                        </a>
                      </div>
                    </div>
                  );
                }
              )}
            </section>
          </main>
        );
      };
      
      export default Portfolio;