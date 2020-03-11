import React from "react"
import axios from "axios"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PersonList from "./Components/PersonList"
import Header from "./Components/Header"
import PersonDetail from "./Page/PersonDetail"
import Loader from "./Components/Loader"

//const invertDirection = {
//  asc: "desc",
//  desc: "asc"
//}

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
    axios.get("https://randomuser.me/api/?results=30&?inc=nat")
    .then( res => {
      this.setState({
        persons: res.data.results,
        isLoading: false
      })
    }).catch(err => {
      console.log(`Errordata: ${err}`)
    })
  }
  
  // Listening on input
  onChangeHandler = (e) => {
    this.setState({searchInput: e.target.value})
  }

  // Preventing page refresh/form submit on submit
  onSubmitHandler = (e) => {
    e.preventDefault()
  }
  
  render() {  

    return (
      <Router>
        <Header onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler} />
        <Switch>  
          {/* If loading state is true, render the Loader component, else render personlist */}
          <Route exact path="/" render={() => this.state.isLoading ? <Loader /> : 
            <PersonList 
              persons={this.state.persons} 
              searchInput={this.state.searchInput} /> } 
          />
          <Route exact path="/contact/:id" render={(routerProps) => <PersonDetail persons={this.state.persons} {...routerProps} />} />
          <Route path="/" render={() => <div>Opps....We cound'nt find the page you were looking for.</div>} /> 
        </Switch>
      </Router>
    )
  }
}
