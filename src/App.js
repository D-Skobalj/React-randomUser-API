import React from "react"
import axios from "axios"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { PersonList, Header, Loader } from './Components'
import PersonDetail from './Page/PersonDetail'

export default class App extends React.Component {

  state = {
    persons: [],
    searchInput: "",
    sortDirection: "asc",
    isLoading: true
  }  

  componentDidMount() {
    this.getData()
  }

  // requesting 30 random users using Axios 
  getData = () => {
    const URL = "https://randomuser.me/api/?results=30&?inc=nat"
    
    axios
    .get(URL)
    .then( res => {
      this.setState({
        persons: res.data.results,
        isLoading: false
      })
    })
    .catch(err => {
      console.log(`Errordata: ${err}`)
    })
  }
  
  // Listening on input and using arrowfunctions to avoid unnecessary bindings.
  onChangeHandler = (e) => {
    this.setState({searchInput: e.target.value})
  }

  // Preventing page refresh/form submit on submit
  onSubmitHandler = (e) => {
    e.preventDefault()
  }
  
  render() {  
    const { persons, searchInput, isLoading } = this.state;
    return (
      <Router>
        <Header onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler} />
        <Switch>  
          {/* If loading state is true, render the Loader component, else render personlist */}
          <Route exact path="/" render={() => isLoading ? <Loader /> : 
            <PersonList 
              persons={persons} 
              searchInput={searchInput} /> } 
          />
          <Route exact path="/contact/:id" render={(routerProps) => <PersonDetail persons={persons} {...routerProps} />} />
          <Route path="/" render={() => <div>Opps....We cound'nt find the page you were looking for.</div>} /> 
        </Switch>
      </Router>
    )
  }
}
