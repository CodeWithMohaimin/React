import React, { Component } from 'react'

export default class event extends Component {

    state = {
        name: ''
    }

    onChangeHandler = (e) => {
        this.setState({name:e.target.value})
    }

    onFocusHandler = () => {
        console.log('Focus is success')
    }

    onBlurHandler = () => {
        if (!this.state.name) {
            alert('Write a Text')
        }
    }
  render() {
    return (
        <div>
            <input
                type="text"
                placeholder='Type Text'
                value={this.state.name}
                onChange={this.onChangeHandler}
                onFocus={this.onFocusHandler}
                onBlur={this.onBlurHandler}
            />
            <h2>Welcome,{this.state.name} </h2>
      </div>
    )
  }
}
