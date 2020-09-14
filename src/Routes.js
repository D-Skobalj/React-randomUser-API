import React  from 'react'
import {BrowserRouter as Router, Route } from "react-router-dom"
import { PersonList } from "./Components"
import PersonDetail from "./Page/PersonDetail"

export default class Routes extends React.Component {

    render() {
        
        const getPerson = props => {
            let id = this.props.persons.match.params.id
            let currentPerson = this.props.persons.find(
            p => p.name.first.toLowerCase() === id.toLowerCase())
        
            return <PersonDetail {...props} person = {currentPerson} />
        
        }
        const { persons, searchInput } = this.props
        return (
            <div>
                <Router>
                    <Route exact path="/" render={() => 
                        <PersonList 
                            persons={persons} 
                            searchInput={searchInput} 
                        /> } 
                    />
                    <Route exact path="/contact/:id" render={getPerson} />
                    <Router path="/" render={() => <div>Opps....We cound'nt find the page you were looking for.</div>} /> 
                </Router>   
            </div>
        )
    }
}
