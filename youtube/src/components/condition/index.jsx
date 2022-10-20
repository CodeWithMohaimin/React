import React, { Component } from 'react'
import Home from './Home';
import Login from './Login';



export default class index extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn: true,
        }
      }
      
  render() {
      if (this.state.isLoggedIn) {
        return <Home />
      } else {
          return <Login />
    }
  }
}
