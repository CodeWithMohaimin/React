import React, { Component } from 'react'

export default class UnControlForm extends Component {
    

    handleSubmit = (event) => {
        event.preventDefault();
    }

  render() {
    return (
        <div>
            <form className='unControlForm'>
            <input
                type="text"
                name='name'
                placeholder='Name'
            />
            <br />
            <input
                type="email"
                name='email'
                placeholder='email@example.com'
            />
            
            <br />
                
            <input
                type="password"
                name='password'
                placeholder='*******'
            />
            <br />

            <button
                type='submit'

             >Submit </button>
            </form>
            <button>
                Sign Up
            </button>
      </div>
    )
  }
}

//this is good practice   