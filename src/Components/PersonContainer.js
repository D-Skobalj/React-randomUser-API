import React from "react"
import { useSpring, animated } from "react-spring"
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const PersonContainer = props => {

  // Adding fade to populated PersonContainer div
  const fade = useSpring({ from: { opacity: 0}, opacity: 1})
  
  return (
    <animated.div className="personcontainer" style={fade}>
      <img src={props.picture.medium} alt="" />
      <Link to={{ pathname: `/contact/${props.login.uuid}`, state: props.name.first }}>
        <Card className="card-list" bg="light" text="dark">
          <Card.Header as="h3" bg="#404040">{props.name.first} {props.name.last}</Card.Header>
          <Card.Body>
            <Card.Title as="h3">{props.cell}</Card.Title>
            <Card.Text>
              <strong>Adress:</strong> {props.location.street.name} {props.location.street.number} {props.location.city}
              <br /> 
              <strong>Email:</strong> {props.email}
            </Card.Text>
            <Button className="button" size="sm">mer info</Button>
          </Card.Body>
        </Card>
      </Link>
    </animated.div>
  )
}

export default PersonContainer