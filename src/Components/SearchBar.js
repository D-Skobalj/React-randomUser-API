import React from "react"
import { FormControl, InputGroup, Button } from "react-bootstrap"


export const SearchBar = props => {

  return (
    <form onSubmit={props.onSubmitHandler}>
      <InputGroup className="mb-3 input-field"
        value={props.searchInput}
        onChange={props.onChangeHandler}
      >
      <FormControl placeholder="Sök Namn" />
      </InputGroup>
      <p>Sortera efter</p>
      <Button className="button-wh" variant="primary" size="sm">
        Kön
      </Button>
      &nbsp;
      <Button className="button-wh" variant="primary" size="sm">
        namn A-Ö
      </Button>
    </form>
  )  
}
