import React from 'react'
import { Container, Card, Button, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const PersonDetail = (props) => {

    const id = props.match.params.id
    const person = props.persons.find(p => p.login.uuid === id)

    return (
        <Container className="pd-container"> 
            <Card bg="light" text="dark">
                <Card.Header className="card-header" as="h3" bg="#404040">{person.name.first} {person.name.last}</Card.Header>
                <Card.Body>
                <img src={person.picture.large} alt=""  />
                <Row>
                    <Card.Text className="card pd-card col">
                        <strong>Telefonnummer:</strong> {person.cell}
                        <strong>Adress:</strong> {person.location.street.name} {person.location.street.number} {person.location.city}
                        <br /> 
                        <strong>Email:</strong> {person.email}
                        <br />
                        <strong>Från:</strong> {person.location.country}
                        <strong>Registrerades:</strong> {person.registered.date}
                        <br /> 
                        <strong>Ålder:</strong> {person.dob.age}
                        <br />
                        <strong>Kön:</strong> {person.gender}
                    </Card.Text>
                </Row>
                <Link to={"/"}>
                    <Button className="button" size="sm">Tillbaka</Button>
                </Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default PersonDetail