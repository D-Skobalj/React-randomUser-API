import React from "react"
import { FormControl, InputGroup } from "react-bootstrap"


export const SearchBar = ({ onSubmitHandler, searchInput, onChangeHandler }) => {

  return (
    <form onSubmit={onSubmitHandler}>
      <InputGroup className="mb-3 input-field"
        value={searchInput}
        onChange={onChangeHandler}>
      <FormControl placeholder="Sök efter förnamn eller efternamn" />
      </InputGroup>
    </form>
  )  
}
