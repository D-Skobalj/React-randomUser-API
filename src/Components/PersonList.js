import React from "react"
import PersonContainer from "./PersonContainer"

const PersonList = props => {
  // Sort persons array of objects by firstName
  let sortByName = props.persons.sort((a, b) => {
    let aName = a.name.first.toLowerCase()
    let bName = b.name.first.toLowerCase()

    if(aName < bName) {
      return -1
    } 
    else if(aName > bName) {
      return 1
    }
    return 0
  })
  

  // Filter persons from search input
  let filtered = props.persons.filter(p => {
    return (
      p.name.first.toLowerCase().includes(props.searchInput.toLowerCase()) ||
      p.name.last.toLowerCase().includes(props.searchInput.toLowerCase())
    )
  })

  return (
    // Looping and displaying the person containers,
    // if no search value was entered display all users. 
    <div className="pic-list-container">
      {filtered.map( p =>
        <PersonContainer {...p} key={p.cell} />
      )}
    </div>
  )   
}

export default PersonList