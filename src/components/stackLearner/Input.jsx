import React, { Component } from 'react'

export default class Input extends Component {

  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
    gender: '',
    agree: false,
    skills:[],
  }

  handelChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleCheckbox = event => { 
    this.setState({
     agree:event.target.checked
    })
  }

  skillHandel = event => {
    if (event.target.checked) {
      this.setState({
        skills:[...this.state.skills , event.target.value]
      })
    } else {
      const filteredSkills = this.state.skills.filter(sk => sk !== event.target.value);

      this.setState({skills:filteredSkills})
    }
  }

  render() {
    const { name, country, bio, birthday, agree, skills, } = this.state;
    return (
      <div className='container form' >
        <h1>Working With Forms in React</h1>
          <div>
            <input
              type="text"
              name='name'
              placeholder='Name'
              onChange={this.handelChange}
              value={name}
            />
          
            <select
              name="country"
              onChange={this.handelChange}
              value={country}
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
              value={bio}
            ></textarea>

            <input
              name='birthday'
              type="date"
              onChange={this.handelChange}
              value={birthday}
            />
            <button
              onClick={() => {
                console.log(this.state)
              }}
            >Show Data
          </button>
          
          <div className='radios'>
            <input
              type="radio" name="gender"
              value='Male'
              onChange={this.handelChange}
            />
            Male
            <input
              type="radio" name="gender"
              value='FEMale'
              onChange={this.handelChange}
            />
            female
            <input
              type="radio" name='gender'
              value='Others'
              onChange={this.handelChange}
            />
            Other

            <input
              type="checkBox"
              name='agree'
              checked={agree}
              onChange={this.handleCheckbox}
            />
            I agree with the following options
        </div>
        </div>
        <div className='radios'>
          <h1>Skills :</h1>
          <input
            type="checkbox"
            name='skills'
            value='Java'
            checked={skills.includes('Java')}
            onChange ={this.skillHandel}
          />Java

          <input
            type="checkbox"
            name='skills'
            value='Javascript'
            checked={skills.includes('Javascript')}
            onChange ={this.skillHandel}
          />Javascript

          <input
            type="checkbox"
            name='skills'
            value='C Lang'
            checked={skills.includes('C Lang')}
            onChange ={this.skillHandel}
          />C Lang

          <input
            type="checkbox"
            name='skills'
            value='Python'
            checked={skills.includes('Python')}
            onChange ={this.skillHandel}
          />Python

          <input
            type="checkbox"
            name='skills'
            value='golang'
            checked={skills.includes('golang')}
            onChange ={this.skillHandel}
          />golang


        </div>
       
      </div>
      
    )
  }
}
