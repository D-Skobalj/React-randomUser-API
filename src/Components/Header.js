import React from "react"
import { Container, Jumbotron } from "react-bootstrap";
import { SearchBar } from "./SearchBar"

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="Jumbotron">
          <Container>
            <h1>Telefonkatalog</h1>
            <p>Randomuser API</p>
            <SearchBar 
              onChangeHandler={props.onChangeHandler}   
              onSubmitHandler={props.onSubmitHandler}       
            />
          </Container>
      </Jumbotron>
    </div>
  ) 
} 

export default Header