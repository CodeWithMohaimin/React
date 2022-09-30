import React, { Component } from 'react'

export default class Input extends Component {

  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
  }

  handelChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return (
      <div className='container form'>
        <h1>Working With Forms in React</h1>
          <div>
            <input
              type="text"
              name='name'
              placeholder='Name'
              onChange={this.handelChange}
              value={this.state.name}
            />
          
            <select
              name="country"
              onChange={this.handelChange}
              value={this.state.country}
            >
              <option>Select Your Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="London">London</option>
            </select>
            
            <textarea
              name="bio"
              placeholder='Write Bio'
              onChange={this.handelChange}
              value={this.state.bio}
            ></textarea>

            <input
              name='birthday'
              type="date"
              onChange={this.handelChange}
              value={this.state.birthday}
            />
            <button
              onClick={() => {
                console.log(this.state)
              }}
            >Show Data
            </button>
      </div>
    </div>
    )
  }
}
