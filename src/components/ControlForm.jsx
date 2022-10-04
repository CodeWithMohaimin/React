import React, { Component } from 'react'

export default class ControlForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  }

  onChangeHandel = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state)
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className='unControlForm'
        >
          <input
            type="text"
            name='name'
            placeholder='Name'
            value={name}
            onChange ={this.onChangeHandel}
          />
          <br />
          <input
            type="email"
            name='email'
            placeholder='email@example.com'
            value={email}
            onChange ={this.onChangeHandel}
          />
          <br />
          <input
            type="password"
            name='password'
            placeholder='*******'
            value={password}
            onChange ={this.onChangeHandel}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
