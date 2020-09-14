import React from "react"
import { Container, Jumbotron } from "react-bootstrap";
import { SearchBar } from "./SearchBar"

const Header = ({ onChangeHandler, onSubmitHandler}) => {
  
  return (
    <div>
      <Jumbotron className="Jumbotron">
          <Container>
            <h1>Telefonkatalog</h1>
            <p>Randomuser API</p>
            <SearchBar 
              onChangeHandler={onChangeHandler}   
              onSubmitHandler={onSubmitHandler}       
            />
          </Container>
      </Jumbotron>
    </div>
  ) 
} 

export default Header