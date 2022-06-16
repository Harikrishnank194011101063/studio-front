import React from 'react'
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'


function Aboutus() {
  return (
    <div class="d-flex justify-content-center">
     {["Dark"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "30rem" }}
              className="mb-2"
            >
              <Card.Header>the details are here</Card.Header>
              <Card.Body>
                <Card.Title>
                  address{" "}
                </Card.Title>
                <Card.Text>
                shakthi Sound Studio, No.1, Crescent Avenue Road, Gandhi Nagar, Adyar, Chennai, Tamil Nadu
                contact info :987654321
                if you deal any problems in registering call us 
                and you can now check the occupied time list <Link to={"/occupied"}><Button>click here to check</Button></Link>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
    </div>
  )
}

export default Aboutus
