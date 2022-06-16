import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function frontpage() {
  return (
    <div>
      {/* <ul>
        <li>why we started </li>
        <li>what is speacial </li>
        <li>
          why this page which will say about the schedule timinng where the
          studio is free and when it is occupied{" "}
        </li>
        <li>to apply visit visit apply page on the top </li>
      </ul> */}

      {
        //hover thse cards
      }
      <div className="cards">
        <>
          {["dark"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "13rem" }}
              className="mb-2"
            >
              <Card.Header>let us guide you</Card.Header>
              <Card.Body>
                <Card.Title>
                  click on <Link to="/apply"> APPLY </Link>{" "}
                </Card.Title>
                <Card.Text>to register your timing</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
       &nbsp;


        <>
          {["Dark"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "13rem" }}
              className="mb-2"
            >
              <Card.Header>let us guide you</Card.Header>
              <Card.Body>
                <Card.Title>
                  click on <Link to="/occupied"> occupied </Link>{" "}
                </Card.Title>
                <Card.Text>
                  to check if you registered correctly and check for the
                  freetime
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
</>
</div>
<div className="h8name">
          <p>A recording studio is a specialized facility for sound recording, mixing, and audio production of instrumental or vocal musical performances, spoken words, and other sounds.<br/> They range in size from a small in-home project studio large enough to record a single singer-guitarist, to a large building with space for a full orchestra of 100 or more musicians.<br/> Ideally, both the recording and monitoring (listening and mixing) spaces are specially designed by an acoustician or audio engineer to achieve optimum acoustic properties <br/>(acoustic isolation or diffusion or absorption of reflected sound echoes <br/>that could otherwise interfere with the sound heard by the listener).</p>

</div>


<div className="aboutdown">
<span ><Link to={"/aboutus"}>ABOUT US</Link> /<Link to={"/apply"}>APPLY</Link></span>
     </div> 
    </div>
 
 
 
 
 
 
 
 
 );
}

export default frontpage;
